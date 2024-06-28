// import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';

// Import PrimeVue CSS
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';        
import 'primeicons/primeicons.css';

export default function(app) {
    app.use(PrimeVue);
    app.use(ToastService);
}
