<template>
  <div class="wrap">
    <div class="action-task tc">
      <h2>{{ formTitle }}</h2>
    </div>
    <div class="task change tc">
      <div class="task-field-sizes bg">
        <input type="text" v-model="title" />
      </div>
      <div v-for="(task, idx) in tasks" :key="idx">
        <div class="task-field-sizes bg">
          <input type="text" v-model="tasks[idx].description" />
          <button @click="removeTask(idx)">Убрать</button>
        </div>
      </div>
      <div>
        <button @click="addTask">Добавить</button>
      </div>
      <button @click="save">Сохранить</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      tasks: [
        {
          description: "",
          isDone: false,
        },
      ],
    };
  },

  computed: {
    todoIdForEdit() {
      return this.$store.getters.getTodoIdForEdit;
    },
    isEditForm() {
      const value = this.todoIdForEdit !== null;
      if (value) this.parseTodoData();
      return value;
    },
    formTitle() {
      return this.isEditForm ? "Отредактировать задачу" : "Создать задачу";
    },
    mutationName() {
      return this.isEditForm ? "updateTodo" : "addTodo";
    },
  },

  methods: {
    addTask() {
      this.tasks.push({
        description: "",
        isDone: false,
      });
    },
    removeTask(idx) {
      this.tasks.splice(idx, 1);
    },
    save() {
      this.$store.commit(this.mutationName, {
        title: this.title,
        tasks: this.tasks,
      });
      this.redirectToMainPage();
    },
    parseTodoData() {
      let data = this.$store.getters.getTodoForEdit;
      this.title = data.title;
      this.tasks = data.tasks;
    },
    redirectToMainPage() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.action-task {
  background-color: Blue;
}

.task change {
  background-color: whitesmoke;
}
</style>
