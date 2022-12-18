import { createApp } from 'vue';
import App from './App.vue';
import ModalRequest from '@/components/Landing/ModalRequest';


import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"


createApp(App)
	.component('ModalRequest', ModalRequest)
	.mount('#app')
