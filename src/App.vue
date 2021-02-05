<template>
  <div id="app">
    <p>{{ names }}</p>
    <button @click="addName">Add name</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      names: ['florian'],
    };
  },
  methods: {
    addName() {
      this.names.push('pete');
    },
  },
};
</script>
