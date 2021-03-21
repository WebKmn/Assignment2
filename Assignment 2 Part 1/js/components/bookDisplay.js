app.component('book-display', {
    props: {
        book: {
            type: String,
            required: true,
            default: null
        },
    },
    template:
        /*html*/
        `<ul class="col-sm-12 col-md-6 col-xl-4">
        <a class="list-group-item list-group-item-action active" :href="this.bookObj.selfLink"> {{ this.bookObj.volumeInfo.title }}</a>
        <li class="list-group-item" v-if="this.bookObj.volumeInfo.imageLinks != null"><img :src="this.bookObj.volumeInfo.imageLinks.thumbnail" alt="thumbnail"></li>
        <li class="list-group-item" v-if="this.authors != null">{{ this.authors }}</li>
        <li class="list-group-item" v-if="this.bookObj.volumeInfo.publisher != null">{{ this.bookObj.volumeInfo.publisher }}
        <span v-if="this.bookObj.volumeInfo.publishedDate != null">,  {{this.bookObj.volumeInfo.publishedDate }}</span></li>
        <li class="list-group-item" v-if="this.bookObj.volumeInfo.description != null">{{ this.bookObj.volumeInfo.description }}</li>
        <li class="list-group-item" v-if="this.bookObj.volumeInfo.averageRating != null">Average Rating: {{ this.bookObj.volumeInfo.averageRating }}</li>
        </ul>`,
    computed: {
        bookObj() {
            if (this.book != null)
                return JSON.parse(this.book)
            else
                return null;
        },
        authors() {
            if (this.bookObj.volumeInfo.authors == null) {
                return null;
            }
            else {
                let result = "";
                this.bookObj.volumeInfo.authors.forEach((author, index) => {
                    result += author;
                    if(index != this.bookObj.volumeInfo.authors.length - 1){
                        result += ", "
                    }
                })
                return result;
            }
        }
    }
})