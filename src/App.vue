<template>
  <div id="app">
    <router-view />
    <ModalWindow v-if="isOpenRemoveTodoModal">
      <div class="modal-remove-todo">
        <h4>Подтвердите действие</h4>
        <div class="actions">
          <button @click="remove">Удалить</button>
          <button @click="close">Отменить</button>
        </div>
      </div>
    </ModalWindow>
  </div>
</template>

<script>
import ModalWindow from "@/components/UI/ModalWindow";
export default {
  components: {
    ModalWindow,
  },

  computed: {
    isOpenRemoveTodoModal() {
      return this.$store.getters.getActiveModalName === "removeTodo";
    },
  },

  methods: {
    remove() {
      this.$store.commit("removeTodo");
    },
    close() {
      this.$store.commit("closeModal");
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/index.scss";
</style>
