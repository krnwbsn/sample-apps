import React from "react";
import { ITodoItem } from "../../Interfaces";
import { Input, Col, Row } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

const TodoItem = (props: ITodoItem) => {
  return (
    <Row className="todo-item">
      <Col onClick={() => props.handleComplete(props.todo.id)}>
        {props.todo.isCompleted ? (
          <span className="todo-item-checked">
            <CheckOutlined />
          </span>
        ) : (
          <span className="todo-item-unchecked" />
        )}
      </Col>
      <Col className="todo-item-input-wrapper">
        <Input
          value={props.todo.text}
          onBlur={props.handleBlur}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            props.handleUpdate(event, props.todo.id)
          }
        />
      </Col>
      <Col
        className="todo-remove"
        onClick={() => props.handleRemove(props.todo.id)}
      >
        <CloseOutlined />
      </Col>
    </Row>
  );
};

export default TodoItem;
