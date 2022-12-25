import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todoIdForEdit: null,
    todos: [
      {
        id: 1,
        title: "сходить в магазин",
        tasks: [
          {
            description:
              "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            isDone: false,
          },
          {
            description:
              "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            isDone: false,
          },
          {
            description:
              "1 Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            isDone: false,
          },
        ],
      },
      {
        id: 2,
        title: "сходить в посрать",
        tasks: [
          {
            description:
              "2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            isDone: false,
          },
          {
            description:
              "2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            isDone: false,
          },
          {
            description:
              "2 Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            isDone: false,
          },
        ],
      },
      {
        id: 3,
        title: "сходить в поссать",
        tasks: [
          {
            description:
              "3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            isDone: false,
          },
          {
            description:
              "3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            isDone: false,
          },
          {
            description:
              "3 Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            isDone: false,
          },
        ],
      },
    ],
    activeModalName: "",
    todoIdToRemove: null,
  },
  getters: {
    getTodos(state) {
      return state.todos;
    },
    getTodoIdForEdit(state) {
      return state.todoIdForEdit;
    },
    getTodoForEdit(state) {
      for (let todo of state.todos) {
        if (todo.id === state.todoIdForEdit) return todo;
      }
    },
    getActiveModalName(state) {
      return state.activeModalName;
    },
  },
  mutations: {
    removeTodo(state) {
      state.todos = state.todos.filter((todo) => {
        if (todo.id !== state.todoIdToRemove) return todo;
      });
      // TODO Вызвать мутацию
      state.activeModalName = "";
    },
    addTodo(state, data) {
      state.todos.push(data);
    },
    setTodoIdForEdit(state, data) {
      state.todoIdForEdit = data.id;
    },
    updateTodo(state, data) {
      const idx = state.todos.findIndex((todo) => {
        return todo.id === state.todoIdForEdit;
      });
      state.todos[idx].tasks = data.tasks;
      state.todos[idx].title = data.title;
    },
    setTodoIdToRemove(state, data) {
      state.todoIdToRemove = data.id;
    },
    openModal(state, data) {
      state.activeModalName = data.modalName;
    },
    closeModal(state) {
      state.activeModalName = "";
    },
  },
  actions: {},
  modules: {},
});
