import React from "react";
import Logo from "../Logo";
import cls from "./footer.module.css";
import F from "../../assets/icon-facebook.svg";
import Y from "../../assets/icon-youtube.svg";
import T from "../../assets/icon-twitter.svg";
import P from "../../assets/icon-pinterest.svg";
import I from "../../assets/icon-instagram.svg";

export default function Social() {
  return (
    <div>
      <Logo color="#fff" />
      <div className={cls.social}>
        <a href="#f">
          <img src={F} alt="icon" />
        </a>
        <a href="#t">
          <img src={Y} alt="icon" />
        </a>
        <a href="#y">
          <img src={T} alt="icon" />
        </a>
        <a href="#p">
          <img src={P} alt="icon" />
        </a>
        <a href="#i">
          <img src={I} alt="icon" />
        </a>
      </div>
    </div>
  );
}
