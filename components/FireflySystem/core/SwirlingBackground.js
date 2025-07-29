import * as THREE from 'three';
import { swirlingBackgroundVertexShader, swirlingBackgroundFragmentShader } from '../shaders/backgroundShaders.js';

export class SwirlingBackground {
    constructor() {
        this.mesh = null;
        this.material = null;
        this.time = 0;
        this.create();
    }
    
    create() {
        // Create a full-screen quad
        const geometry = new THREE.PlaneGeometry(2, 2);
        
        // Create shader material
        this.material = new THREE.ShaderMaterial({
            uniforms: {
                time: { value: 0 },
                resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
                intensity: { value: 1.0 }
            },
            vertexShader: swirlingBackgroundVertexShader,
            fragmentShader: swirlingBackgroundFragmentShader,
            depthWrite: false,
            depthTest: false
        });
        
        this.mesh = new THREE.Mesh(geometry, this.material);
        this.mesh.frustumCulled = false;
        
        // Position the background behind everything
        this.mesh.renderOrder = -1000;
    }
    
    update(deltaTime) {
        this.time += deltaTime;
        this.material.uniforms.time.value = this.time;
    }
    
    setIntensity(intensity) {
        this.material.uniforms.intensity.value = intensity;
    }
    
    updateResolution() {
        this.material.uniforms.resolution.value.set(window.innerWidth, window.innerHeight);
    }
    
    dispose() {
        if (this.mesh.geometry) this.mesh.geometry.dispose();
        if (this.material) this.material.dispose();
    }
}