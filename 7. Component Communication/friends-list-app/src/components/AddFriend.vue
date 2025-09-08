<template>
    <form @submit.prevent="submitForm">
        <div>
            <label>Name</label>
            <input type="text" v-model="enteredName" />
        </div>
        <div>
            <label>E-Mail</label>
            <input type="email" v-model="enteredEmail" />
        </div>
        <div>
            <label>Phone</label>
            <input type="tel" v-model="enteredPhone" />
        </div>
        <div>
            <button>Add Friend</button>
        </div>
    </form>
</template>

<script>
export default {
    emits: ['add-friend'],
    data() {
        return {
            enteredName: '',
            enteredEmail: '',
            enteredPhone: '',          
        };
    },
    methods: {
        submitForm() {
            this.$emit(
                'add-friend',
                this.enteredName,
                this.enteredEmail,
                this.enteredPhone,              
            );
        },
    },
};
</script>