const app = Vue.createApp({
    data() {
        return {
            keyword: '',
            result: null,
            curPage: 1
        }
    },
    methods: {
        searchGoogleBooks() {
            fetch('https://www.googleapis.com/books/v1/volumes?q=' + this.keyword + "&startIndex=" + this.startIndex + "&maxResults=20")
                .then(response => response.json())
                .then(json => {
                    this.result = json;
                })
        },
        searchBooks(){
            this.curPage = 1;
            this.searchGoogleBooks();
        },
        nextPage() {
            this.curPage += 1;
            this.searchGoogleBooks();
        },
        previousPage() {
            this.curPage -= 1;
            this.searchGoogleBooks();
        }

    },
    computed: {
        startIndex() {
            return (this.curPage - 1) * 20;
        },
        disablePrevious() {
            return this.curPage == 1;
        },
        disableNext() {
            return (this.result.totalItems / 20) <= this.curPage;
        }
    }
})