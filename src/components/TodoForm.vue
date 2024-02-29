<template>
  <div class=" lg:w-8/12 lg:mx-auto ">
    <form class="grid grid-cols-2  lg:grid-cols-3 md:gap-1" @submit.prevent="addItemAndClear(todo)">
      <input class="w-full   px-1 py-3 rounded-lg md:col-span-2" v-model="todo" type="text"
        placeholder="O que temos pra hoje?" />
      <button class="mx-4 bg-green hover:brightness-95  transition rounded-lg text-[#fff] font-normal text-base">
        Adicionar
      </button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useTodoListStore } from '@/store/useTodoListStore'

export default {
  setup() {
    const todo = ref('')
    const store = useTodoListStore()

    function addItemAndClear() {
      if (todo.value.length === 0) {
        return
      }
      store.addTodo(todo.value)
      todo.value = ''
    }

    return { todo, addItemAndClear }
  }
}
</script>
