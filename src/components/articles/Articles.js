import React from "react";
import cls from "./articals.module.css";
import Card from "./Card";
import img1 from "../../assets/image-confetti.jpg";

export default function Articles() {
  return (
    <section className={cls.articals}>
      <div className="container">
        <h1 className="title">Latest Articles</h1>
        <div  className="grid">
          <Card img={img1} />
          <Card img={img1} />
          <Card img={img1} />
          <Card img={img1} />
        </div>
      </div>
    </section>
  );
}
