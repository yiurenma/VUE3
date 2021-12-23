const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            title: 'the final template',
            author: 'George Yuan',
            age: 45,
            x: 0,
            y: 0
        }
    },

    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data){
            console.log(e)
            if (data){
                console.log(data)
            }
        },
        handleMousemove(e){
            this.x = e.offsetX,
            this.y = e.offsetY
        }
    }
})

app.mount("#app")