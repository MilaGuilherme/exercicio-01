<template>
  <div class="top">
    <div class="rightContent">
      <img class=logo src="https://via.placeholder.com/150x50"/>
    </div>
    <div class="leftContent">
      <TopBar :items="items"/>
      <SearchBar/>  
      </div>
    </div>
</template>

<script>
import SearchBar from "../../SearchBar";
import TopBar from "./TopBar";
export default {
    components: {
        SearchBar,
        TopBar,
    },
    props:{
        items:Array
    }
}
</script>

<style scoped>
.top{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding:20px

}
.top>*{
    display: flex;
    flex: 75%;
}
.logo{
    padding:24px;
}
.leftContent{
    justify-content: flex-end;
    flex-direction: column;
}
</style>
