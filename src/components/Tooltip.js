import React, { useState, useEffect, useRef } from 'react';
import { useColorMode } from '@docusaurus/theme-common';

function Tooltip({ text, tooltipText }) {
  const [showTooltip, setShowTooltip] = useState(false);
  const { colorMode } = useColorMode();
  const tooltipRef = useRef(null);

  const toggleTooltip = () => setShowTooltip(prev => !prev);

  const handleClickOutside = (event) => {
    if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
      setShowTooltip(false);
    }
  };

  const handleKeydown = (event) => {
    if (event.key === 'Escape') {
      setShowTooltip(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeydown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  return (
    <span
      className="tooltip-container"
      onClick={toggleTooltip}
      ref={tooltipRef}
      role="button"
      aria-haspopup="true"
      aria-expanded={showTooltip}
      tabIndex={0}
    >
      {text}
      <span
        className={`tooltip-box ${showTooltip ? 'tooltip-box-visible' : ''} tooltip-${colorMode}`}
      >
        {tooltipText.split('\n').slice(0, 3).map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </span>
    </span>
  );
}

export default Tooltip;
