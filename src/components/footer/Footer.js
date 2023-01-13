import React from "react";
import cls from "./footer.module.css";
import List from "./List";
import Social from "./Social";
import RequstBtn from "../RequstBtn";
export default function Footer() {
  return (
    <footer className={cls.footer}>
      <div className={`container ${cls.body}`}>
        <div className={cls.first}>
          <Social />
          <List />
        </div>
        <div className={cls.inv}>
          <RequstBtn />
          <p>© Easybank. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
