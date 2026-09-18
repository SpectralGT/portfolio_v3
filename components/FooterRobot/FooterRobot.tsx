"use client";

import { useEffect, useRef } from "react";

export default function FooterRobot() {
  const robotRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const robot = robotRef.current;
    const head = headRef.current;
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!robot || !head || motionQuery.matches) return;

    const updateGaze = (event: PointerEvent) => {
      const bounds = robot.getBoundingClientRect();
      const centerX = bounds.left + bounds.width / 2;
      const centerY = bounds.top + bounds.height * 0.28;
      const horizontal = Math.max(-5, Math.min(5, (event.clientX - centerX) / 70));
      const vertical = Math.max(-4, Math.min(4, (event.clientY - centerY) / 90));
      head.style.setProperty("--gaze-x", `${horizontal}px`);
      head.style.setProperty("--gaze-y", `${vertical}px`);
    };

    const resetGaze = () => {
      head.style.setProperty("--gaze-x", "0px");
      head.style.setProperty("--gaze-y", "0px");
    };

    window.addEventListener("pointermove", updateGaze, { passive: true });
    window.addEventListener("blur", resetGaze);

    return () => {
      window.removeEventListener("pointermove", updateGaze);
      window.removeEventListener("blur", resetGaze);
    };
  }, []);

  return (
    <div ref={robotRef} className="robot" aria-hidden="true">
      <div className="robot-antenna" />
      <div ref={headRef} className="robot-head"><span /><span /></div>
      <div className="robot-body"><i /><i /><i /></div>
    </div>
  );
}
