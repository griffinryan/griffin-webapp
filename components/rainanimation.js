import React from 'react';
import Sketch from 'react-p5';

let raindrops = [];

class Raindrop {
    constructor(p5) {
        this.x = p5.random(p5.width);
        this.y = p5.random(-500, -50); // Start above the screen
        this.z = p5.random(0, 20);
        this.len = p5.map(this.z, 0, 20, 10, 20);
        this.yspeed = p5.map(this.z, 0, 20, 1, 20);
    }

    fall(p5) {
        this.y = this.y + this.yspeed;
        var grav = p5.map(this.z, 0, 20, 0, 0.2);
        this.yspeed = this.yspeed + grav;

        if (this.y > p5.height) {
            this.y = p5.random(-200, -100);
            this.yspeed = p5.map(this.z, 0, 20, 4, 10);
        }
    }

    show(p5) {
        var thick = p5.map(this.z, 0, 20, 1, 3);
        p5.strokeWeight(thick);
        p5.stroke(138, 43, 226);
        p5.line(this.x, this.y, this.x, this.y + this.len);
    }
}

const RainAnimation = () => {
    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
        for (let i = 0; i < 500; i++) {
            raindrops[i] = new Raindrop(p5);
        }
    };

    const draw = (p5) => {
        p5.clear();
        for (let i = 0; i < raindrops.length; i++) {
            raindrops[i].fall(p5);
            raindrops[i].show(p5);
        }
    };

    return (
        <Sketch setup={setup} draw={draw} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }} />
    );
};

export default RainAnimation;
