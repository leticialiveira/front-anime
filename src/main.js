import './assets/main.css'
import PrimeVue from "primevue/config";
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//theme
import "primevue/resources/themes/lara-light-blue/theme.css";

const app = createApp(App)
app.use(PrimeVue);
app.use(router)


app.mount('#app')
