import React from "react";
import styles from "./Card.module.css";
import cardImage from "../../assets/firstcardImage.png";

const Card = () => {
  return (
    <div className={styles.fullCard}>
      <div className={styles.onlyCard}>
        <img src={cardImage} alt="Card Image" width={159} height={170} />
        <div className={styles.settingSmallBox}>
          <div className={styles.smallBox}>
            <div className={styles.followersText}>100 Follows</div>
          </div>
        </div>
      </div>
      <div className={styles.titleText}>New Bollywood</div>
    </div>
  );
};

export default Card;
