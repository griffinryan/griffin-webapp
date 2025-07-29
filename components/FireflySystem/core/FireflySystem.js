import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { Firefly } from './Firefly.js';
import { SwirlingBackground } from './SwirlingBackground.js';

export class FireflySystem {
    constructor(container = document.body) {
        this.container = container;
        this.fireflies = [];
        this.mouse = new THREE.Vector2();
        this.mouseWorld = new THREE.Vector3();
        this.raycaster = new THREE.Raycaster();
        this.background = null;
        this.backgroundScene = null;
        this.backgroundCamera = null;
        
        // Configuration optimized for portfolio site
        this.config = {
            fireflyCount: 80,  // Optimized for performance
            fireflyScale: 1,
            mouseRadius: 150,
            mouseForce: 0.3,
            environmentColor: new THREE.Color(0x0a0a2e),
            fogColor: new THREE.Color(0x0a0a2e),
            fogNear: 50,
            fogFar: 800,
            bloomStrength: 2.5,
            bloomRadius: 0.8,
            bloomThreshold: 0.1,
            mobileClusteringEnabled: true,
            mobileClusterZones: [-300, -100, 100, 300],
            mobileEdgeOffset: 150,
            desktopEdgeOffset: 300,
            // Option to use purple theme
            usePurpleTheme: false,
            // Option to enable/disable swirling background
            useSwirlingBackground: true
        };
        
        this.init();
        if (this.config.useSwirlingBackground) {
            this.createBackground();
        }
        this.createFireflies();
        this.setupEventListeners();
        this.animate();
    }
    
    init() {
        // Scene setup
        this.scene = new THREE.Scene();
        this.scene.fog = new THREE.Fog(this.config.fogColor, this.config.fogNear, this.config.fogFar);
        
        // Background scene for swirling effect
        this.backgroundScene = new THREE.Scene();
        this.backgroundCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        
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
            alpha: true
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = 1.8;
        this.renderer.autoClear = false;
        this.renderer.setClearColor(0x000000, 0); // Transparent background
        
        // Add canvas to container with proper styling
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
        
        const bloomPass = new UnrealBloomPass(
            new THREE.Vector2(window.innerWidth, window.innerHeight),
            this.config.bloomStrength,
            this.config.bloomRadius,
            this.config.bloomThreshold
        );
        this.composer.addPass(bloomPass);
        
        // Ambient light for subtle illumination
        const ambientLight = new THREE.AmbientLight(0x1a1a3e, 0.15);
        this.scene.add(ambientLight);
        
        // Add directional light
        const directionalLight = new THREE.DirectionalLight(0x5a7fb5, 0.3);
        directionalLight.position.set(50, 100, 50);
        this.scene.add(directionalLight);
        
        // Add rim light for dramatic effect
        const rimLight = new THREE.DirectionalLight(0x8090a0, 0.2);
        rimLight.position.set(-100, 50, -50);
        this.scene.add(rimLight);
    }
    
    createBackground() {
        this.background = new SwirlingBackground();
        this.backgroundScene.add(this.background.mesh);
    }
    
