<template>
  <div class="move">
    <div class="darg"></div>
    <div class="dom">moveDom</div>
  </div>
</template>

<script setup lang="ts">
import { nextTick } from 'vue';
import { customDraggable } from './Draggable'
nextTick(() => {
  const dragDom = document.querySelector('.darg') as HTMLElement;
  const moveDom = document.querySelector('.move') as HTMLElement;
  customDraggable(dragDom, moveDom)
})
</script>

<style scoped>
.move {
  position: relative;
  height: 50px;
  width: 100px;
  background: rgb(2, 1, 1);
}

.darg {
  height: 50px;
  width: 100px;
  background: rgb(17, 216, 17);
}

.dom {
  height: 50px;
  width: 100px;
  background: rgb(2, 1, 1);
}
</style>
