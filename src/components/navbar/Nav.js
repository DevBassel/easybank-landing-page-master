import React, { useState } from "react";
import cls from "./nav.module.css";
import RequstBtn from "../RequstBtn";
import Logo from "../Logo";
import menue from "../../assets/icon-hamburger.svg";
import close from "../../assets/icon-close.svg";
export default function Nav() {
  const [isActive, setActive] = useState(false);

  const toggle = () => {
    setActive(!isActive);
  };
  return (
    <nav className={`${cls.nav} `}>
      <div className="container">
        <Logo color="#2D314D" />
        <img
          className={cls.burger}
          src={isActive ? close : menue}
          alt="icon"
          onClick={toggle}
        />
        <div className={`${cls.menu} ${isActive ? cls.active : ""} `}>
          <ul>
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#contact">contact</a>
            </li>
            <li>
              <a href="#Blog">Blog</a>
            </li>
            <li>
              <a href="#Careers">Careers</a>
            </li>
          </ul>
        </div>
        <RequstBtn />
      </div>
    </nav>
  );
}
