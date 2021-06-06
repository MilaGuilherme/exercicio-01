<template>
  <div class="articles">
    <div v-for="item in articles" :key="item.index">
        <Article :item="item"/>
    </div>
  </div>
</template>

<script>
import Article from './Article';
export default {
    components: {
        Article,
    },
    props:{
        articles:Array
    }
}
</script>

<style scoped>
.articles{
    display: flex;
    height:100%;
    flex:1 1 75%;
    flex-direction: column;
    justify-content: space-around;
    background: #fff;
}
</style>