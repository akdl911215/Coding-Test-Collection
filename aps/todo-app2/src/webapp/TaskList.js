import React, { useState } from "react";

const TaskList = (props) => {
  const { tasks } = props;

  return (
    <>
      <ul>
        {tasks.map((task) => {
          return (
            <>
              <li key={task.id} style={{ marginBottom: 8 }}>
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
