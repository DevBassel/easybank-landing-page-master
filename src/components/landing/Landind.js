import Intro from "./Intro";
import cls from "./landing.module.css";
import landing from "../../assets/image-mockups.png";

export default function Landind() {
  return (
    <section className={cls.landing}>
      <div className="container">
        <Intro />
        <img className={cls.img} src={landing} alt="landing img" />
        <div className={cls.img_land} alt="landing img"></div>
      </div>
    </section>
  );
}
