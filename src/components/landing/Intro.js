import React from "react";
import RequstBtn from "../RequstBtn";
import cls from "./landing.module.css";
export default function Intro() {
  return (
    <div className={cls.intro}>
      <h1>Next generation digital banking</h1>
      <p>
        Take your financial life online. Your Easybank account will be a
        one-stop-shop for spending, saving, budgeting, investing, and much more.
      </p>
      <RequstBtn />
    </div>
  );
}
