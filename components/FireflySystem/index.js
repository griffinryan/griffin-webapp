import React, { useEffect, useRef, useState } from 'react';
import { FireflySystem } from './core/FireflySystem.js';

const FireflyAnimation = ({ 
    fireflyCount = 80,
    usePurpleTheme = false,
    bloomStrength = 2.5,
    mouseRadius = 150,
    mouseForce = 0.3,
    fogColor = 0x0a0a2e,
    fogNear = 50,
    fogFar = 800,
    useSwirlingBackground = true,
    backgroundIntensity = 1.0
}) => {
    const containerRef = useRef(null);
    const systemRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        if (!containerRef.current) return;
        
        // Initialize firefly system
        try {
            systemRef.current = new FireflySystem(containerRef.current);
            
            // Apply initial configuration
            systemRef.current.setConfig({
                fireflyCount,
                usePurpleTheme,
                bloomStrength,
                mouseRadius,
                mouseForce,
                fogColor,
                fogNear,
                fogFar,
                useSwirlingBackground,
                backgroundIntensity
            });
            
            setIsLoading(false);
            
            // Expose to window for debugging in development
            if (process.env.NODE_ENV === 'development') {
                window.fireflySystem = systemRef.current;
            }
        } catch (error) {
            console.error('Failed to initialize firefly system:', error);
            setIsLoading(false);
        }
        
        // Cleanup function
        return () => {
            if (systemRef.current) {
                systemRef.current.destroy();
                systemRef.current = null;
            }
            
            // Remove from window in development
            if (process.env.NODE_ENV === 'development' && window.fireflySystem) {
                delete window.fireflySystem;
            }
        };
    }, []); // Empty dependency array - only run once on mount
    
    // Update configuration when props change
    useEffect(() => {
        if (systemRef.current) {
            systemRef.current.setConfig({
                fireflyCount,
                usePurpleTheme,
                bloomStrength,
                mouseRadius,
                mouseForce,
                fogColor,
                fogNear,
                fogFar,
                useSwirlingBackground,
                backgroundIntensity
            });
        }
    }, [fireflyCount, usePurpleTheme, bloomStrength, mouseRadius, mouseForce, fogColor, fogNear, fogFar, useSwirlingBackground, backgroundIntensity]);
    
    return (
        <div 
            ref={containerRef} 
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                pointerEvents: 'none'
            }}
        >
            {isLoading && (
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: '#888',
                    fontSize: '14px',
                    fontFamily: 'monospace'
                }}>
                    Initializing fireflies...
                </div>
            )}
        </div>
    );
};

export default FireflyAnimation;