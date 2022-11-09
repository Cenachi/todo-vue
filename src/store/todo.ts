import { defineStore } from "pinia";
import { TodoState } from "../types";

export const useToDo = defineStore("todo", {
  state: () =>
    ({
      todoList: [],
      todo: {
        done: false,
        task: "",
      },
    } as TodoState),

  actions: {
    deleteAll() {
      this.todoList = [];
    },
  },
});
