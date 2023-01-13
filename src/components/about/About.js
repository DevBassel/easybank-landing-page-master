import cls from "./about.module.css";
import Card from "./Card";
import data from "./serv";
export default function About() {
  console.log(data);

  return (
    <section className={cls.about}>
      <div className="container">
        <div>
          <h1 className="title">Why choose Easybank?</h1>
          <p>
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>
        <div className="grid">
          {data.map((item, index) => {
            return (
              <div key={index}>
                <Card src={item.img} title={item.title} dis={item.dis} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
