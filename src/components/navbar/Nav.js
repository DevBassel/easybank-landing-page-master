import React from "react";
import cls from "./nav.module.css";
import RequstBtn from "../RequstBtn";
import Logo from "../Logo";

export default function Nav() {
  return (
    <nav className={`${cls.nav} `}>
      <div className="container">
        <Logo color="#2D314D" />
        <div className={cls.menu}>
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
