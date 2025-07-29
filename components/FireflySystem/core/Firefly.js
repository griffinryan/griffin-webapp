import * as THREE from 'three';
import { fireflyVertexShader, fireflyFragmentShader } from '../shaders/fireflyShaders.js';

export class Firefly {
    constructor(geometry, options = {}) {
        this.options = {
            index: 0,
            position: new THREE.Vector3(0, 0, 0),
            scale: 1,
            blinkOffset: 0,
            blinkSpeed: 1,
            floatSpeed: 0.5,
            floatRadius: 15,
            curiosity: 0.5,
            isLightMode: false,
            ...options
        };
        
        // Set color based on theme
        if (this.options.isLightMode) {
            // Light mode: pink and purple fireflies
            this.options.color = Math.random() > 0.5 
                ? new THREE.Color('#ff69b4').multiplyScalar(0.8 + Math.random() * 0.4) // Pink variations
                : new THREE.Color('#da70d6').multiplyScalar(0.8 + Math.random() * 0.4); // Purple variations
        } else {
            // Dark mode: coral pink and gold
            this.options.color = Math.random() > 0.5 
                ? new THREE.Color('#ff6b6b').multiplyScalar(0.8 + Math.random() * 0.4) // Coral pink variations
                : new THREE.Color('#fbbf24').multiplyScalar(0.8 + Math.random() * 0.4); // Gold variations
        }
        
        // State
        this.originalPosition = this.options.position.clone();
        this.velocity = new THREE.Vector3(
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 20
        );
        this.time = Math.random() * Math.PI * 2;
        this.blinkIntensity = 1;
        this.isBlinking = true;
        this.targetIntensity = 1;
        
        // Create material with custom shaders
        this.material = new THREE.ShaderMaterial({
            uniforms: {
                time: { value: 0 },
                color: { value: this.options.color },
                intensity: { value: 1 },
                glowStrength: { value: this.options.isLightMode ? 3.5 : 2.5 },
                coreSize: { value: this.options.isLightMode ? 0.4 : 0.3 }
            },
            vertexShader: fireflyVertexShader,
            fragmentShader: fireflyFragmentShader,
            transparent: true,
            blending: this.options.isLightMode ? THREE.NormalBlending : THREE.AdditiveBlending,
            depthWrite: false
        });
        
        // Create mesh
        this.mesh = new THREE.Mesh(geometry, this.material);
        this.mesh.position.copy(this.options.position);
        this.mesh.scale.setScalar(this.options.scale * (this.options.isLightMode ? 2.5 : 2));
        
        // Add subtle random rotation
        this.mesh.rotation.set(
            Math.random() * Math.PI,
            Math.random() * Math.PI,
            Math.random() * Math.PI
        );
    }
    
    update(deltaTime, mouseWorld, mouseRadius, mouseForce) {
        this.time += deltaTime;
        
        // Update shader time
        this.material.uniforms.time.value = this.time;
        
        // Floating behavior
        this.updateFloatingBehavior(deltaTime);
        
        // Blinking behavior
        this.updateBlinkingBehavior(deltaTime);
        
        // Mouse interaction
        if (mouseWorld) {
            this.updateMouseInteraction(deltaTime, mouseWorld, mouseRadius, mouseForce);
        }
        
        // Apply velocity with frame-independent movement
        this.mesh.position.add(this.velocity.clone().multiplyScalar(deltaTime));
        
        // Boundary wrapping
        this.wrapBoundaries();
        
        // Update material intensity
        this.material.uniforms.intensity.value = this.blinkIntensity;
    }
    
    updateFloatingBehavior(deltaTime) {
        // Lazy floating using sine waves
        const floatX = Math.sin(this.time * this.options.floatSpeed) * this.options.floatRadius;
        const floatY = Math.sin(this.time * this.options.floatSpeed * 1.3) * this.options.floatRadius * 0.7;
        const floatZ = Math.sin(this.time * this.options.floatSpeed * 0.7) * this.options.floatRadius * 0.5;
        
        // Add to velocity for organic movement
        this.velocity.x += (floatX - this.velocity.x) * deltaTime * 0.1;
        this.velocity.y += (floatY - this.velocity.y) * deltaTime * 0.1;
        this.velocity.z += (floatZ - this.velocity.z) * deltaTime * 0.1;
        
        // Apply subtle damping
        this.velocity.multiplyScalar(0.99);
    }
    
    updateBlinkingBehavior(deltaTime) {
        // Natural blinking pattern
        const blinkPhase = this.time * this.options.blinkSpeed + this.options.blinkOffset;
        
        // Create realistic blink pattern
        if (this.isBlinking) {
            // Use sine wave for smooth blinking
            this.targetIntensity = Math.sin(blinkPhase) * 0.4 + 0.6;
            
            // Occasional bright flashes
            if (Math.sin(blinkPhase * 3.7) > 0.95) {
                this.targetIntensity = 1.5;
            }
            
            // Random dimming
            if (Math.random() < 0.002) {
                this.isBlinking = false;
                this.targetIntensity = 0.1;
            }
        } else {
            // Random re-brightening
            if (Math.random() < 0.01) {
                this.isBlinking = true;
                this.targetIntensity = 1;
            }
        }
        
        // Smooth intensity transitions
        this.blinkIntensity += (this.targetIntensity - this.blinkIntensity) * deltaTime * 3;
    }
    
    updateMouseInteraction(deltaTime, mouseWorld, mouseRadius, mouseForce) {
        const toMouse = new THREE.Vector3().subVectors(mouseWorld, this.mesh.position);
        const distance = toMouse.length();
        
        if (distance < mouseRadius && distance > 0) {
            // Calculate attraction/repulsion force
            const force = 1 - (distance / mouseRadius);
            const attraction = toMouse.normalize().multiplyScalar(
                force * mouseForce * this.options.curiosity * 100
            );
            
            // Apply force to velocity
            this.velocity.add(attraction.multiplyScalar(deltaTime));
            
            // Increase brightness when near mouse
            this.targetIntensity = Math.min(this.targetIntensity + force * 0.5, 2);
        }
    }
    
    wrapBoundaries() {
        const boundary = 500;
        
        // Wrap around boundaries for infinite effect
        if (this.mesh.position.x > boundary) this.mesh.position.x = -boundary;
        if (this.mesh.position.x < -boundary) this.mesh.position.x = boundary;
        if (this.mesh.position.y > boundary) this.mesh.position.y = -boundary;
        if (this.mesh.position.y < -boundary) this.mesh.position.y = boundary;
        if (this.mesh.position.z > boundary) this.mesh.position.z = -boundary;
        if (this.mesh.position.z < -boundary) this.mesh.position.z = boundary;
    }
    
    destroy() {
        if (this.material) {
            this.material.dispose();
        }
        if (this.mesh.geometry && this.mesh.geometry !== this.geometry) {
            this.mesh.geometry.dispose();
        }
    }
}