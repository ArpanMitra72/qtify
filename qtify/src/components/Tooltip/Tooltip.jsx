import React, { useState } from "react";
import styles from "./Tooltip.module.css";

const Tooltip = ({ songCount, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div
      className={styles.tooltipContainer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showTooltip && <div className={styles.tooltip}>{songCount} songs</div>}
      {children}
    </div>
  );
};

export default Tooltip;
