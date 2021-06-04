<template>
  <div class="sidebar">
    <div v-for="item in items" :key="item">
      <a :href="`#`">{{ item }}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: String,
  },
};
</script>

<style scoped>
.sidebar {
  display: flex;
  flex: 0 0 25%;
  height:100%;
  flex-direction: column;
  background: #3d3d3d;
}
.sidebar>*{
  padding: 12px;
}
</style>