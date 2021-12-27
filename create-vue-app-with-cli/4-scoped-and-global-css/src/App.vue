<template>
  <div>
    <h1>{{ title }}</h1>
    <modal/>
  </div>
</template>

<script>
import modal from "./components/Modal.vue"

export default {
  name: 'App',
  components: {
    modal
  },
  data() {
    return {
      title: "This is my first vue:)"
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
