import React, { useEffect, useRef, useState } from 'react';
import { FireflySystem } from './core/FireflySystem.js';

const FireflyAnimation = ({ 
    fireflyCount = 120,
    isLightMode = false,
    bloomStrength = 4.0,
    mouseRadius = 200,
    mouseForce = 0.5,
    fogColor,
    fogNear = 10,
    fogFar = 1000
}) => {
    const containerRef = useRef(null);
    const systemRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true);
    
    // Determine fog color based on theme
    const computedFogColor = fogColor || (isLightMode ? 0xe8d5c4 : 0x0a192f);
    
    useEffect(() => {
        if (!containerRef.current) return;
        
        // Initialize firefly system
        try {
            systemRef.current = new FireflySystem(containerRef.current);
            
            // Apply initial configuration
            systemRef.current.setConfig({
                fireflyCount,
                isLightMode,
                bloomStrength,
                mouseRadius,
                mouseForce,
                fogColor: computedFogColor,
                fogNear,
                fogFar
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
                isLightMode,
                bloomStrength,
                mouseRadius,
                mouseForce,
                fogColor: computedFogColor,
                fogNear,
                fogFar
            });
        }
    }, [fireflyCount, isLightMode, bloomStrength, mouseRadius, mouseForce, computedFogColor, fogNear, fogFar]);
    
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