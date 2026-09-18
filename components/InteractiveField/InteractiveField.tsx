"use client";

import { useEffect, useRef } from "react";

const colors = [
  "#00d9f5",
  "#ff624f",
  "#e4ff79",
  "#fff8e8",
  "#ffd45c",
  "#5ce8ef",
  "#ff907e",
  "#f2c14e",
];

type Ball = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
};

export default function InteractiveField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    if (!canvas || !parent) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointer = { x: -1000, y: -1000, vx: 0, vy: 0, active: false };
    let animationFrame = 0;
    let width = 0;
    let height = 0;
    let cursorRadius = 5;
    let balls: Ball[] = [];

    const drawBall = (ball: Ball) => {
      context.beginPath();
      context.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
      context.globalAlpha = ball.alpha;
      context.fillStyle = ball.color;
      context.fill();
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      for (const ball of balls) drawBall(ball);
      context.globalAlpha = 1;
    };

    const resize = () => {
      const bounds = parent.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = bounds.width;
      height = bounds.height;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      const count = Math.min(500, Math.max(200, Math.floor(width / 6.5)));
      const radius = Math.max(6, Math.min(13, width / 95));
      cursorRadius = Math.max(14, Math.min(24, width / 45));
      balls = Array.from({ length: count }, (_, index) => ({
        x: radius + ((index * 97) % Math.max(width - radius * 2, 1)),
        y: radius + ((index * 61) % Math.max(height - radius * 2, 1)),
        vx: (index % 2 ? 1 : -1) * (0.25 + (index % 4) * 0.08),
        vy: (index % 3 ? 1 : -1) * (0.15 + (index % 5) * 0.06),
        radius: radius * (0.72 + (index % 5) * 0.08),
        color: colors[index % colors.length],
        alpha: 0.82 + (index % 3) * 0.06,
      }));
      draw();
    };

    const tick = () => {
      for (const ball of balls) {
        ball.vy += 0.055;

        ball.x += ball.vx;
        ball.y += ball.vy;
        ball.vx *= 0.995;
        ball.vy *= 0.995;

        if (ball.x - ball.radius < 0 || ball.x + ball.radius > width) {
          ball.x = Math.max(ball.radius, Math.min(width - ball.radius, ball.x));
          ball.vx *= -0.78;
        }
        if (ball.y - ball.radius < 0 || ball.y + ball.radius > height) {
          ball.y = Math.max(ball.radius, Math.min(height - ball.radius, ball.y));
          ball.vy *= -0.72;
        }
      }

      if (pointer.active) {
        for (const ball of balls) {
          const dx = ball.x - pointer.x;
          const dy = ball.y - pointer.y;
          const distance = Math.sqrt(dx * dx + dy * dy) || 0.001;
          const minimumDistance = ball.radius + cursorRadius;
          if (distance >= minimumDistance) continue;

          const normalX = dx / distance;
          const normalY = dy / distance;
          const overlap = minimumDistance - distance;
          ball.x += normalX * overlap;
          ball.y += normalY * overlap;

          const relativeVelocityX = ball.vx - pointer.vx;
          const relativeVelocityY = ball.vy - pointer.vy;
          const impact = relativeVelocityX * normalX + relativeVelocityY * normalY;
          if (impact < 0) {
            const bounce = 1.7;
            ball.vx -= normalX * impact * bounce;
            ball.vy -= normalY * impact * bounce;
          }
        }
      }
      pointer.vx *= 0.78;
      pointer.vy *= 0.78;

      for (let firstIndex = 0; firstIndex < balls.length; firstIndex += 1) {
        for (let secondIndex = firstIndex + 1; secondIndex < balls.length; secondIndex += 1) {
          const first = balls[firstIndex];
          const second = balls[secondIndex];
          const dx = second.x - first.x;
          const dy = second.y - first.y;
          const distance = Math.sqrt(dx * dx + dy * dy) || 0.001;
          const minimumDistance = first.radius + second.radius;
          if (distance >= minimumDistance) continue;

          const normalX = dx / distance;
          const normalY = dy / distance;
          const overlap = (minimumDistance - distance) * 0.52;
          first.x -= normalX * overlap;
          first.y -= normalY * overlap;
          second.x += normalX * overlap;
          second.y += normalY * overlap;

          const velocityX = second.vx - first.vx;
          const velocityY = second.vy - first.vy;
          const impact = velocityX * normalX + velocityY * normalY;
          if (impact > 0) continue;
          const impulse = impact * 0.78;
          first.vx += normalX * impulse;
          first.vy += normalY * impulse;
          second.vx -= normalX * impulse;
          second.vy -= normalY * impulse;
        }
      }

      draw();
      animationFrame = window.requestAnimationFrame(tick);
    };

    const move = (event: PointerEvent) => {
      const bounds = canvas.getBoundingClientRect();
      const nextX = event.clientX - bounds.left;
      const nextY = event.clientY - bounds.top;
      pointer.vx = Math.max(-18, Math.min(18, nextX - pointer.x));
      pointer.vy = Math.max(-18, Math.min(18, nextY - pointer.y));
      pointer.x = nextX;
      pointer.y = nextY;
      pointer.active = true;
    };
    const leave = () => {
      pointer.x = -1000;
      pointer.y = -1000;
      pointer.vx = 0;
      pointer.vy = 0;
      pointer.active = false;
    };

    resize();
    window.addEventListener("resize", resize);
    parent.addEventListener("pointermove", move);
    parent.addEventListener("pointerleave", leave);

    if (!reducedMotion.matches) animationFrame = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      parent.removeEventListener("pointermove", move);
      parent.removeEventListener("pointerleave", leave);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="interactive-field" />;
}
