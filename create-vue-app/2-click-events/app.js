const app = Vue.createApp({
    data() {
        return {
            title: 'the final template',
            author: 'George Yuan',
            age: 45
        }
    },

    methods: {
        changeTitle(title) {
            this.title = title
        }
    }
})

app.mount("#app")