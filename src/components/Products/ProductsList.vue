<template>
  <div id="products">
    <div id="productsList">
      <div v-for="product in products" :key="product.index">
        <ProductItem :product="product" />
      </div>
    </div>
    <div id="productsSum">
      {{productsSum}}
    </div>
  </div>
</template>

<script>
import ProductItem from "./ProductItem.vue";
export default {
  name: "ProductList",
  props: {
    products: Array,
  },
  components: {
    ProductItem,
  },
  data() {
    return {};
  },
  computed: {
    productsSum() {
      return this.products.length >= 0 ? `Foram encontrados ${this.products.length} produtos` : "Não foram encontrados produtos"
    },
  },
};
</script>

<style scoped>
#products {
  flex: 100%;
  display: flex;
  flex-direction: column;
}
#productsList {
  flex: 100%;
  padding: 24px;
  flex-grow: 1;
}
#productsSum {
  background-color: #f3f3f3;
  padding: 12px;
  flex-grow: 0;
}
p {
  text-align: left;
}
</style>