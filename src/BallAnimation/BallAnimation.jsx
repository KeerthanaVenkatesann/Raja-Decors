import React, { useEffect, useRef } from 'react';

const BallAnimation = () => {
  const ballRef = useRef(null);
  let mouseX = 0;
  let mouseY = 0;
  let ballX = 0;
  let ballY = 0;
  const speed = 0.07;

  useEffect(() => {
    const ball = ballRef.current;

    const animate = () => {
      const distanceX = mouseX - ballX;
      const distanceY = mouseY - ballY;
      ballX += distanceX * speed;
      ballY += distanceY * speed;

      ball.style.left = `${ballX}px`;
      ball.style.top = `${ballY}px`;

      requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (event) => {
      mouseX = event.pageX;
      mouseY = event.pageY;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="container">
      <div className="ball-one-mouse" ref={ballRef}></div>
    </div>
  );
};

export default BallAnimation;

