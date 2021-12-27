<template>
<div>
  <h1>{{ title }}</h1>
  <input type="text" ref="name">
  <button @click="handleClick">click name</button>
</div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      title: "My First Vue App :)"
    }
  },
  methods: {
    handleClick(){
      /* 这个跟控制ID有什么区别吗？
      我如果将ref="name"改成id="name"并在这里写成this.#name就会出现编译错误：
      Syntax Error: Private name #name is not defined. (17:11)
      这是为什么呢？
      */
      console.log(this.$refs.name)
      this.$refs.name.classList.add('ACTIVE')
      this.$refs.name.focus()
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
