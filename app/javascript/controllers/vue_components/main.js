import * as Vue from "vue"
const point = "#scraping_app"

import Scrape from "controllers/vue_components/scrape"

document.addEventListener("turbo:load", function () {
        const element = document.querySelector(point)
        if (element !== null) {
            const app = Vue.createApp({
                data() {
                    return {count: 1}
                },
            })


            app.component('scrape', Scrape)
            app.mount(point)
        }
    }
)