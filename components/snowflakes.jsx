import { useCallback } from "react";
import Particles from "react-tsparticles";
import snowflakeConfig from "./snowflake.json";

const deg = Math.PI / 180;

function snowflake(c, n, len) {
  c.save();
  leg(n);
  c.rotate(-120 * deg);
  leg(n);
  c.rotate(-120 * deg);
  leg(n);
  c.closePath();
  c.restore();

  function leg(n) {
    c.save();
    if (n === 0) {
      c.lineTo(len, 0);
    } else {
      c.scale(1 / 3, 1 / 3);
      leg(n - 1);
      c.rotate(60 * deg);
      leg(n - 1);
      c.rotate(-120 * deg);
      leg(n - 1);
      c.rotate(60 * deg);
      leg(n - 1);
    }
    c.restore();
    c.translate(len, 0);
  }
}

const Snowflakes = () => {
  const particlesInit = useCallback((main) => {
    main.addShape("snowflake", function (context, particle, radius) {
      snowflake(context, Math.floor(Math.random() * 3 + 2), radius);
    });
  }, []);

  return (<Particles id="tsparticles" options={snowflakeConfig} init={particlesInit} />);
};
