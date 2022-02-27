import React, { useState } from "react";
import TaskList from "./TaskList";

const NewTaskForm = (props) => {
  return (
    <div>
      <input placeholder="새로울 할 일을 입력하세요." />
      <button>등록</button>
    </div>
  );
};

export default NewTaskForm;
