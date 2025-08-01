import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { Firefly } from './Firefly.js';

export class FireflySystem {
    constructor(container = document.body, initialConfig = {}) {
        this.container = container;
        this.fireflies = [];
        this.mouse = new THREE.Vector2();
        this.mouseWorld = new THREE.Vector3();
        this.raycaster = new THREE.Raycaster();
        
        // Enhanced configuration with performance improvements from WebP
        this.config = {
            fireflyCount: 150,  // Increased from 80 - now we have performance budget!
            fireflyScale: 1,
            mouseRadius: 200,   // Increased interaction radius
            mouseForce: 0.4,    // Slightly stronger attraction
            isLightMode: false,
            environmentColor: new THREE.Color(0x0a0a2e),
            fogColor: new THREE.Color(0x0a0a2e),
            fogNear: 40,        // Closer fog for depth
            fogFar: 1000,       // Further fog distance
            bloomStrength: 3.0,  // Increased bloom for more glow
            bloomRadius: 0.9,
            bloomThreshold: 0.05, // Lower threshold for more bloom
            // Option to use purple theme
            usePurpleTheme: false,
            // New performance features
            enableTrails: true,   // Particle trails
            trailLength: 5,
            enablePulse: true,    // Pulsing glow effect
            pulseSpeed: 0.5,
            ...initialConfig  // Apply any initial configuration
        };
        
        this.init();
        this.createFireflies();
        this.setupEventListeners();
        this.animate();
    }
    
    init() {
        // Scene setup
        this.scene = new THREE.Scene();
        // Keep scene transparent to show body background
        this.scene.background = null;
        this.scene.fog = new THREE.Fog(this.config.fogColor, this.config.fogNear, this.config.fogFar);
        
        // Camera setup
        this.camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        this.camera.position.set(0, 0, 350);
        this.camera.lookAt(0, 0, 0);
        
        // Renderer setup
        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,  // Enable transparency for overlay effect
            premultipliedAlpha: false,
            preserveDrawingBuffer: true
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.setClearColor(0x000000, 0); // Fully transparent background
        
        // Add canvas to container
        this.renderer.domElement.style.position = 'fixed';
        this.renderer.domElement.style.top = '0';
        this.renderer.domElement.style.left = '0';
        this.renderer.domElement.style.width = '100%';
        this.renderer.domElement.style.height = '100%';
        this.renderer.domElement.style.pointerEvents = 'none';
        this.renderer.domElement.style.zIndex = '-1';
        this.container.appendChild(this.renderer.domElement);
        
        // Post-processing setup
        this.composer = new EffectComposer(this.renderer);
        const renderPass = new RenderPass(this.scene, this.camera);
        this.composer.addPass(renderPass);
        
        // Only add bloom for dark mode
        if (!this.config.isLightMode) {
            this.bloomPass = new UnrealBloomPass(
                new THREE.Vector2(window.innerWidth, window.innerHeight),
                this.config.bloomStrength,
                this.config.bloomRadius,
                this.config.bloomThreshold
            );
            this.composer.addPass(this.bloomPass);
        }
        
        // Theme-aware ambient light
        this.ambientLight = new THREE.AmbientLight(
            this.config.isLightMode ? 0xf5e6d3 : 0x1a1a3e, 
            this.config.isLightMode ? 0.3 : 0.1
        );
        this.scene.add(this.ambientLight);
    }
    
    createFireflies() {
        const geometry = new THREE.SphereGeometry(1, 8, 8);
        
        // Calculate responsive parameters
        const aspectRatio = window.innerWidth / window.innerHeight;
        const isMobile = aspectRatio < 0.7;
        const verticalSpread = isMobile ? 400 : 300;
        const horizontalSpread = isMobile ? 300 : 400;
        
        for (let i = 0; i < this.config.fireflyCount; i++) {
            // Random distribution with some clustering
            let position;
            
            if (i < this.config.fireflyCount * 0.2) {
                // Cluster some fireflies on the sides for dynamic entry
                const side = Math.random() < 0.5 ? -1 : 1;
                position = new THREE.Vector3(
                    side * (250 + Math.random() * 150),
                    (Math.random() - 0.5) * verticalSpread,
                    (Math.random() - 0.5) * 250
                );
            } else if (i < this.config.fireflyCount * 0.4) {
                // Create swirling patterns
                const angle = (i / this.config.fireflyCount) * Math.PI * 2;
                const radius = 150 + Math.random() * 200;
                position = new THREE.Vector3(
                    Math.cos(angle) * radius,
                    (Math.random() - 0.5) * verticalSpread * 0.7,
                    Math.sin(angle) * radius
                );
            } else {
                // Random distribution with more depth
                position = new THREE.Vector3(
                    (Math.random() - 0.5) * horizontalSpread * 1.2,
                    (Math.random() - 0.5) * verticalSpread,
                    (Math.random() - 0.5) * 400
                );
            }
            
            // Pass theme information to firefly
            const isLightMode = this.config.isLightMode;
            
            const firefly = new Firefly(geometry, {
                index: i,
                position: position,
                scale: Math.random() * 1.0 + 0.5,  // Varied sizes
                blinkOffset: Math.random() * Math.PI * 2,
                blinkSpeed: Math.random() * 0.8 + 0.3,  // More varied blink speeds
                floatSpeed: Math.random() * 0.4 + 0.15,
                floatRadius: Math.random() * 20 + 10,   // Larger float radius
                curiosity: Math.random() * 0.7 + 0.3,   // More curious behavior
                isLightMode: isLightMode,
                // New properties for enhanced effects
                pulseEnabled: this.config.enablePulse,
                pulseSpeed: this.config.pulseSpeed * (0.8 + Math.random() * 0.4)
            });
            
            this.fireflies.push(firefly);
            this.scene.add(firefly.mesh);
        }
    }
    
