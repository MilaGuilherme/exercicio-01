
<template>
  <main>
    <div class="links">
      <router-link to="/exercicio03/"> Lista de produtos</router-link>
      <router-link to="/exercicio03/formulario">Inserir novo produto</router-link>
    </div>
    <div class="subpages">
      <router-view />
    </div>
  </main>
</template>
<script>
export default {
  name: "Exercício03",
  components: {},
  data() {
    return {};
  },
  methods: {},
  watch: {},
};
</script>
<style scoped>
.subpages {
  display: flex;
  flex: 100%;
}
.links {
  padding: 1em;
  display: flex;
  flex-direction: column;
  column-gap: 1em;
  background: #f1f1f1;
}
main {
  display: flex !important;
  flex-grow: 1;
  flex-direction: row;
}
#list,
#form {
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
