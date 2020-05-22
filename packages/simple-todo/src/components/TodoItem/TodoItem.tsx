import * as React from "react";
import { ITodoItem } from "../../Interfaces";

const TodoItem = (props: ITodoItem) => {
  return (
    <div>
      <div onClick={() => props.handleComplete(props.todo.id)}>
        {props.todo.isCompleted ? <span>✔</span> : <span />}
      </div>
      <div>
        <input
          value={props.todo.text}
          onBlur={props.handleBlur}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            props.handleUpdate(event, props.todo.id)
          }
        />
      </div>
      <div onClick={() => props.handleRemove(props.todo.id)}>x</div>
    </div>
  );
};

export default TodoItem;
