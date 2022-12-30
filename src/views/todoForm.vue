<template>
  <div class="wrap">
    <div class="action-task tc">
      <h2>{{ formTitle }}</h2>
    </div>
    <div class="task change tc bg">
      <div class="task-field-sizes">
        <input type="text" v-model="title" />
      </div>
      <div v-for="(task, idx) in tasks" :key="idx">
        <div class="field-sizes">
          <input type="text" v-model="tasks[idx].description" />
          <button class="action-button" @click="removeTask(idx)">Убрать</button>
        </div>
      </div>
      <div>
        <button class="action-button" @click="addTask">Добавить</button>
      </div>
      <button class="action-button" @click="save">Сохранить</button>
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
}

.task change {
  background-color: whitesmoke;
}

.task-field-sizes input {
  border: 1px solid rgb(55, 55, 55);
  border-radius: 3px;
  height: 30px;
  width: 1000px;
}
.field-sizes input {
  border: 1px solid rgb(55, 55, 55);
  border-radius: 3px;
  margin: 15px 15px 15px 97px;
  height: 30px;
  width: 1000px;
}
</style>
