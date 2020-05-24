import React, { useState } from "react";
import { ITodoForm, ITodo } from "../../Interfaces";
import { Row } from "antd";

const TodoForm = (props: ITodoForm) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const [text, setText] = useState("");

  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setText(value);
  }

  function handleEnter(event: React.KeyboardEvent) {
    if (event.key === "Enter") {
      const newTodo: ITodo = {
        id: new Date().valueOf(),
        text: text,
        isCompleted: false,
      };

      props.handleCreate(newTodo);

      if (inputRef && inputRef.current) {
        inputRef.current.value = "";
      }
    }
  }

  return (
    <Row className="todo-form">
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter task"
        onChange={(event) => handleInput(event)}
        onKeyPress={(event) => handleEnter(event)}
      />
    </Row>
  );
};

export default TodoForm;
