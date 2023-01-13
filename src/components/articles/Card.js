import React from "react";
import cls from "./articals.module.css";
export default function Card(props) {
  return (
    <div className={cls.card}>
      <img src={props.img} alt="articls img" />
      <div className={cls.info}>
        <p className={cls.by}>By Claire Robinson</p>
        <h3 className={cls.title}>
          Receive money in any currency with no fees
        </h3>
        <p className={cls.dis}>
          The world is getting smaller and we’re becoming more mobile. So why
          should you be forced to only receive money in a single
        </p>
      </div>
    </div>
  );
}
