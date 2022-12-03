<template>
  <div id="app">
    <Header></Header>
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/HeaderComponent.vue";
export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/index.scss";
</style>
