<template>
  <div id="app">
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
      integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
      crossorigin="anonymous"
    />
    <Top :items="topItems" />
    <Navbar :items="items" />
    <Exercicio02 />
  </div>
</template>

<script>
import Top from "./components/AppTop/Top/Top";
import Navbar from "./components/AppTop/Navbar/Navbar";
//import Index from './pages/Index';
// import Exercicio01 from './pages/Exercicio01';
import Exercicio02 from "./pages/Exercicio02";
export default {
  name: "App",
  components: {
    Navbar,
    Top,
    Exercicio02,
  },
  data() {
    return {
      items: [
        { name: "Home", path: "index" },
        { name: "Exercício 01", path: "exercicio01" },
        { name: "Exercício 02", path: "exercicio01" },
        { name: "Exercício 03", path: "exercicio03" },
      ],
      topItems: ["Topic 1", "Topic 2", "Topic 3"],
    };
  },
  props: {
    msg: String,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
