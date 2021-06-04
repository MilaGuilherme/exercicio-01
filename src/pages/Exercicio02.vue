
<template>
  <main>
    <div id="form"><ProductForm :createProduct="updateProducts" /></div>
    <div id="list">
      <div class="search">
        <SearchBar :searchTerm="searchProducts" />
      </div>
      <ProductsList :products="listedProducts" />
    </div>
  </main>
</template>
<script>
import ProductForm from "../components/Products/ProductForm";
import ProductsList from "../components/Products/ProductsList";
import SearchBar from "../components/SearchBar.vue";
export default {
  name: "Exercício02",
  components: {
    ProductForm,
    ProductsList,
    SearchBar,
  },
  data() {
    return {
      searchedProduct: "",
      products: [
        {
          name: "Produto 1",
          price: 0.99,
        },
        {
          name: "Produto 2",
          price: 9.99,
        },
      ],
      listedProducts: [
        {
          name: "Produto 1",
          price: 0.99,
        },
        {
          name: "Produto 2",
          price: 9.99,
        },
      ],
    };
  },
  methods: {
    updateProducts(product) {
      this.products.push(product);
    },
    searchProducts(term) {
      const results = this.products.filter(p=>p.name.match(term))
      if (results.length){
        this.listedProducts = results;
      }
      else
      {
        this.listedProducts = this.products;
      }
    },
  },
  watch: {
    products() {
      this.listedProducts = [...this.products];
    },
  },
};
</script>
<style scoped>
main {
  display: flex !important;
  flex-grow: 1;
  flex-direction: row;
}
#list,
#form {
  flex: 50%;
  flex-grow: 1;
}
.search {
  background-color: #f3f3f3;
  padding: 20px;
}
#list {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.products {
  padding: 20px;
  display: flex;
  flex-direction: column;
}
</style>
