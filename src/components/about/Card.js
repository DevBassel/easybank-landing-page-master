import React from "react";
import cls from "./about.module.css";
export default function Card(props) {
  return (
    <div className={cls.card}>
      <img src={props.src} alt="card img" />
      <h2>{props.title}</h2>
      <p>{props.dis}</p>  
    </div>
  );
}
