import React, { useState } from "react";
import TaskList from "./TaskList";
import { useDispatch } from "react-redux";
import { registerContentAction } from "../reducer/todoReducer";

const NewTaskForm = () => {
  const dispatch = useDispatch();

  const [content, setContent] = useState("");

  const handleChange = (e) => {
    setContent({
      ...content,
      [e.target.name]: e.target.value,
    });
  };

  const registerContent = () => {
    console.log("content : ", content);
    registerContentAction(dispatch(content));
    return;
  };

  return (
    <div>
      <input
        placeholder="새로울 할 일을 입력하세요."
        type="text"
        name="content"
        value={content}
        onChange={handleChange}
      />

      <button name="content" onClick={registerContent}>
        등록
      </button>
    </div>
  );
};

export default NewTaskForm;
