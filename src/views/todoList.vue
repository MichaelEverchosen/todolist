<template>
  <div class="wrap">
    <div class="todo-list tc"><h2 class="">Список задач</h2></div>
    <div class="task">
      <div class="todo bg" v-for="(todo, idx) in todos" :key="idx">
        <h3>{{ todo.title }}</h3>
        <ul>
          <li v-for="(task, idx) in todo.tasks" :key="idx">
            <p>{{ task.description }}</p>
          </li>
        </ul>
        <button
          class="action-button button-edit"
          @click="goToTodoEditForm(todo.id)"
        >
          Редактировать
        </button>
        <button class="action-button" @click="removeTodo(todo.id)">
          Удалить
        </button>
      </div>
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

<style scoped>
.todo-list {
  background-color: Blue;
}

.todo h3 {
  padding-bottom: 15px;
  margin-left: 30px;
}
</style>
