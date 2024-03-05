import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // loads tsparticles-slim
import { useCallback, useMemo } from "react";

const ParticlesComponent = (props) => {
  const options = useMemo(() => {
    return {
      background: {
        color: "#0a192f",
      },
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      interactivity: {
        events: {
          onClick: {
            enable: true, // enables the click event
            mode: "push", // adds the particles on click
          },
          onHover: {
            enable: true, // enables the hover event
            mode: "repulse", // make the particles run away from the cursor
          },
        },
        modes: {
          push: {
            quantity: 10, // number of particles to add on click
          },
          repulse: {
            distance: 100, // distance of the particles from the cursor
          },
        },
      },
      particles: {
        links: {
          enable: true,
          distance: 200,
        },
        move: {
          enable: true,
          speed: { min: 3, max: 8 },
        },
        opacity: {
          value: { min: 0.2, max: 0.5 },
        },
        size: {
          value: { min: 1, max: 2 },
        },
      },
    };
  }, []);

  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
  }, []);

  return <Particles id={props.id} init={particlesInit} options={options} />;
};

export default ParticlesComponent;
