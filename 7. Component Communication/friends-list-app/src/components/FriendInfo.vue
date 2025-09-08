<template>
    <li>
        <h2>{{ name }} {{ isFavorite ? '(Favorite)' : ''}}</h2>
        <button @click="toggleFavorite">Toggle Favorite</button>
        <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
        <ul v-if="detailsAreVisible">
            <li>
            <strong>Email:</strong>
            {{ email }}
            </li>
            <li>
            <strong>Phone:</strong>
            {{ phoneNumber }}
            </li>            
        </ul>
        <button @click="$emit('delete', id)">Delete</button>
    </li>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: String,
            required: true
        },
        isFavorite: {
            type: String,
            required: false,
            default: '0',
            validator: function(value) {
                return value === '1' || value === '0';
            }
        },
    },
    // Simple props:
    // props: ['name', 'phoneNumber', 'email', 'isFavorite']
    emits: {
        'toggle-favorite': function(id) {
            if (id) {
                return true;
            } else {
                console.warn('id is missing');
                return false;
            }
        },
        'delete': function(id) {
            if (id) {
                return true;
            } else {
                console.warn('id is missing');
                return false;
            }
        },
    },
    // Simple emits:
    // emits: ['toggle-favorite', 'delete'],
    data() {
        return {
            detailsAreVisible: false
        };
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        },
        toggleFavorite() {
            this.$emit('toggle-favorite', this.id);
        },
    }
};
</script>