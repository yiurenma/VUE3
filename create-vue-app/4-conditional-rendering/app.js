const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            title: 'the final template',
            author: 'George Yuan',
            age: 45
        }
    },

    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        }
    }
})

app.mount("#app")