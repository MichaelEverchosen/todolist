<template>
  <div class="todo bg">
    <h3>{{ todoData.title }}</h3>
    <ul>
      <li v-for="(task, idx) in todoData.tasks" :key="idx">
        <div class="subtask">
          <input type="checkbox" id="checkbox" v-model="task.isDone" />
          <p :class="{ 'strike-text': task.isDone }">{{ task.description }}</p>
        </div>
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
      this.$store.commit("setTodoIdToRemove", { id: id });
      this.$store.commit("openModal", { modalName: "removeTodo" });
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

.subtask {
  display: grid;
  grid-template: auto 1fr / auto 1fr auto;
}

#checkbox {
  height: 20px;
  width: 20px;
  margin: 20px;
}

.strike-text {
  text-decoration: line-through;
}
</style>
