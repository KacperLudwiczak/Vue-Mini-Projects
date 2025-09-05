const app = Vue.createApp({
  data() {
    return {
      detailsAreVisible: false,
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
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    }
  }
});

app.mount('#app');
