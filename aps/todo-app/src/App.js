import { useState } from "react";
import "./App.css";
import NewTaskForm from "./webapp/NewTaskForm";
import TaskList from "./webapp/TaskList";

const data = [
  { id: "1", title: "서비스 개발팀 회의 내용 정리", done: true },
  { id: "2", title: "PR 템플릿 만들기", done: false },
  { id: "3", title: "React UI 라이브러리 검토", done: false },
];

const App = () => {
  const [tasks, setTasks] = useState(data);

  return (
    <div className="App" style={{ maxWidth: 300, margin: "auto" }}>
      <h1>Hello TODO</h1>
      <NewTaskForm />
      <div style={{ display: "flex", gap: "8px" }}>
        <span>전체: {tasks.length}</span>
        <span>완료: 1</span>
        <span>미완료: 2</span>
      </div>
      <TaskList tasks={tasks} />
    </div>
  );
};
export default App;
