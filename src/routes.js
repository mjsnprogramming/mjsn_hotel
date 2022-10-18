import App from '/App.vue'
import Branch from '/Branch.vue'
import Search from '/Search.vue'
import AboutUs from '/AboutUs.vue'
import Pages from '/Pages.vue'
import Blog from '/Blog.vue'
import Reservation from '/Reservation.vue'
import NotFound from '/NotFound.vue';

const routes = {
    'Home': App,
    'Branch': Branch,
    'Search': Search,
    'AboutUs': AboutUs,
    'Pages': Pages,
    'Blog': Blog,
    'Reservation': Reservation
}

export default {
    data() {
        return {
            currentPath: window.location.hash
        }
    },
    computed: {
        currentView() {
            return routes[this.currentPath.slice(1) || '/'] || NotFound
        }
    },
    mounted() {
        window.addEventListener('hashchange', () => {
            this.currentPath = window.location.hash
        })
    }
}