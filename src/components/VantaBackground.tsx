// src/components/VantaBackground.tsx
import { useEffect, useRef } from 'react';
import Script from 'next/script';

const VantaBackground = () => {
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let vantaEffect: { destroy: () => void } | null = null;

    if (typeof window !== 'undefined' && window.VANTA && window.VANTA.WAVES) {
      vantaEffect = window.VANTA.WAVES({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        shininess: 46.0,
        waveHeight: 40.0,
        waveSpeed: 0.3,
        zoom: 0.65,
        color:0x5588
      });
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.waves.min.js"
        strategy="beforeInteractive"
      />
      <div
        ref={vantaRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -1,
        }}
      />
    </>
  );
};

export default VantaBackground;
