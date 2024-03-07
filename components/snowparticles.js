// SnowParticles.js
import React from 'react';
import { Particles } from "@tsparticles/react";
import { loadFull } from "tsparticles";

const SnowParticles = () => {
    const particlesInit = async (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        await loadFull(main);
    };

    const options = {
        particles: {
            number: {
                value: 400,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            shape: {
                type: "circle"
            },
            opacity: {
                value: 0.5,
                random: true
            },
            size: {
                value: 3,
                random: true
            },
            move: {
                direction: "bottom",
                out_mode: "out",
                speed: 2
            },
            line_linked: {
                enable: false
            }
        },
        interactivity: {
            detectsOn: "canvas",
            events: {
                onClick: {
                    enable: true,
                    mode: "push"
                },
                onHover: {
                    enable: true,
                    mode: "repulse"
                }
            }
        },
        detectRetina: true,
    };

    return <Particles id="tsparticles" init={particlesInit} options={options} />;
};

export default SnowParticles;
