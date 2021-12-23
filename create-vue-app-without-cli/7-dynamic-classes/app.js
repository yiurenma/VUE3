const app = Vue.createApp({
    data() {
        return {
            url: "https://www.thenetninja.co.uk",
            showBooks: true,
            books: [
                { title: 'name of the wind', author: 'Patrick Rothfuss', img:'assets/1.jpg', isFav: true},
                { title: 'the way of kings', author: 'Brandon Sanderson', img:'assets/2.jpg', isFav: false},
                { title: 'the final empire', author: 'Brandon Sanderson', img:'assets/3.jpg', isFav: true},
            ]
        }
    },
    
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        toggleBookFav(book){
            book.isFav = !book.isFav;
        }
    }
})

app.mount("#app")