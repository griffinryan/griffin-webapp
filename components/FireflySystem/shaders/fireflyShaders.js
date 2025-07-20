export const fireflyVertexShader = `
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vPosition;
    
    void main() {
        vUv = uv;
        vNormal = normalize(normalMatrix * normal);
        vPosition = position;
        
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        
        // Make point size responsive to distance
        gl_PointSize = 10.0 * (300.0 / -mvPosition.z);
    }
`;

export const fireflyFragmentShader = `
    uniform vec3 color;
    uniform float intensity;
    uniform float time;
    uniform float glowStrength;
    uniform float coreSize;
    
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vPosition;
    
    void main() {
        // Calculate distance from center for radial gradient
        vec2 center = vec2(0.5, 0.5);
        float dist = distance(vUv, center);
        
        // Create bright core with soft falloff
        float coreGlow = 1.0 - smoothstep(0.0, coreSize, dist);
        float outerGlow = 1.0 - smoothstep(coreSize, 1.0, dist);
        
        // Combine core and outer glow
        float glow = coreGlow * 2.0 + outerGlow * glowStrength;
        
        // Add subtle pulsing
        float pulse = sin(time * 3.0) * 0.1 + 0.9;
        glow *= pulse;
        
        // Apply intensity and create HDR-ready color
        vec3 glowColor = color * glow * intensity;
        
        // Add slight color variation based on intensity
        if (intensity > 1.0) {
            glowColor += vec3(0.2, 0.1, 0.0) * (intensity - 1.0);
        }
        
        // Soft edge fade
        float alpha = outerGlow * intensity;
        
        gl_FragColor = vec4(glowColor, alpha);
    }
`;

// Instanced version for optimization
export const instancedFireflyVertexShader = `
    attribute vec3 instancePosition;
    attribute float instanceScale;
    attribute float instanceIntensity;
    attribute vec3 instanceColor;
    
    varying vec2 vUv;
    varying vec3 vColor;
    varying float vIntensity;
    
    void main() {
        vUv = uv;
        vColor = instanceColor;
        vIntensity = instanceIntensity;
        
        vec3 transformed = position * instanceScale + instancePosition;
        vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.0);
        gl_Position = projectionMatrix * mvPosition;
    }
`;

export const instancedFireflyFragmentShader = `
    uniform float time;
    uniform float glowStrength;
    uniform float coreSize;
    
    varying vec2 vUv;
    varying vec3 vColor;
    varying float vIntensity;
    
    void main() {
        vec2 center = vec2(0.5, 0.5);
        float dist = distance(vUv, center);
        
        float coreGlow = 1.0 - smoothstep(0.0, coreSize, dist);
        float outerGlow = 1.0 - smoothstep(coreSize, 1.0, dist);
        
        float glow = coreGlow * 2.0 + outerGlow * glowStrength;
        
        vec3 glowColor = vColor * glow * vIntensity;
        
        if (vIntensity > 1.0) {
            glowColor += vec3(0.2, 0.1, 0.0) * (vIntensity - 1.0);
        }
        
        float alpha = outerGlow * vIntensity;
        
        gl_FragColor = vec4(glowColor, alpha);
    }
`;