    createFireflies() {
        const geometry = new THREE.SphereGeometry(1, 16, 16);
        
        // Calculate responsive parameters based on window aspect ratio
        const aspectRatio = window.innerWidth / window.innerHeight;
        const isMobile = aspectRatio < 0.7;
        
        // Adjust clustering parameters based on screen orientation
        const sideClusteringRatio = isMobile ? 0.5 : 0.4;
        const edgeOffsetBase = isMobile ? this.config.mobileEdgeOffset : this.config.desktopEdgeOffset;
        const edgeOffsetRange = isMobile ? 50 : 100;
        const verticalSpread = isMobile ? 800 : 600;
        const horizontalSpread = isMobile ? 600 : 900;
        
        for (let i = 0; i < this.config.fireflyCount; i++) {
            let position;
            
            // Side clustering - responsive to screen orientation
            if (i < this.config.fireflyCount * sideClusteringRatio) {
                const side = Math.random() < 0.5 ? -1 : 1;
                
                // For mobile/vertical screens, create denser clusters at specific heights
                if (isMobile && this.config.mobileClusteringEnabled) {
                    const clusterZones = this.config.mobileClusterZones;
                    const zoneIndex = Math.floor(Math.random() * clusterZones.length);
                    const baseY = clusterZones[zoneIndex];
                    
                    position = new THREE.Vector3(
                        side * (edgeOffsetBase + Math.random() * edgeOffsetRange),
                        baseY + (Math.random() - 0.5) * 150,
                        (Math.random() - 0.5) * 300
                    );
                } else {
                    // Desktop/landscape distribution
                    const edgeOffset = edgeOffsetBase + Math.random() * edgeOffsetRange;
                    position = new THREE.Vector3(
                        side * edgeOffset,
                        (Math.random() - 0.5) * verticalSpread,
                        (Math.random() - 0.5) * 400
                    );
                }
            } else {
                // Rest spawn randomly in scene with responsive spread
                position = new THREE.Vector3(
                    (Math.random() - 0.5) * horizontalSpread,
                    (Math.random() - 0.5) * verticalSpread,
                    (Math.random() - 0.5) * 500
                );
            }
            
            // Color options based on theme
            let color;
            if (this.config.usePurpleTheme) {
                // Purple theme matching the rain animation
                color = new THREE.Color().setHSL(0.75 + Math.random() * 0.1, 0.8, 0.6);
            } else {
                // Warm firefly colors
                color = new THREE.Color().setHSL(0.11 + Math.random() * 0.05, 0.8, 0.5);
            }
            
            const firefly = new Firefly(geometry, {
                index: i,
                position: position,
                scale: Math.random() * 0.5 + 0.5,
                blinkOffset: Math.random() * Math.PI * 2,
                blinkSpeed: Math.random() * 0.5 + 0.5,
                floatSpeed: Math.random() * 0.3 + 0.2,
                floatRadius: Math.random() * 20 + 10,
                curiosity: Math.random() * 0.7 + 0.3,
                color: color
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
    
    updateBackground(deltaTime) {
        if (this.background) {
            this.background.update(deltaTime);
        }
    }
    
    animate() {
        requestAnimationFrame(() => this.animate());
        
        const deltaTime = this.clock ? this.clock.getDelta() : 0;
        if (!this.clock) this.clock = new THREE.Clock();
        
        // Update all components
        this.updateBackground(deltaTime);
        this.updateFireflies(deltaTime);
        
        // Render in layers
        this.renderer.clear();
        
        // Render background if enabled
        if (this.config.useSwirlingBackground && this.background) {
            this.renderer.render(this.backgroundScene, this.backgroundCamera);
        }
        
        // Render main scene with bloom
        this.composer.render();
    }
    
    setupEventListeners() {
        // Store bound functions for removal
        this.handleMouseMove = (event) => {
            this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
            
            // Convert mouse position to 3D world coordinates
            this.raycaster.setFromCamera(this.mouse, this.camera);
            const intersectPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
            this.raycaster.ray.intersectPlane(intersectPlane, this.mouseWorld);
        };
        
        this.handleResize = () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            this.composer.setSize(window.innerWidth, window.innerHeight);
            
            if (this.background) {
                this.background.updateResolution();
            }
            
            // Check if aspect ratio changed significantly (e.g., rotation on mobile)
            const newAspectRatio = window.innerWidth / window.innerHeight;
            const oldAspectRatio = this.lastAspectRatio || newAspectRatio;
            const aspectRatioChange = Math.abs(newAspectRatio - oldAspectRatio);
            
            // If aspect ratio changed significantly, recreate fireflies with new distribution
            if (aspectRatioChange > 0.5) {
                this.recreateFireflies();
            }
            
            this.lastAspectRatio = newAspectRatio;
        };
        
        this.handleTouchMove = (event) => {
            if (event.touches.length > 0) {
                const touch = event.touches[0];
                this.mouse.x = (touch.clientX / window.innerWidth) * 2 - 1;
                this.mouse.y = -(touch.clientY / window.innerHeight) * 2 + 1;
                
                this.raycaster.setFromCamera(this.mouse, this.camera);
                const intersectPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
                this.raycaster.ray.intersectPlane(intersectPlane, this.mouseWorld);
            }
        };
        
        // Add event listeners
        window.addEventListener('mousemove', this.handleMouseMove);
        window.addEventListener('resize', this.handleResize);
        window.addEventListener('touchmove', this.handleTouchMove);
    }
    
    recreateFireflies() {
        // Remove existing fireflies
        this.fireflies.forEach(firefly => {
            this.scene.remove(firefly.mesh);
            firefly.destroy();
        });
        
        // Clear arrays
        this.fireflies = [];
        
        // Create new fireflies with updated distribution
        this.createFireflies();
    }
    
    // Configuration methods
    setConfig(newConfig) {
        Object.assign(this.config, newConfig);
        
        // Update scene settings
        if (newConfig.fogColor || newConfig.fogNear || newConfig.fogFar) {
            this.scene.fog = new THREE.Fog(
                this.config.fogColor,
                this.config.fogNear,
                this.config.fogFar
            );
        }
        
        // If theme or count changed, recreate fireflies
        if (newConfig.usePurpleTheme !== undefined || newConfig.fireflyCount !== undefined) {
            this.recreateFireflies();
        }
        
        // Handle swirling background toggle
        if (newConfig.useSwirlingBackground !== undefined) {
            if (newConfig.useSwirlingBackground && !this.background) {
                this.createBackground();
            } else if (!newConfig.useSwirlingBackground && this.background) {
                this.backgroundScene.remove(this.background.mesh);
                this.background.dispose();
                this.background = null;
            }
        }
    }
    
    destroy() {
        // Clean up resources
        this.fireflies.forEach(firefly => firefly.destroy());
        if (this.background) this.background.dispose();
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