<template>
    <div class="navItem">
      <router-link :to="item.path">{{ item.name }}</router-link>
    </div>
</template>

<script>
export default {
    props:{
        item:Object
    },
};
</script>

<style scoped>
.navItem{
    padding: 1em;
}
a{
  color:#fff;
}
a:hover{
    color:#79d2ff;
    font-weight: 700;
    text-decoration: none;
}
</style>