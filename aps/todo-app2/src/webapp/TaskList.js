import React, { useState } from "react";

const TaskList = (props) => {
  const { tasks } = props;
  console.log("🚀 >> tasks", tasks);
  const [id, setId] = useState(0);
  const [checkBool, setCheckBool] = useState(false);

  const handleSubmit = (e) => {
    console.log("E :  ", e);

    props.onSubmit({ done: !e.target.checked });
  };

  return (
    <>
      <ul>
        {tasks.map((task) => {
          return (
            <>
              <li key={task.id} style={{ marginBottom: 8 }}>
                <input type="checkbox" onClick={handleSubmit} />
                <span>{task.title}</span>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
};

export default TaskList;
