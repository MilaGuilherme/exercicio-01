<template>
  <div id="app">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
  <Top :items="topItems"/>
  <Navbar :items="items"/>
  <main>
    <Articles :articles="articles"/>
    <Sidebar :items="sidebarItems"/>
  </main>
  </div>
</template>

<script>
import Top from './components/Top';
import Sidebar from './components/Sidebar';
import Articles from './components/Articles';
import Navbar from './components/Navbar';
export default {
  name: 'App',
  components:{
    Navbar,
    Top,
    Sidebar,
    Articles
  },
  data(){
    return{
      items: ["Home","Página 1","Página 2","Página 3","Página 4","Página 5"],
      topItems: ["Topic 1","Topic 2","Topic 3"],
      articles: [
        {img:"https://via.placeholder.com/150x150",title:"Article 1",text:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},
        {img:"https://via.placeholder.com/150x150",title:"Article 2",text:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},
        {img:"https://via.placeholder.com/150x150",title:"Article 3",text:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."}
        ],
      sidebarItems: ["Link 1","Link 2","Link 3","Link 4","Link 5","Link 6"],
    }
  },
  props: {
    msg: String
  }
}
</script>

<style>
*{
  padding:0;
  margin:0;
}
main{
  display: flex !important;
  flex-grow:1;
  flex-direction: row;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100vh;
  display: flex;
  flex-direction: column;
}
</style>
