<template>
  <div class="wrap">
    <h2>Список задач</h2>
    <div class="todo" v-for="(todo, idx) in todos" :key="idx">
      <h3>{{ todo.title }}</h3>
      <button @click="goToTodoEditForm(todo.id)">Редактировать</button>
      <button @click="removeTodo(todo.id)">Удалить</button>
      <ul>
        <li v-for="(task, idx) in todo.tasks" :key="idx">
          <p>{{ task.description }}</p>
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
  methods: {
    removeTodo(id) {
      this.$store.commit("removeTodo", { id: id });
    },
    goToTodoEditForm(id) {
      this.$store.commit("setTodoIdForEdit", { id: id });
      this.$router.push("/todo-form");
    },
  },
};
</script>

<style></style>
