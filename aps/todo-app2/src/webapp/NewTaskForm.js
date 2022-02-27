import React, { useEffect, useRef, useState } from "react";

const NewTaskForm = (props) => {
  const [content, setContent] = useState("");
  const ref = useRef();

  useEffect(() => {
    ref.current.focus();
  }, []);

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content) {
      return;
    }
    props.onSubmit(content);
    setContent("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          ref={ref}
          value={content}
          placeholder="새로울 할 일을 입력하세요."
          onChange={handleChange}
          autoFocus
        />
        <button
          type="submit"
          onKeyPress={handleKeyPress}
          onClick={handleSubmit}
        >
          등록
        </button>
      </form>
    </div>
  );
};

export default NewTaskForm;
