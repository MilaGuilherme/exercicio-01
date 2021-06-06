<template>
  <div id="products">
    <div class="search">
      <SearchBar :searchTerm="searchProducts" />
    </div>
    <div id="productsList">
      <div v-for="product in listedProducts" :key="product.index">
        <ProductItem :product="product" />
      </div>
    </div>
    <div id="productsSum">
      {{ productsSum }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProductItem from "./ProductItem.vue";
import SearchBar from "../SearchBar.vue";
export default {
  name: "ProductList",
  data() {
    return {
    };
  },
  props: {},
  components: {
    ProductItem,
    SearchBar,
  },
  methods:{
    searchProducts(term) {
      console.log(term)
      const results = this.listedProducts.filter((p) => p.name.match(term));
      if (results.length) {
        this.listedProducts = results;
      } else {
        this.listedProducts = this.$store.getters.getProducts;
      }
    },
  },
  computed: {
    ...mapGetters({
      listedProducts: 'getProducts'
    }),
    productsSum() {
      return this.listedProducts.length >= 0
        ? `Foram encontrados ${this.listedProducts.length} produtos`
        : "Não foram encontrados produtos";
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
.search {
  background-color: #f3f3f3;
  padding: 20px;
}
</style>