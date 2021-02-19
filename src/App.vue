<template>
  <div id="app">
    <p>{{ names }} | {{ $store.state.counter }}</p>
    <button @click="addName">Add name</button>
    <router-link to="about">About</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: 'Default Title',
    titleTemplate: '%s | My Awesome Webapp',
  },
  data() {
    return {
      names: ['florian'],
    };
  },
  methods: {
    addName() {
      this.names.push('pete');
      this.$store.commit('INCREMENT');
    },
  },
};
</script>
