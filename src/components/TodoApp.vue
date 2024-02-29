<template>
  <div class=" bg-dark-blue">
    <div class="w-11/12 mx-auto">
      <div class="flex justify-center py-20">
    <h1 class="lg:text-4xl text-xl text-green font-bold">Task Day</h1>
  </div>
    <TodoForm />
    <TodoList />
  </div>
  </div>
</template>

<script setup lang="ts">
import TodoForm from "@/components/TodoForm.vue";
import TodoList from "@/components/TodoList.vue";
</script>
