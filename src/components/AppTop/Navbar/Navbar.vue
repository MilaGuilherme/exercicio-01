<template>
  <div class="navbar">
    <div v-for="item in items" :key="item.index">
        <NavbarItem :item="item"/>
    </div>
  </div>
</template>

<script>
import NavbarItem from "./NavbarItem";
export default {
    components: {
        NavbarItem,
    },
    props:{
        items:Array
    }
}
</script>

<style scoped>
.navbar{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background: #3d3d3d;
}
</style>