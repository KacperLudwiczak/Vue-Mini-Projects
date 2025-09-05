const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: 'tommy',
          name: 'Tommy Smith',
          phone: '+48 645 187 641',
          email: 'tommy@localhost.com',
        },
        {
          id: 'may',
          name: 'May Jane',
          phone: '+48 641 461 649',
          email: 'may@localhost.com',
        },
        {
          id: 'bob',
          name: 'Bob Lee',
          phone: '+48 564 642 734',
          email: 'bob@localhost.com',
        },
      ],
    };
  },
});

app.component('friend-info', {
  template: `
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails()">
      {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
  `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: 'Joe',
        name: 'Joe Rose',
        phone: '+48 672 247 971',
        email: 'joe@localhost.com',
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount('#app');
