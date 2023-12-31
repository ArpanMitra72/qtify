import React, { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import SwiperCore from "swiper/core";
import styles from "./Songs.module.css";
import cardImage from "../../assets/firstcardImage.png";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Card = () => {
  const [albumDataList, setAlbumDataList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    axios
      .get("https://qtify-backend-labs.crio.do/songs")
      .then((response) => {
        const albums = response.data;
        setAlbumDataList(albums);
        console.log(albums);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const filteredAlbums =
    selectedCategory === "All"
      ? albumDataList
      : albumDataList.filter(
          (albumData) => albumData.genre.key === selectedCategory
        );

  return (
    <div className={styles.mainContainer}>
      <div className={styles.songsAlbumContainer}>
        <div className={styles.topAlbumText}>
          <p className={styles.firstText}>Songs</p>
        </div>
        <div className={styles.Navigation}>
          <p
            className={selectedCategory === "All" ? styles.activeCategory : ""}
            onClick={() => setSelectedCategory("All")}
          >
            All
          </p>
          <p
            className={selectedCategory === "rock" ? styles.activeCategory : ""}
            onClick={() => setSelectedCategory("rock")}
          >
            Rock
          </p>
          <p
            className={selectedCategory === "pop" ? styles.activeCategory : ""}
            onClick={() => setSelectedCategory("pop")}
          >
            Pop
          </p>
          <p
            className={selectedCategory === "jazz" ? styles.activeCategory : ""}
            onClick={() => setSelectedCategory("jazz")}
          >
            Jazz
          </p>
          <p
            className={
              selectedCategory === "blues" ? styles.activeCategory : ""
            }
            onClick={() => setSelectedCategory("blues")}
          >
            Blues
          </p>
        </div>
        <div className={styles.cardGrid}>
          <div>
            <Swiper
              spaceBetween={40}
              navigation={{
                prevEl: ".customButtonPrev",
                nextEl: ".customButtonNext",
              }}
              slidesPerView={7}
              loop={true}
              breakpoints={{
                768: {
                  slidesPerView: 7,
                },
              }}
            >
              {filteredAlbums.map((albumData) => (
                <div className={styles.setNavigation}>
                  <SwiperSlide key={albumData.id}>
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
                  </SwiperSlide>
                </div>
              ))}
              <div className={styles.arrow}>
                <div className={`${styles.customButtonPrev} customButtonPrev`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </div>
                {/* Custom next button */}
                <div className={`${styles.customButtonNext} customButtonNext`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