    updateFireflies(deltaTime) {
        // Update fireflies with enhanced trail effects
        this.fireflies.forEach((firefly, index) => {
            firefly.update(deltaTime, this.mouseWorld, this.config.mouseRadius, this.config.mouseForce);
            
            // Create swarm behavior - fireflies influence each other
            if (index % 3 === 0) { // Only some fireflies to reduce computation
                const nearbyFireflies = this.fireflies.filter((other, otherIndex) => {
                    if (otherIndex === index) return false;
                    const distance = firefly.mesh.position.distanceTo(other.mesh.position);
                    return distance < 100;
                });
                
                // Apply subtle swarm forces
                nearbyFireflies.forEach(other => {
                    const force = new THREE.Vector3()
                        .subVectors(other.mesh.position, firefly.mesh.position)
                        .normalize()
                        .multiplyScalar(0.05);
                    firefly.velocity.add(force);
                });
            }
        });
    }
    
    animate() {
        requestAnimationFrame(() => this.animate());
        
        const deltaTime = this.clock ? this.clock.getDelta() : 0;
        if (!this.clock) this.clock = new THREE.Clock();
        
        // Update fireflies
        this.updateFireflies(deltaTime);
        
        // Render scene
        this.composer.render();
    }
    
    setupEventListeners() {
        // Mouse movement
        window.addEventListener('mousemove', (event) => {
            this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
            
            // Convert mouse position to 3D world coordinates
            this.raycaster.setFromCamera(this.mouse, this.camera);
            const intersectPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
            this.raycaster.ray.intersectPlane(intersectPlane, this.mouseWorld);
        });
        
        // Window resize
        window.addEventListener('resize', () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            this.composer.setSize(window.innerWidth, window.innerHeight);
            
            // Recreate fireflies with new distribution if aspect ratio changed significantly
            const newAspectRatio = window.innerWidth / window.innerHeight;
            const oldAspectRatio = this.lastAspectRatio || newAspectRatio;
            const aspectRatioChange = Math.abs(newAspectRatio - oldAspectRatio);
            
            if (aspectRatioChange > 0.5) {
                this.recreateFireflies();
            }
            
            this.lastAspectRatio = newAspectRatio;
        });
        
        // Touch events for mobile
        window.addEventListener('touchmove', (event) => {
            if (event.touches.length > 0) {
                const touch = event.touches[0];
                this.mouse.x = (touch.clientX / window.innerWidth) * 2 - 1;
                this.mouse.y = -(touch.clientY / window.innerHeight) * 2 + 1;
                
                this.raycaster.setFromCamera(this.mouse, this.camera);
                const intersectPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
                this.raycaster.ray.intersectPlane(intersectPlane, this.mouseWorld);
            }
        });
    }
    
    recreateFireflies() {
        // Remove existing fireflies
        this.fireflies.forEach(firefly => {
            this.scene.remove(firefly.mesh);
            firefly.destroy();
        });
        
        // Clear array
        this.fireflies = [];
        
        // Create new fireflies
        this.createFireflies();
    }
    
    // Configuration methods
    setConfig(newConfig) {
        Object.assign(this.config, newConfig);
        
        // Update scene settings
        if (newConfig.fogColor !== undefined || newConfig.fogNear !== undefined || newConfig.fogFar !== undefined || newConfig.isLightMode !== undefined) {
            // Update fog color if theme changed
            if (newConfig.isLightMode !== undefined && !newConfig.fogColor) {
                this.config.fogColor = newConfig.isLightMode ? 0xe8d5c4 : 0x0a192f;
            }
            
            // Scene background remains transparent
            
            this.scene.fog = new THREE.Fog(
                this.config.fogColor,
                this.config.fogNear,
                this.config.fogFar
            );
            
            // Update ambient light for theme
            if (this.ambientLight && newConfig.isLightMode !== undefined) {
                this.ambientLight.color.set(newConfig.isLightMode ? 0xf5e6d3 : 0x1a1a3e);
                this.ambientLight.intensity = newConfig.isLightMode ? 0.3 : 0.1;
            }
        }
        
        // If theme changed, update bloom
        if (newConfig.isLightMode !== undefined) {
            // Remove all passes except render pass
            this.composer.passes = this.composer.passes.slice(0, 1);
            
            // Add bloom only for dark mode
            if (!newConfig.isLightMode) {
                if (!this.bloomPass) {
                    this.bloomPass = new UnrealBloomPass(
                        new THREE.Vector2(window.innerWidth, window.innerHeight),
                        this.config.bloomStrength,
                        this.config.bloomRadius,
                        this.config.bloomThreshold
                    );
                }
                this.composer.addPass(this.bloomPass);
            }
        }
        
        // If theme or count changed, recreate fireflies
        if (newConfig.isLightMode !== undefined || newConfig.fireflyCount !== undefined) {
            this.recreateFireflies();
        }
    }
    
    destroy() {
        // Clean up resources
        this.fireflies.forEach(firefly => firefly.destroy());
        this.renderer.dispose();
        this.composer.dispose();
        if (this.renderer.domElement.parentNode) {
            this.renderer.domElement.parentNode.removeChild(this.renderer.domElement);
        }
        
        // Remove event listeners
        window.removeEventListener('resize', this.handleResize);
        window.removeEventListener('mousemove', this.handleMouseMove);
        window.removeEventListener('touchmove', this.handleTouchMove);
    }
}