import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { Firefly } from './Firefly.js';

export class FireflySystem {
    constructor(container = document.body) {
        this.container = container;
        this.fireflies = [];
        this.mouse = new THREE.Vector2();
        this.mouseWorld = new THREE.Vector3();
        this.raycaster = new THREE.Raycaster();
        
        // Simplified configuration for portfolio
        this.config = {
            fireflyCount: 80,  // Reduced for performance
            fireflyScale: 1,
            mouseRadius: 150,
            mouseForce: 0.3,
            environmentColor: new THREE.Color(0x0a0a2e),
            fogColor: new THREE.Color(0x0a0a2e),
            fogNear: 50,
            fogFar: 800,
            bloomStrength: 2.5,  // Reduced for subtler effect
            bloomRadius: 0.8,
            bloomThreshold: 0.1,
            // Option to use purple theme
            usePurpleTheme: false
        };
        
        this.init();
        this.createFireflies();
        this.setupEventListeners();
        this.animate();
    }
    
    init() {
        // Scene setup
        this.scene = new THREE.Scene();
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
            alpha: true  // Enable transparency for overlay effect
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.setClearColor(0x000000, 0); // Transparent background
        
        // Add canvas to container
        this.renderer.domElement.style.position = 'fixed';
        this.renderer.domElement.style.top = '0';
        this.renderer.domElement.style.left = '0';
        this.renderer.domElement.style.width = '100%';
        this.renderer.domElement.style.height = '100%';
        this.renderer.domElement.style.pointerEvents = 'none';
        this.renderer.domElement.style.zIndex = '0';
        this.container.appendChild(this.renderer.domElement);
        
        // Post-processing setup
        this.composer = new EffectComposer(this.renderer);
        const renderPass = new RenderPass(this.scene, this.camera);
        this.composer.addPass(renderPass);
        
        const bloomPass = new UnrealBloomPass(
            new THREE.Vector2(window.innerWidth, window.innerHeight),
            this.config.bloomStrength,
            this.config.bloomRadius,
            this.config.bloomThreshold
        );
        this.composer.addPass(bloomPass);
        
        // Subtle ambient light
        const ambientLight = new THREE.AmbientLight(0x1a1a3e, 0.1);
        this.scene.add(ambientLight);
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
            
            if (i < this.config.fireflyCount * 0.3) {
                // Cluster some fireflies on the sides
                const side = Math.random() < 0.5 ? -1 : 1;
                position = new THREE.Vector3(
                    side * (200 + Math.random() * 100),
                    (Math.random() - 0.5) * verticalSpread,
                    (Math.random() - 0.5) * 200
                );
            } else {
                // Random distribution
                position = new THREE.Vector3(
                    (Math.random() - 0.5) * horizontalSpread,
                    (Math.random() - 0.5) * verticalSpread,
                    (Math.random() - 0.5) * 300
                );
            }
            
            // Pass theme information to firefly
            const isLightMode = this.config.isLightMode;
            
            const firefly = new Firefly(geometry, {
                index: i,
                position: position,
                scale: Math.random() * 0.5 + 0.5,
                blinkOffset: Math.random() * Math.PI * 2,
                blinkSpeed: Math.random() * 0.5 + 0.5,
                floatSpeed: Math.random() * 0.3 + 0.2,
                floatRadius: Math.random() * 15 + 10,
                curiosity: Math.random() * 0.5 + 0.3,
                isLightMode: isLightMode
            });
            
            this.fireflies.push(firefly);
            this.scene.add(firefly.mesh);
        }
    }
    
    updateFireflies(deltaTime) {
        this.fireflies.forEach(firefly => {
            firefly.update(deltaTime, this.mouseWorld, this.config.mouseRadius, this.config.mouseForce);
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
            
            this.scene.fog = new THREE.Fog(
                this.config.fogColor,
                this.config.fogNear,
                this.config.fogFar
            );
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