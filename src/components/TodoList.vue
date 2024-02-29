<template>
<div class="text-[#fff]" v-for="todo in todoList" :key="todo.id">
  <div class="lg:w-8/12 lg:mx-auto ">
    <div class="lg:grid md:grid-cols-1 lg:grid-cols-3 flex md:space-x-1">
      <span class="lg:col-span-2 w-full pt-3 overflow-hidden" :class="{ 'line-through': todo.completed }">{{ todo.item }}</span>
      <div class="flex justify-around items-center md:mx-auto lg:mr-4 lg::mr-auto pt-3">
        <span class="cursor-pointer" @click.stop="toggleCompleted(todo.id)"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd" />
</svg>
</span>
        <span class="cursor-pointer" @click="deleteTodo(todo.id)">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-[red]">
  <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
</svg>
</span>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { useTodoListStore } from "../store/useTodoListStore";
import { storeToRefs } from "pinia";
export default {
  setup () {
    const store = useTodoListStore();
    const { todoList } = storeToRefs(store);
    const { toggleCompleted, deleteTodo } = store;
    return {todoList, toggleCompleted, deleteTodo }
  }
}
</script>

