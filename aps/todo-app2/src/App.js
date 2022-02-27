import "./App.css";
import React, { useEffect, useRef, useState } from "react";

import NewTaskForm from "./webapp/NewTaskForm";
import TaskList from "./webapp/TaskList";

const data = [
  { id: "1", title: "서비스 개발팀 회의 내용 정리", done: true },
  { id: "2", title: "PR 템플릿 만들기", done: false },
  { id: "3", title: "React UI 라이브러리 검토", done: false },
];

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [done, setDone] = useState([]);
  const [notDone, setNotDone] = useState([]);

  useEffect(() => {
    let arr = tasks
      .filter((data) => {
        return data.done !== false;
      })
      .map((data) => {
        return data;
      });
    setDone(arr);

    let arr2 = tasks
      .filter((data) => {
        return data.done !== true;
      })
      .map((data) => {
        return data;
      });
    setNotDone(arr2);
  }, [tasks]);

  const ID = useRef(0);

  const handleSubmit = (title) => {
    const task = {
      id: ID.current,
      title,
      done: false,
    };
    setTasks(tasks.concat(task));
    ID.current += 1;
  };

  return (
    <div className="App" style={{ maxWidth: 300, margin: "auto" }}>
      <h1>Hello TODO!!</h1>
      <NewTaskForm onSubmit={handleSubmit} />
      <div style={{ display: "flex", gap: "8px" }}>
        <span>전체: {tasks.length}</span>
        <span>완료: {done.length}</span>
        <span>미완료: {notDone.length} </span>
      </div>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default App;
