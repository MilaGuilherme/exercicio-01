<template>
  <div class="topbarItem">
    <div v-for="item in items" :key="item">
      <a :href="`#`">{{ item }}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: Array,
  },
};
</script>

<style scoped>
.topbarItem {
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
    padding: 1em;
}
a{
    padding: 1em;
}
</style>