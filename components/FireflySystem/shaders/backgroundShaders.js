export const swirlingBackgroundVertexShader = `
    varying vec2 vUv;
    
    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;

export const swirlingBackgroundFragmentShader = `
    uniform float time;
    uniform vec2 resolution;
    uniform float intensity;
    
    varying vec2 vUv;
    
    // Improved noise functions for organic patterns
    vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
    vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

    float snoise(vec3 v) {
        const vec2 C = vec2(1.0/6.0, 1.0/3.0);
        const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
        
        vec3 i = floor(v + dot(v, C.yyy));
        vec3 x0 = v - i + dot(i, C.xxx);
        
        vec3 g = step(x0.yzx, x0.xyz);
        vec3 l = 1.0 - g;
        vec3 i1 = min(g.xyz, l.zxy);
        vec3 i2 = max(g.xyz, l.zxy);
        
        vec3 x1 = x0 - i1 + C.xxx;
        vec3 x2 = x0 - i2 + C.yyy;
        vec3 x3 = x0 - D.yyy;
        
        i = mod289(i);
        vec4 p = permute(permute(permute(
                 i.z + vec4(0.0, i1.z, i2.z, 1.0))
               + i.y + vec4(0.0, i1.y, i2.y, 1.0))
               + i.x + vec4(0.0, i1.x, i2.x, 1.0));
               
        float n_ = 0.142857142857;
        vec3 ns = n_ * D.wyz - D.xzx;
        
        vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
        
        vec4 x_ = floor(j * ns.z);
        vec4 y_ = floor(j - 7.0 * x_);
        
        vec4 x = x_ *ns.x + ns.yyyy;
        vec4 y = y_ *ns.x + ns.yyyy;
        vec4 h = 1.0 - abs(x) - abs(y);
        
        vec4 b0 = vec4(x.xy, y.xy);
        vec4 b1 = vec4(x.zw, y.zw);
        
        vec4 s0 = floor(b0)*2.0 + 1.0;
        vec4 s1 = floor(b1)*2.0 + 1.0;
        vec4 sh = -step(h, vec4(0.0));
        
        vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
        vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
        
        vec3 p0 = vec3(a0.xy, h.x);
        vec3 p1 = vec3(a0.zw, h.y);
        vec3 p2 = vec3(a1.xy, h.z);
        vec3 p3 = vec3(a1.zw, h.w);
        
        vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
        p0 *= norm.x;
        p1 *= norm.y;
        p2 *= norm.z;
        p3 *= norm.w;
        
        vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
        m = m * m;
        return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
    }
    
    // Create paint brush stroke texture
    float brushStroke(vec2 uv, float angle, float width) {
        vec2 rotated = vec2(
            uv.x * cos(angle) - uv.y * sin(angle),
            uv.x * sin(angle) + uv.y * cos(angle)
        );
        
        // Irregular brush edges
        float edge = snoise(vec3(rotated * 30.0, 0.0)) * 0.1;
        float stroke = 1.0 - smoothstep(0.0, width + edge, abs(rotated.y));
        
        // Brush texture within stroke
        float texture = snoise(vec3(rotated * 50.0, 1.0)) * 0.3 + 0.7;
        
        return stroke * texture;
    }
    
    // Van Gogh style swirling vortex
    vec2 vortex(vec2 uv, vec2 center, float strength, float time) {
        vec2 offset = uv - center;
        float dist = length(offset);
        float angle = atan(offset.y, offset.x);
        
        // Spiral motion
        angle += strength / (dist + 0.1) * sin(time * 0.5);
        
        // Distortion that varies with distance
        float distortion = snoise(vec3(uv * 3.0, time * 0.1)) * 0.5;
        angle += distortion * (1.0 - dist);
        
        return center + vec2(cos(angle), sin(angle)) * dist;
    }
    
    // Multi-layered turbulence for depth
    float layeredTurbulence(vec2 uv, float time, int layers) {
        float value = 0.0;
        float amplitude = 1.0;
        vec2 shift = vec2(0.0);
        
        for(int i = 0; i < 5; i++) {
            if(i >= layers) break;
            float layer = float(i);
            vec2 coord = uv + shift;
            
            // Each layer has different flow direction
            vec2 flow = vec2(
                sin(time * (0.1 + layer * 0.05) + layer),
                cos(time * (0.1 + layer * 0.03) + layer * 1.5)
            ) * 0.1;
            
            coord += flow;
            
            // 3D noise for more organic feel
            float noise = snoise(vec3(coord * (2.0 + layer), time * 0.05 + layer));
            value += abs(noise) * amplitude;
            
            // Each layer shifts slightly
            shift += vec2(noise) * 0.3;
            amplitude *= 0.6;
        }
        
        return value;
    }
    
    // Paint-like color mixing
    vec3 mixPaintColors(vec3 color1, vec3 color2, float factor, float texture) {
        // Non-linear mixing for paint-like effect
        float mixFactor = pow(factor, 1.5) * texture;
        vec3 mixed = mix(color1, color2, mixFactor);
        
        // Add slight color variation
        mixed += vec3(
            snoise(vec3(mixed.xy * 10.0, 0.0)) * 0.05,
            snoise(vec3(mixed.yz * 10.0, 1.0)) * 0.05,
            snoise(vec3(mixed.zx * 10.0, 2.0)) * 0.05
        );
        
        return mixed;
    }
    
    void main() {
        vec2 uv = vUv;
        vec2 centeredUV = uv - 0.5;
        float t = time * 0.3;
        
        // Create multiple vortex centers like in Starry Night
        vec2 vortexUV = uv;
        vortexUV = vortex(vortexUV, vec2(0.7, 0.6), 0.3, t);
        vortexUV = vortex(vortexUV, vec2(0.3, 0.4), 0.25, t * 1.1);
        vortexUV = vortex(vortexUV, vec2(0.5, 0.8), 0.2, t * 0.9);
        vortexUV = vortex(vortexUV, vec2(0.2, 0.7), 0.15, t * 1.2);
        
        // Multi-layered turbulence
        float turb1 = layeredTurbulence(vortexUV * 2.0, t, 5);
        float turb2 = layeredTurbulence(vortexUV * 3.5 + vec2(10.0), t * 0.7, 4);
        float turb3 = layeredTurbulence(vortexUV * 6.0 + vec2(20.0), t * 1.3, 3);
        
        // Create paint brush strokes
        float brushPattern = 0.0;
        for(int i = 0; i < 8; i++) {
            float angle = float(i) * 0.785 + turb1 * 0.5; // 45 degree increments with variation
            vec2 strokeUV = vortexUV * 10.0 + vec2(float(i) * 2.0);
            brushPattern += brushStroke(strokeUV, angle, 0.1 + turb2 * 0.05) * 0.3;
        }
        
        // Define Starry Night color palette
        vec3 deepNightBlue = vec3(0.05, 0.08, 0.18);
        vec3 prussianBlue = vec3(0.08, 0.12, 0.25);
        vec3 midnightBlue = vec3(0.1, 0.15, 0.35);
        vec3 royalBlue = vec3(0.15, 0.25, 0.55);
        vec3 cobaltBlue = vec3(0.2, 0.35, 0.65);
        vec3 darkPurple = vec3(0.15, 0.08, 0.25);
        vec3 deepPurple = vec3(0.2, 0.1, 0.35);
        vec3 moonYellow = vec3(0.9, 0.85, 0.5);
        vec3 starWhite = vec3(0.95, 0.95, 0.9);
        
        // Base color with turbulence-based mixing
        vec3 color = deepNightBlue;
        
        // Layer 1: Deep swirls
        float swirl1 = smoothstep(0.2, 0.6, turb1);
        color = mixPaintColors(color, prussianBlue, swirl1, brushPattern + 0.5);
        
        // Layer 2: Mid-tone blues
        float swirl2 = smoothstep(0.3, 0.7, turb2);
        color = mixPaintColors(color, midnightBlue, swirl2, 1.0 - brushPattern * 0.5);
        
        // Layer 3: Royal blue highlights
        float swirl3 = smoothstep(0.4, 0.8, turb3);
        color = mixPaintColors(color, royalBlue, swirl3 * 0.7, turb1);
        
        // Layer 4: Purple shadows
        float purpleArea = snoise(vec3(vortexUV * 4.0, t * 0.1));
        if(purpleArea < -0.2) {
            color = mixPaintColors(color, darkPurple, -purpleArea, turb2);
        }
        
        // Layer 5: Deep purple vortex cores
        float vortexIntensity = 1.0 - length(vortexUV - vec2(0.7, 0.6)) * 3.0;
        vortexIntensity = max(0.0, vortexIntensity);
        color = mixPaintColors(color, deepPurple, vortexIntensity * 0.5, turb3);
        
        // Add cobalt blue swirls
        float cobaltSwirl = sin(turb1 * 3.0 + turb2 * 2.0) * 0.5 + 0.5;
        color = mixPaintColors(color, cobaltBlue, cobaltSwirl * 0.4, brushPattern);
        
        // Add impasto effect (thick paint texture)
        float impasto = snoise(vec3(uv * 50.0, t * 0.05));
        color *= 1.0 + impasto * 0.1;
        
        // Add stars and moon crescents
        float stars = snoise(vec3(uv * 100.0, 5.0));
        if(stars > 0.85) {
            float starIntensity = (stars - 0.85) * 6.0;
            color = mix(color, starWhite, starIntensity);
        }
        
        // Add moon glow in specific areas
        float moonDist = length(uv - vec2(0.8, 0.8));
        if(moonDist < 0.15) {
            float moonGlow = 1.0 - moonDist / 0.15;
            moonGlow = pow(moonGlow, 2.0);
            color = mix(color, moonYellow, moonGlow * 0.3);
        }
        
        // Paint stroke direction highlights
        float strokeHighlight = brushPattern * turb1;
        color += vec3(0.05, 0.08, 0.15) * strokeHighlight;
        
        // Subtle color oscillation
        color *= 0.95 + sin(t) * 0.05;
        
        // Vignette with paint texture
        float vignette = 1.0 - length(centeredUV) * 0.7;
        vignette = pow(vignette, 1.5);
        color *= vignette;
        
        // Apply intensity
        color *= intensity;
        
        // Final paint texture overlay
        float finalTexture = snoise(vec3(uv * 80.0, 10.0)) * 0.05 + 0.95;
        color *= finalTexture;
        
        gl_FragColor = vec4(color, 1.0);
    }
`;