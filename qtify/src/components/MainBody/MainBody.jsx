import React from "react";
import Card from "../Card/Card";
import NewAlbumCard from "../Card/NewAlbumCard";
import style from "./MainBody.module.css";

const MainBody = () => {
  return (
    <div className={style.fullBody}>
      <div className={style.topBody}>
        <Card />
        <NewAlbumCard />
      </div>
    </div>
  );
};

export default MainBody;
