import * as React from "react";
import { ITodoList } from "../../Interfaces";
import TodoItem from "../TodoItem";

const TodoList = (props: ITodoList) => {
  return (
    <div>
      <ul>
        {props.todo.map((todo) => (
          <li key={todo.id}>
            <TodoItem
              todo={todo}
              handleUpdate={props.handleUpdate}
              handleRemove={props.handleRemove}
              handleComplete={props.handleComplete}
              handleBlur={props.handleBlur}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
