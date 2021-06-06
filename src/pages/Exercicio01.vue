
<template>
  <main>
    <Articles :articles="articles"/>
    <Sidebar :items="sidebarItems"/>
  </main>
</template>
<script>
import Sidebar from '../components/Sidebar/Sidebar';
import Articles from '../components/Articles/Articles';
export default {
  name: 'Exercício01',
  components:{
    Sidebar,
    Articles
  },
  data(){
    return{
      articles: [
        {img:"https://via.placeholder.com/150x150",title:"Article 1",text:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},
        {img:"https://via.placeholder.com/150x150",title:"Article 2",text:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},
        {img:"https://via.placeholder.com/150x150",title:"Article 3",text:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."}
        ],
      sidebarItems: ["Link 1","Link 2","Link 3","Link 4","Link 5","Link 6"],
    }
  },
  props: {
  }
}
</script>
<style scoped>
main{
  display: flex !important;
  flex-grow:1;
  flex-direction: row;
}
</style>
