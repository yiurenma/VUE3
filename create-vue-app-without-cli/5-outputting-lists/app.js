const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            books: [
                { title: 'name of the wind', author: 'Patrick Rothfuss'},
                { title: 'the way of kings', author: 'Brandon Sanderson'},
                { title: 'the final empire', author: 'Brandon Sanderson'},
            ]
        }
    }
})

app.mount("#app")