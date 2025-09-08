<template>
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
        <ul v-if="detailsAreVisible">
            <li>
            <strong>Phone:</strong>
            {{ friend.phone }}
            </li>
            <li>
            <strong>Email:</strong>
            {{ friend.email }}
            </li>
        </ul>
    </li>
</template>

<script>
export default {
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
    }
    }
};
</script>