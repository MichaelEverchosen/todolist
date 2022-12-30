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

.modal-remove-todo h4 {
  font-size: 20px;
  margin-top: 60px;
  padding: 15px;
}

.actions button {
  height: 40px;
  width: 100px;
  margin: 5px;
  border: 1px solid rgb(55, 55, 55);
  border-radius: 10px;
}
</style>
