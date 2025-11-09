import { useCallback } from 'react';
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log("Particles loaded:", container);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      {/* solid black background behind particles for high-contrast */}
      <div className="absolute inset-0 bg-black" />
      {/* subtle radial glows to make the scene look more shining/light */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 10% 10%, rgba(255,255,255,0.06), transparent 12%), radial-gradient(circle at 85% 85%, rgba(96,165,250,0.05), transparent 18%)',
        }}
      />
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        className="absolute inset-0 mix-blend-screen"
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 60,
          pauseOnBlur: false,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onHover: {
                enable: true,
                mode: "grab",
              },
              onClick: {
                enable: false,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 140,
                links: {
                  opacity: 0.6,
                },
              },
            },
          },
          particles: {
            color: {
              // bright palette for shining effect on dark background
              value: ["#7C3AED", "#06B6D4", "#F472B6", "#60A5FA", "#FACC15", "#FFFFFF"],
            },
            links: {
              color: "#ffffff",
              distance: 140,
              enable: true,
              opacity: 0.14,
              width: 1,
            },
            move: {
              enable: true,
              direction: "none",
              outModes: {
                default: "out",
              },
              random: false,
              // medium speed
              speed: 1.6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 70,
            },
            opacity: {
              // brighter, twinkling particles
              value: { min: 0.5, max: 1 },
              animation: { // This animation will make particles pulse in opacity
                enable: true,
                speed: 2,
                minimumValue: 0.4,
                sync: false,
              },
            },
            shape: {
              type: "circle",
            },
            shadow: {
              enable: true,
              color: "#67e8f9",
              blur: 20,
            },
            size: {
              value: { min: 1.5, max: 6 },
              animation: {
                enable: true,
                speed: 3,
                minimumValue: 0.6,
                sync: false,
              },
            },
          },
          detectRetina: true,
          responsive: [
            {
              maxWidth: 640,
              options: {
                particles: {
                  // keep particle count lower but enable subtle links on mobile
                  number: { value: 28 },
                  links: { enable: true, distance: 80, opacity: 0.08 },
                },
              },
            },
          ],
        }}
      />
      </div>
  );
}