<template>
  <div>
  <TheNavigation></TheNavigation>
  <main>
    <router-view></router-view>
  </main>
  <footer>
    <router-view name="footer"></router-view>
  </footer>
  </div>
</template>

<script>
import TheNavigation from './components/nav/TheNavigation.vue';

export default {
  components: {
    TheNavigation
  },
  data() {
    return {
      teams: [
        { id: 't1', name: 'Frontend Developer', members: ['u1', 'u2'] },
        { id: 't2', name: 'Backend Developer', members: ['u1', 'u2', 'u3'] },
        { id: 't3', name: 'Client Consulting', members: ['u4', 'u5'] },
      ],
      users: [
        { id: 'u1', fullName: 'Bob', role: 'Developer' },
        { id: 'u2', fullName: 'Tim', role: 'Developer' },
        { id: 'u3', fullName: 'Jake', role: 'Developer' },
        { id: 'u4', fullName: 'John', role: 'Consultant' },
        { id: 'u5', fullName: 'Alan', role: 'Consultant' },
      ],
    };
  },
  provide() {
    return {
      teams: this.teams,
      users: this.users,
    };
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>