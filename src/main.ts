import { createApp } from 'vue'
import {createPinia, Pinia} from "pinia"
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Button from "primevue/button"
import InputText  from "primevue/inputtext";
import Checkbox from "primevue/checkbox";
import "primeflex/primeflex.css";
import 'primevue/resources/themes/aura-light-green/theme.css'
import 'primeicons/primeicons.css'
import router from './router/index.ts'

const app  = createApp(App)
const pinia: Pinia = createPinia()

app.use(PrimeVue)
app.use(pinia)
app.use(router)
app.component('Button', Button)
app.component('InputText', InputText)
app.component('Checkbox', Checkbox)
app.mount('#app')

