"use client"
import React, { useEffect, useRef, useState, useCallback } from 'react';



const SnowEffect = () => {
  const canvasRef = useRef (null);
  const animationFrameRef = useRef(0);
  const snowflakesRef = useRef ([]);
  const [canvasSize, setCanvasSize] = useState ({ width: 0, height: 0 });

  // Constants for better performance and customization
  const NUM_SNOWFLAKES = 200;
  const MIN_RADIUS = 1;
  const MAX_RADIUS = 3;
  const MIN_SPEED = 0.5;
  const MAX_SPEED = 2;
  const WIND_VARIATION = 0.2;

  const createSnowflake = useCallback((canvas) => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * (MAX_RADIUS - MIN_RADIUS) + MIN_RADIUS,
    speed: Math.random() * (MAX_SPEED - MIN_SPEED) + MIN_SPEED,
    wind: Math.random() * WIND_VARIATION - WIND_VARIATION / 2
  }), []);

  const updateCanvasSize = useCallback(() => {
    if (canvasRef.current) {
      const parent = canvasRef.current.parentElement;
      if (parent) {
        setCanvasSize({
          width: parent.offsetWidth,
          height: parent.offsetHeight,
        });
      }
    }
  }, []);

  const initializeSnowflakes = useCallback((canvas) => {
    snowflakesRef.current = Array.from({ length: NUM_SNOWFLAKES }, () =>
      createSnowflake(canvas)
    );
  }, [createSnowflake]);

  const updateAndDrawSnowflakes = useCallback((ctx, canvas) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.beginPath();

    snowflakesRef.current.forEach(snowflake => {
      // Update position
      snowflake.y += snowflake.speed;
      snowflake.x += snowflake.wind;

      // Reset if out of bounds
      if (snowflake.y > canvas.height) {
        snowflake.y = -snowflake.radius;
        snowflake.x = Math.random() * canvas.width;
      }
      if (snowflake.x > canvas.width) {
        snowflake.x = 0;
      } else if (snowflake.x < 0) {
        snowflake.x = canvas.width;
      }

      // Draw snowflake
      ctx.moveTo(snowflake.x, snowflake.y);
      ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2);
    });

    ctx.fill();
  }, []);

  const animate = useCallback((ctx, canvas) => {
    updateAndDrawSnowflakes(ctx, canvas);
    animationFrameRef.current = requestAnimationFrame(() => animate(ctx, canvas));
  }, [updateAndDrawSnowflakes]);

  useEffect(() => {
    const debouncedResize = () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      updateCanvasSize();
    };

    window.addEventListener('resize', debouncedResize);
    updateCanvasSize();

    return () => {
      window.removeEventListener('resize', debouncedResize);
    };
  }, [updateCanvasSize]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = canvasSize.width;
    canvas.height = canvasSize.height;

    // Initialize and start animation
    initializeSnowflakes(canvas);
    animate(ctx, canvas);

    // Cleanup
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      snowflakesRef.current = [];
    };
  }, [canvasSize, animate, initializeSnowflakes]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{
        opacity: 0.8,
        willChange: 'transform',
      }}
    />
  );
};

export default SnowEffect;