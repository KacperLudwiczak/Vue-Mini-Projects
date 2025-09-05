const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue Message ',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
  },
});

app.mount('#app');


// Proxy (Vue use Proxy behind to save our data changes)

const data = {
  message: 'Hello',
  longMessage: 'Hello World'
};

const handler = {
  set(target, key, value) {
    if (key === 'message') {
      target.longMessage = value + ' World';
    }
    target.message = value;
  }
};

const proxy = new Proxy(data, handler);

proxy.message = 'Hello Proxy Message';

console.log(proxy.longMessage);