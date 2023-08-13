import React from "react";
import Card from "../Card/Card";
import style from "./MainBody.module.css";

const MainBody = () => {
  return (
    <div className={style.fullBody}>
      <div className={style.topBody}>
        <Card />
      </div>
    </div>
  );
};

export default MainBody;
