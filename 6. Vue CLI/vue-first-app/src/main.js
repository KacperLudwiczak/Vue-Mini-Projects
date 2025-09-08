import { createApp } from 'vue';

import App from './App.vue';
import FriendInfo from './components/FriendInfo.vue';

const app = createApp(App);

app.component("friend-info", FriendInfo)

app.mount('#app');
