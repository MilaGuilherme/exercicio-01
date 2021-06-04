<template>
  <p>Product: {{ product.name }} | Price: ${{ product.price }}</p>
</template>

<script>
export default {
    name: "ProductItem",
    props:{
        product:Object
    },
}
</script>

<style scoped>
</style>