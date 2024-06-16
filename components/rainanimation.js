import React from 'react';
import Sketch from 'react-p5';

const NUM_RAINDROPS = Math.min(window.innerWidth >> 2, 250);
const raindrops = new Array(NUM_RAINDROPS);

function Raindrop(p5) {
    this.x = p5.random(p5.width);
    this.y = p5.random(-500, -50); // Start above the screen
    this.z = p5.random(0, 20);
    this.len = p5.map(this.z, 0, 20, 10, 10);
    this.yspeed = p5.map(this.z, 0, 10, 1, 10);
    this.grav = p5.map(this.z, 0, 20, 0, 0.01);
}

Raindrop.prototype.fall = function (p5) {
    this.y += this.yspeed;
    this.yspeed += this.grav;

    if (this.y > p5.height) {
        this.y = p5.random(-200, -100);
        this.yspeed = p5.map(this.z, 0, 20, 4, 10);
    }

    p5.line(this.x, this.y, this.x, this.y + this.len);
}

Raindrop.prototype.show = function (p5) {
    let thick = p5.map(this.z, 0, 20, 1, 3);
    p5.strokeWeight(thick);
    p5.stroke(138, 43, 226);
}

const RainAnimation = () => {
    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
        for (let i = 0; i < NUM_RAINDROPS; i++) {
            raindrops[i] = new Raindrop(p5);
            raindrops[i].show(p5);
        }
    };

    const draw = (p5) => {
        p5.clear();
        for (let i = 0; i < NUM_RAINDROPS; i++) {
            raindrops[i].fall(p5);
        }
    };

    return (
        <Sketch setup={setup} draw={draw} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }} />
    );
};

export default RainAnimation;
