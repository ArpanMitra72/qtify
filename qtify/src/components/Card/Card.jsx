import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Card.module.css";
import cardImage from "../../assets/firstcardImage.png";

const Card = () => {
  const [albumDataList, setAlbumDataList] = useState([]);

  useEffect(() => {
    axios
      .get("https://qtify-backend-labs.crio.do/albums/top")
      .then((response) => {
        const albums = response.data;
        setAlbumDataList(albums);
        console.log(albums);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div className={styles.albumsContainer}>
      {albumDataList.map((albumData) => (
        <div
          className={`${styles.fullCard} ${styles.cardWithBorderRadius}`}
          key={albumData.id}
        >
          <div className={styles.onlyCard}>
            <img
              src={albumData.image}
              alt="Card Image"
              width={159}
              height={170}
            />
            <div className={styles.settingSmallBox}>
              <div className={styles.smallBox}>
                <div className={styles.followersText}>
                  {albumData.follows} Follows
                </div>
              </div>
            </div>
          </div>
          <div className={styles.titleText}>{albumData.title}</div>
        </div>
      ))}
    </div>
  );
};

export default Card;
