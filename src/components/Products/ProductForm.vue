<template>
  <form @submit.prevent="onFormSubmit">
    <p>
      <label>Product name</label>
      <input type="text" v-model="product" placeholder="Product name"/>
    </p>
    <p>
      <label>Product price</label>
      <input type="text" v-model="price" placeholder="Product price" />
    </p>
    <button type="submit">Send</button>
  </form>
</template>

<script>
export default {
  name: "ProductForm",
  components: {},
  data() {
    return {
      product: "",
      price: "",
    };
  },
  methods: {
    onFormSubmit() {
      const product = { name: this.product, price: this.price };
      this.createProduct(product);
    },
  },
  props: {
    createProduct: Function,
  },
};
</script>

<style scoped>
form {
  padding: 20px;
  display: flex;
  flex-direction: column;
}
</style>