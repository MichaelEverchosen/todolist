<template>
  <div class="todo bg">
    <h3>{{ todoData.title }}</h3>
    <ul>
      <li v-for="(task, idx) in todoData.tasks" :key="idx">
        <p>{{ task.description }}</p>
      </li>
    </ul>
    <button
      class="action-button button-edit"
      @click="goToTodoEditForm(todoData.id)"
    >
      Редактировать
    </button>
    <button class="action-button" @click="removeTodo(todoData.id)">
      Удалить
    </button>
  </div>
</template>

<script>
export default {
  props: {
    todoData: {
      type: Object,
      required: true,
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
.todo h3 {
  padding-bottom: 15px;
  margin-left: 30px;
}
</style>
