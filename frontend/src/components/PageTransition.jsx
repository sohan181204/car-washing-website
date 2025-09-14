import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const PageTransition = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0, duration: 0.5, ease: 'power1.out' }
      );
    }, containerRef);

    return () => {
      const ctxKill = gsap.context(() => {
        gsap.to(containerRef.current, {
          autoAlpha: 0,
          y: -20,
          duration: 0.5,
          ease: 'power1.in',
        });
      }, containerRef);
      ctxKill.revert();
    };
  }, []);

  return (
    <div ref={containerRef} style={{ minHeight: '100%' }}>
      {children}
    </div>
  );
};

export default PageTransition;
