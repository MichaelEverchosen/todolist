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
  },
};
</script>

<style></style>
