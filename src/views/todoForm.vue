<template>
  <div class="wrap">
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
      // if (value) this.parseTodoData();
      return value;
    },
  },

  watch: {
    isEditForm() {
      console.log("сработал ватчер");
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
      this.$store.commit("addTodo", {
        title: this.title,
        tasks: this.tasks,
      });
    },
    parseTodoData() {
      let data = this.$store.getters.getTodoForEdit;
      console.log("data", data);
      this.title = data.title;
      this.tasks = data.tasks;
    },
  },
};
</script>

<style></style>
