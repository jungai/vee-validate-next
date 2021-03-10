import { createApp } from 'vue'
import App from './App.vue'
import "@spectrum-web-components/bundle/elements.js";

// tailwind
import './main.css'

// global rule 
import './configs/vee-validate'

createApp(App).mount('#app')
