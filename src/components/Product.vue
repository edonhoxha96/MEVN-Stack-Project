<template>
<div>
    // eslint-disable-next-line vue/require-v-for-key
    <div v-for="todo in todos"
    :key="todo.id">
            {{ product.title }}
        <router-link :to="'/product'" + product.id>Product </router-link>
    </div>
    </div>
</template>

<script>
import axios from "axios";

   export default {
    props: ['productId'],

    data() {
        return {
            post: null,
        }
    },

    mounted() {
        this.fetchPost();
    },

    methods: {
        fetchPost() {
            axios.get('/api/product/' + this.productId)
                 .then(response => this.product = response.data);
        },
    },
}
</script>

<style lang="scss" scoped>

</style>