<template>
  <div class="wrap">
    <h2>{{ formTitle }}</h2>
    <input type="text" v-model="title" />
    <div v-for="(task, idx) in tasks" :key="idx">
      <input type="text" v-model="tasks[idx].description" />
      <button @click="removeTask(idx)">Убрать</button>
    </div>
    <div>
      <button @click="addTask">Добавить</button>
    </div>
    <button @click="save">Сохранить</button>
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
      // TODO: Я крч хуй знает ,но надо что то делать
      if (value) this.parseTodoData();
      return value;
    },
    formTitle() {
      return this.isEditForm ? "Отредактировать запись" : "Создать запись";
    },
    mutationName() {
      return this.isEditForm ? "updateTodo" : "addTodo";
    },
  },

  watch: {
    isEditForm() {
      if (this.isEditForm) this.parseTodoData();
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
      console.log("data", data);
      this.title = data.title;
      this.tasks = data.tasks;
    },
    redirectToMainPage() {
      this.$router.push("/");
    },
  },
};
</script>

<style></style>
