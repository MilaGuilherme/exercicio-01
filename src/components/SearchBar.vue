<template>
  <div class="searchBar">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <div class="search-container">
      <form @submit.prevent="onSearch">
        <input type="text" v-on:keyup="onSearch" v-model="term" name="search" placeholder="Search" />
        <button type="submit"><i class="fa fa-search"></i></button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      term:"",
    }
  },
  props:{
    searchTerm:Function,
  },
  methods:{
    onSearch(){
      this.searchTerm(this.term);
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: row;
}
.search-container {
  float: right;
}
.search-container button {
  float: right;
  padding: 6px 10px;
  margin-top: 8px;
  margin-right: 16px;
  background: #ddd;
  font-size: 17px;
  border: none;
  cursor: pointer;
}
.search-container button:hover {
  background: #ccc;
}
input[type="text"],
.search-container button {
  float: none;
  display: block;
  text-align: left;
  margin: 0;
  padding: 14px;
}
</style>