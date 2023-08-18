import React from "react";
import Card from "../Card/Card";
import style from "./MainBody.module.css";

const MainBody = () => {
  return (
    <div className={style.fullBody}>
      <div className={style.topBody}>
        <div className={style.topAlbumText}>
          <p class="firstText">Top Albums</p>
          <p class="secondText">Show all</p>
        </div>
        <Card />
      </div>
    </div>
  );
};

export default MainBody;
