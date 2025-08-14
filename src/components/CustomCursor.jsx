import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const trailRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const trail = trailRef.current;

    let mouseX = 0, mouseY = 0;
    let trailX = 0, trailY = 0;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    const animateTrail = () => {
      trailX += (mouseX - trailX) * 0.1;
      trailY += (mouseY - trailY) * 0.1;
      trail.style.transform = `translate3d(${trailX}px, ${trailY}px, 0)`;
      requestAnimationFrame(animateTrail);
    };

    document.addEventListener('mousemove', moveCursor);
    animateTrail();

    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <>
      <div
        ref={trailRef}
        className="fixed top-0 left-0 w-16 h-16 rounded-full pointer-events-none z-50 bg-[#00F5D4] opacity-20 blur-3xl transition-transform duration-300"
        style={{ transform: 'translate3d(0,0,0)', mixBlendMode: 'screen' }}
      />
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-50 bg-[#00F5D4]"
        style={{ transform: 'translate3d(0,0,0)' }}
      />
    </>
  );
}
