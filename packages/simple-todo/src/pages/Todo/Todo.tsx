import React, { useState } from "react";
import { TodoForm, TodoList } from "../../components";
import { ITodo } from "../../Interfaces";
import { Row } from "antd";

const Todo = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  function handleCreate(todo: ITodo) {
    const newTodos: ITodo[] = [...todos];
    newTodos.push(todo);
    setTodos(newTodos);
  }

  function handleUpdate(
    event: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) {
    const newTodos: ITodo[] = [...todos];
    const { value } = event.target;
    newTodos.find((todo: ITodo) => todo.id === id)!.text = value;
    setTodos(newTodos);
  }

  function handleRemove(id: number) {
    const newTodos: ITodo[] = todos.filter((todo: ITodo) => todo.id !== id);
    setTodos(newTodos);
  }

  function handleComplete(id: number) {
    console.log(todos);
    const newTodos: ITodo[] = [...todos];
    newTodos.find(
      (todo: ITodo) => todo.id === id
    )!.isCompleted = !newTodos.find((todo: ITodo) => todo.id === id)!
      .isCompleted;
    setTodos(newTodos);
  }

  function handleBlur(event: React.ChangeEvent<HTMLInputElement>) {
    const { value, classList } = event.target;
    if (value.length === 0) {
      classList.add("error");
    } else {
      classList.remove("error");
    }
  }

  return (
    <Row className="todo">
      <TodoForm todos={todos} handleCreate={handleCreate} />
      <TodoList
        todos={todos}
        handleUpdate={handleUpdate}
        handleRemove={handleRemove}
        handleComplete={handleComplete}
        handleBlur={handleBlur}
      />
    </Row>
  );
};

export default Todo;
