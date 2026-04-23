import React from "react";

const MobileGuard = () => {
  return (
    <div className="mobile-guard">
      {/* Animated background orbs */}
      <div className="guard-orb orb-1" />
      <div className="guard-orb orb-2" />
      <div className="guard-orb orb-3" />

      {/* Grain texture overlay */}
      <div className="guard-grain" />

      <div className="guard-content">
        {/* Icon */}
        <div className="guard-icon-wrap">
          <svg
            className="guard-monitor-icon"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="2"
              y="3"
              width="20"
              height="14"
              rx="2"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M8 21h8M12 17v4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <div className="guard-icon-ping" />
        </div>

        {/* Brand */}
        <p className="guard-brand">AWWWWWRDS</p>

        {/* Heading */}
        <h1 className="guard-heading">
          Built for the <span className="guard-accent">Big Screen</span>
        </h1>

        {/* Divider */}
        <div className="guard-divider">
          <span />
          <p className="guard-sub">For the full experience</p>
          <span />
        </div>

        {/* Description */}
        <p className="guard-desc">
          This site is crafted with rich animations and immersive interactions
          designed exclusively for desktop. Switch to a PC or laptop to enjoy
          the full experience.
        </p>

        {/* Tip pill */}
        <div className="guard-tip">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Open on a desktop browser for best results</span>
        </div>
      </div>

      {/* Bottom scroll hint text */}
      <div className="guard-scroll-text">
        {"VIEW ON PC · VIEW ON PC · VIEW ON PC · VIEW ON PC · VIEW ON PC · "
          .repeat(3)}
      </div>
    </div>
  );
};

export default MobileGuard;
