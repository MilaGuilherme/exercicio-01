
<template>
  <main>
    <div id="form">
      <ProductForm/></div>
    <div id="list">
      <ProductsList/>
    </div>
  </main>
</template>
<script>
import ProductForm from "../components/Products/ProductForm";
import ProductsList from "../components/Products/ProductsList";
export default {
  name: "Exercício02",
  components: {
    ProductForm,
    ProductsList,
  },
  data() {
    return {
    };
  },
  methods: {
  },
  watch: {
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
  flex-grow: 1;
}
#list {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
