import React , {useState} from "react";

import ExpenseDate from "./ExpenseDate";
import "./ExpenseIteam.css";
import Card from "../UI/Card";


const ExpenseIteam = (props) => {
  useState();
  let title = props.title;

  function clickHandler() {
    title='Updated';
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />

      <div className="expense-item__description">
        <h1>{title}</h1>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>change title</button>
    </Card>
  );
};

export default ExpenseIteam;
