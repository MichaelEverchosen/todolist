<template>
  <div class="wrap">
    <div class="tc"><h2 class="">Список задач</h2></div>
    <div class="todo-list">
      <TodoCard v-for="(todo, idx) in todos" :key="idx" :todoData="todo" />
    </div>
  </div>
</template>

<script>
import TodoCard from "@/components/TodoCard.vue";
export default {
  components: {
    TodoCard,
  },
  data() {
    return {
      // todos: [],
    };
  },
  computed: {
    todos() {
      return this.$store.getters.getTodos;
    },
  },
};
</script>

<style scoped>
.todo-list {
  color: black;
  padding: 10px 100px;
}
</style>
