<template>
  <div class="wrap">
    <h2>Список задач</h2>
    <div class="todo" v-for="(todo, idx) in todos" :key="idx">
      <h3>{{ todo.title }}</h3>
      <ul>
        <li v-for="(task, idx) in todo.tasks" :key="idx">
          <p>{{ task.discription }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
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

<style></style>
