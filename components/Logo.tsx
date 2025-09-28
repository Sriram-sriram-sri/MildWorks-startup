import React from 'react';

/**
 * A reusable component that renders the Mild Works company logo as a scalable SVG.
 * This ensures a high-quality, consistent brand image across the application.
 * @param {object} props - The component props.
 * @param {string} [props.className] - Optional additional CSS classes to apply to the SVG element.
 */
export const Logo = ({ className }: { className?: string }) => (
  <svg
    className={className || 'h-10 w-auto'}
    viewBox="0 0 255 100"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Mild Works Logo"
  >
    <defs>
      <linearGradient id="logoShieldGradient" x1="0.5" y1="0" x2="0.5" y2="1">
        <stop offset="0%" stopColor="#38bdf8" />
        <stop offset="100%" stopColor="#0ea5e9" />
      </linearGradient>
       <linearGradient id="logoDotGradient" x1="0.5" y1="0" x2="0.5" y2="1">
        <stop offset="0%" stopColor="#67e8f9" />
        <stop offset="100%" stopColor="#0ea5e9" />
      </linearGradient>
    </defs>
    
    <style>
      {`.logo-text { font-family: 'Poppins', 'Helvetica Neue', sans-serif; font-weight: 700; font-size: 50px; fill: #1e293b; letter-spacing: -1px; }`}
    </style>
    
    {/* Top text */}
    <text x="0" y="50" className="logo-text">m</text>
    <text x="92" y="50" className="logo-text">ld</text>

    {/* Bottom text */}
    <text x="0" y="95" className="logo-text">w</text>
    <text x="120" y="95" className="logo-text">rks</text>

    {/* Icon part: 'i' and shield */}
    <g transform="translate(75, 4)">
      {/* Dots for the 'i' */}
      <circle cx="0" cy="8" r="7" fill="url(#logoDotGradient)" />
      <circle cx="0" cy="25" r="7" fill="url(#logoDotGradient)" />
      <circle cx="0" cy="42" r="7" fill="url(#logoDotGradient)" />
      {/* Connector line */}
      <line x1="0" y1="49" x2="0" y2="60" stroke="#0ea5e9" strokeWidth="2.5" />
    </g>
    
    {/* Shield */}
    <g transform="translate(60, 62)">
      <path
        d="M15 0 C10 0 0 5 0 15 L0 25 C0 30 5 35 15 38 L15 38 C25 35 30 30 30 25 L30 15 C30 5 20 0 15 0 Z"
        fill="url(#logoShieldGradient)"
        stroke="#0284c7"
        strokeWidth="2"
      />
      <circle cx="15" cy="18" r="5" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5"/>
    </g>
  </svg>
);
