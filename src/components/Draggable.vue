<template>
  <div class="dom2">
  <div class="dom1"></div>
  </div>
</template>

<script setup lang="ts">
import { nextTick } from 'vue';
import { customDraggable } from './Draggable'
nextTick(() => {
  const targetDom = document.querySelector('.dom1') as HTMLElement;
  const dragDom = document.querySelector('.dom2') as HTMLElement;
  console.log(targetDom)
  console.log(dragDom)
  customDraggable(targetDom, dragDom)
})
</script>

<style scoped>

.dom1 {
  height: 50px;
  width: 100px;
  background: rgb(17, 216, 17);
  margin: 20px;
}

.dom2 {
   position: relative;
  height: 50px;
  width: 100px;
  background: rgb(2, 1, 1);
   margin: 20px;
}
</style>
