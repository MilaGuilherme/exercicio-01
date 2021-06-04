
<template>
  <main>
    <h1>Exercícios em Vue</h1>
    <h2>Utilize o menu para navegar entre os exercícios</h2>
  </main>
</template>
<script>
export default {
  name: 'Index',
  components:{
  },
  data(){
    return{
    }
  },
  props: {
    msg: String
  }
}
</script>
<style scoped>
main{
  padding:24px;
}
</style>
