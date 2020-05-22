export interface ITodo {
  id: string;
  text: string;
  isCompleted: boolean;
}

export interface ITodoItem {
  handleUpdate: (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => void;
  handleRemove: (id: string) => void;
  handleComplete: (id: string) => void;
  handleBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
  todo: ITodo;
}
