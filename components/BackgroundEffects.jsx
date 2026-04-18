'use client';

import { useMemo } from 'react';

export default function BackgroundEffects() {
  const stars = useMemo(() =>
    Array.from({ length: 80 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: 1.5 + Math.random() * 2,
      delay: Math.random() * 8,
      duration: 3 + Math.random() * 5,
      opacity: 0.3 + Math.random() * 0.5,
    })),
  []);

  const fadeStars = useMemo(() =>
    Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: `${5 + Math.random() * 90}%`,
      top: `${5 + Math.random() * 90}%`,
      size: 2 + Math.random() * 1.5,
      delay: Math.random() * 16,
      duration: 8 + Math.random() * 10,
    })),
  []);

  return (
    <div className="bg-effects" aria-hidden="true">
      {/* Deep space glow */}
      <div className="nebula nebula-1"></div>
      <div className="nebula nebula-2"></div>

      {/* Milky way bands */}
      <div className="milky-way"></div>
      <div className="milky-way milky-way-2"></div>

      {/* Star cluster near milky way */}
      <div className="star-cluster">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={`cluster-${i}`}
            className="star"
            style={{
              left: `${30 + Math.random() * 40}%`,
              top: `${28 + Math.random() * 18}%`,
              width: `${1 + Math.random() * 1.2}px`,
              height: `${1 + Math.random() * 1.2}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              '--star-opacity': 0.2 + Math.random() * 0.3,
            }}
          />
        ))}
      </div>

      {/* Shooting stars */}
      <div className="shooting-star shooting-star-1"></div>
      <div className="shooting-star shooting-star-2"></div>
      <div className="shooting-star shooting-star-3"></div>

      {/* Twinkling stars */}
      <div className="starfield">
        {stars.map((s) => (
          <div
            key={s.id}
            className="star"
            style={{
              left: s.left,
              top: s.top,
              width: `${s.size}px`,
              height: `${s.size}px`,
              animationDelay: `${s.delay}s`,
              animationDuration: `${s.duration}s`,
              '--star-opacity': s.opacity,
            }}
          />
        ))}
      </div>

      {/* Stars that fade out and reappear */}
      <div className="starfield">
        {fadeStars.map((s) => (
          <div
            key={`fade-${s.id}`}
            className="star star-fade"
            style={{
              left: s.left,
              top: s.top,
              width: `${s.size}px`,
              height: `${s.size}px`,
              animationDelay: `${s.delay}s`,
              animationDuration: `${s.duration}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
