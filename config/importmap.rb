# Pin npm packages by running ./bin/importmap

pin "application", preload: true
pin "@hotwired/turbo-rails", to: "turbo.min.js", preload: true
pin "@hotwired/stimulus", to: "stimulus.min.js", preload: true
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js", preload: true
pin_all_from "app/javascript/controllers", under: "controllers"
pin "vue", to: "https://ga.jspm.io/npm:vue@3.3.13/dist/vue.esm-browser.prod.js"
pin "redaxios", to: "https://ga.jspm.io/npm:redaxios@0.5.1/dist/redaxios.module.js"
