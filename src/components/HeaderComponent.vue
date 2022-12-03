<template>
  <div class="wrap">
    <div>This is Sparta</div>
    <button @click="plus">+</button>
    <button @click="minus">-</button>
    {{ count }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    plus() {
      this.count++;
    },
    minus() {
      this.count--;
    },
  },
};
</script>

<style></style>
