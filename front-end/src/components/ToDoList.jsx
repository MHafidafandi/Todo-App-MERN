import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";

export const ToDoList = ({ text, update, deleteTodo }) => {
  return (
    <div className="todo">
      <div className="text">{text}</div>
      <div className="icons">
        <BiEdit className="icon" onClick={update} />
        <AiFillDelete className="icon" onClick={deleteTodo} />
      </div>
    </div>
  );
};
