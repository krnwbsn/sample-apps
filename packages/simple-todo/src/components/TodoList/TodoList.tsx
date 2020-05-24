import React from "react";
import { ITodoList } from "../../Interfaces";
import TodoItem from "../TodoItem";
import { Row, List } from "antd";

const TodoList = (props: ITodoList) => {
  return (
    <Row className="todo-list">
      <List>
        {props.todos.map((todo) => (
          <List.Item key={todo.id}>
            <TodoItem
              todo={todo}
              handleUpdate={props.handleUpdate}
              handleRemove={props.handleRemove}
              handleComplete={props.handleComplete}
              handleBlur={props.handleBlur}
            />
          </List.Item>
        ))}
      </List>
    </Row>
  );
};

export default TodoList;
