import { createApp } from 'vue';

import App from './App.vue';
import FriendInfo from './components/FriendInfo.vue';
import AddFriend from './components/AddFriend.vue';

const app = createApp(App);

app.component("friend-info", FriendInfo)
app.component("add-friend", AddFriend)

app.mount('#app');
