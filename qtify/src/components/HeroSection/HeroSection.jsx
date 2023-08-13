import React from "react";
import styles from "./HeroSection.module.css";
import Headphone from "../../assets/Headphone.png";

const HeroSection = () => {
  return (
    <div className={styles.container}>
      <div className="text-container">
        <div className={styles.firstText}>100 Thousand Songs, ad-free</div>
        <div className={styles.secondText}>Over thousands podcast episodes</div>
      </div>
      <img src={Headphone} alt="Headphone" width={212} height={212} />
    </div>
  );
};

export default HeroSection;
