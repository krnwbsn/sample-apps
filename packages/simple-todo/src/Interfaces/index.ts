export interface ITodo {
  id: number;
  text: string;
  isCompleted: boolean;
}

export interface ITodoItem {
  handleUpdate: (
    event: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => void;
  handleRemove: (id: number) => void;
  handleComplete: (id: number) => void;
  handleBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
  todo: ITodo;
}

export interface ITodoList {
  handleUpdate: (
    event: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => void;
  handleRemove: (id: number) => void;
  handleComplete: (id: number) => void;
  handleBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
  todos: ITodo[];
}

export interface ITodoForm {
  todos: ITodo[];
  handleCreate: (todo: ITodo) => void;
}
