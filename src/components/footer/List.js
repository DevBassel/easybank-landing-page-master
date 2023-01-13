import cls from "./footer.module.css";
export default function List() {
  return (
    <div className={cls.list}>
      <ul>
        <li>
          <a href="#about">About Us</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#blog">Blog</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="#careers">Careers</a>
        </li>
        <li>
          <a href="#support">Support</a>
        </li>
        <li>
          <a href="#policy">Privacy Policy</a>
        </li>
      </ul>
    </div>
  );
}
