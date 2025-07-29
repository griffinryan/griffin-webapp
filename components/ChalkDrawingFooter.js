import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { 
  generateLetterPaths, 
  drawChalkStroke, 
  ChalkDust,
  createChalkTexture 
} from './utils/chalkEffects';

const MotionBox = motion(Box);

const ChalkDrawingFooter = ({ text = ["A WHOLE STABLE", "OF", "SHOW PONIES!"], delay = 0 }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 200 });
  
  // Animation state
  const animationState = useRef({
    phase: 'drawing', // 'drawing', 'display', 'erasing'
    progress: 0,
    letterIndex: 0,
    displayTimer: 0,
    particles: [],
    letterPaths: []
  });

  // Calculate canvas dimensions based on viewport
  useEffect(() => {
    const updateDimensions = () => {
      const container = canvasRef.current?.parentElement;
      if (container) {
        const rect = container.getBoundingClientRect();
        setDimensions({
          width: Math.min(rect.width, 1200), // Max width
          height: 200
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Initialize letter paths
  useEffect(() => {
    const fontSize = Math.min(dimensions.width / 16, 60); // Bigger font size
    const spacing = fontSize * 0.25; // Good spacing between letters
    animationState.current.letterPaths = generateLetterPaths(text, fontSize, spacing, dimensions.width, dimensions.height);
  }, [text, dimensions]);

  // Main animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;

    // Set actual canvas size for retina displays
    canvas.width = dimensions.width * dpr;
    canvas.height = dimensions.height * dpr;
    ctx.scale(dpr, dpr);

    // Animation parameters
    const DRAWING_SPEED = 0.04; // Fast drawing
    const ERASING_SPEED = 0.05; // Fast erasing
    const DISPLAY_DURATION = 600; // Slightly longer display for footer

    const animate = (timestamp) => {
      const state = animationState.current;
      
      // Clear canvas
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);
      
      // Update and draw particles
      state.particles = state.particles.filter(particle => {
        particle.update();
        particle.draw(ctx);
        return particle.life > 0;
      });

      // Handle animation phases
      switch (state.phase) {
        case 'drawing':
          // Draw completed letters
          for (let i = 0; i < state.letterIndex; i++) {
            const letter = state.letterPaths[i];
            if (letter && letter.paths) {
              ctx.save();
              ctx.translate(letter.x + letter.width/2, letter.y);
              ctx.rotate(letter.rotation);
              ctx.translate(-letter.x - letter.width/2, -letter.y);
              
              letter.paths.forEach(stroke => {
                drawChalkStroke(ctx, stroke, 1, 5, letter.color || 'cream');
              });
              
              ctx.restore();
            }
          }
          
          // Draw current letter with progress
          if (state.letterIndex < state.letterPaths.length) {
            const currentLetter = state.letterPaths[state.letterIndex];
            if (currentLetter && currentLetter.paths) {
              ctx.save();
              ctx.translate(currentLetter.x + currentLetter.width/2, currentLetter.y);
              ctx.rotate(currentLetter.rotation);
              ctx.translate(-currentLetter.x - currentLetter.width/2, -currentLetter.y);
              
              currentLetter.paths.forEach((stroke, strokeIndex) => {
                const strokeProgress = Math.max(0, Math.min(1, 
                  (state.progress - strokeIndex * (1 / currentLetter.paths.length)) * currentLetter.paths.length
                ));
                
                if (strokeProgress > 0) {
                  drawChalkStroke(ctx, stroke, strokeProgress, 5, currentLetter.color || 'cream');
                  
                  // Add dust particles at stroke end
                  if (strokeProgress > 0.9 && Math.random() < 0.1) {
                    const pointIndex = Math.floor(stroke.length * strokeProgress) - 1;
                    if (pointIndex >= 0 && stroke[pointIndex]) {
                      state.particles.push(new ChalkDust(
                        stroke[pointIndex].x,
                        stroke[pointIndex].y
                      ));
                    }
                  }
                }
              });
              
              ctx.restore();
            }
            
            // Update progress
            state.progress += DRAWING_SPEED;
            
            if (state.progress >= 1) {
              state.progress = 0;
              state.letterIndex++;
              
              if (state.letterIndex >= state.letterPaths.length) {
                state.phase = 'display';
                state.displayTimer = timestamp;
              }
            }
          }
          break;

        case 'display':
          // Draw all letters
          state.letterPaths.forEach(letter => {
            if (letter && letter.paths) {
              ctx.save();
              ctx.translate(letter.x + letter.width/2, letter.y);
              ctx.rotate(letter.rotation);
              ctx.translate(-letter.x - letter.width/2, -letter.y);
              
              letter.paths.forEach(stroke => {
                drawChalkStroke(ctx, stroke, 1, 5, letter.color || 'cream');
              });
              
              ctx.restore();
            }
          });
          
          // Check if display duration has passed
          if (timestamp - state.displayTimer > DISPLAY_DURATION) {
            state.phase = 'erasing';
            state.progress = 0;
            state.letterIndex = 0;
          }
          break;

        case 'erasing':
          // Draw all letters with reverse stroke animation
          for (let i = 0; i < state.letterPaths.length; i++) {
            const letter = state.letterPaths[i];
            if (letter && letter.paths) {
              ctx.save();
              ctx.translate(letter.x + letter.width/2, letter.y);
              ctx.rotate(letter.rotation);
              ctx.translate(-letter.x - letter.width/2, -letter.y);
              
              // Check if this letter is being erased
              const letterStartTime = i / state.letterPaths.length;
              const letterEndTime = (i + 1) / state.letterPaths.length;
              const letterProgress = (state.progress - letterStartTime) / (letterEndTime - letterStartTime);
              
              if (letterProgress <= 0) {
                // Letter not yet being erased - draw normally
                letter.paths.forEach(stroke => {
                  drawChalkStroke(ctx, stroke, 1, 5, letter.color || 'cream');
                });
              } else if (letterProgress < 1) {
                // Letter is being erased - draw in reverse
                letter.paths.forEach((stroke, strokeIndex) => {
                  const strokeEraseProgress = Math.max(0, Math.min(1, 
                    (letterProgress - strokeIndex * (1 / letter.paths.length)) * letter.paths.length
                  ));
                  
                  if (strokeEraseProgress < 1) {
                    // Draw the remaining part of the stroke
                    const remainingProgress = 1 - strokeEraseProgress;
                    drawChalkStroke(ctx, stroke, remainingProgress, 5, letter.color || 'cream');
                    
                    // Add dust particles at erase point
                    if (strokeEraseProgress > 0 && Math.random() < 0.1) {
                      const erasePointIndex = Math.floor(stroke.length * remainingProgress);
                      if (erasePointIndex >= 0 && erasePointIndex < stroke.length && stroke[erasePointIndex]) {
                        state.particles.push(new ChalkDust(
                          stroke[erasePointIndex].x,
                          stroke[erasePointIndex].y
                        ));
                      }
                    }
                  }
                });
              }
              // If letterProgress >= 1, letter is fully erased, don't draw
              
              ctx.restore();
            }
          }
          
          // Update erasing progress
          state.progress += ERASING_SPEED;
          
          if (state.progress >= 1) {
            // Reset animation
            state.phase = 'drawing';
            state.letterIndex = 0;
            state.progress = 0;
          }
          break;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [dimensions]);

  return (
    <MotionBox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      position="relative"
      width="100%"
      height={`${dimensions.height}px`}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <canvas
        ref={canvasRef}
        style={{
          width: `${dimensions.width}px`,
          height: `${dimensions.height}px`,
          display: 'block'
        }}
      />
    </MotionBox>
  );
};

export default ChalkDrawingFooter;