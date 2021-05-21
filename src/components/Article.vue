<template>
  <div class="navItem">
    <div class="img"><img :src="item.img" /></div>
    <div class="content">
      <h2>{{ item.title }}</h2>
      <p>{{ item.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
};
</script>

<style scoped>
.navItem {
    padding: 24px;
    display: flex;
    flex-direction: row;
    column-gap: 24px;
    text-align: left;
}
</style>