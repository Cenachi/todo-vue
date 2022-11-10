<script setup lang="ts">
import { mapActions, mapState } from "pinia";
import { useToDo } from "../store/todo";
</script>

<template>
  <section class="todo-list">
    <h3>Tasks</h3>

    <div class="are-task">
      <p>Tasks show up here</p>
    </div>

    <div class="input-btn">
      <input type="text" placeholder="New task" />
      <button class="btn-add">+</button>
    </div>

    <button class="btn-delete">Delete All</button>
  </section>
</template>

<style scoped lang="scss">
.input-btn {
  /* padding: 8px; */
  background: #242424;

  input,
  .btn-add {
    outline: none;
    background: none;
    border: none;
    border-bottom: 1px solid #ddd;
    padding: 8px;
    align-items: left;
  }
}
.btn-delete {
  margin-top: 10px;
  padding: 8px;
  background: #ff0000;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-add:hover {
  background: #ddd;
  transition: 0.2s;
  cursor: pointer;
}
</style>
