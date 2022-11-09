export interface ITodo {
  done: boolean;
  task: string;
}

export interface TodoState {
    todoList: ITodo[]
    todo: ITodo
}