<script setup lang="ts">
import { mapActions, mapState } from "pinia";
import { useToDo } from "../store/todo";
</script>

<template>
  <section class="todo-list">
    <h1>Tasks</h1>

    <div class="are-task"></div>

    <input type="text" placeholder="New task" />
    <button class="btn-add">+</button>
    <button class="btn-delete">Delete All</button>
  </section>
</template>

<style scoped></style>
