<template>
  <div id="box">
    <div id="cell"></div>
  </div>
</template>

<script setup lang="ts">
import { nextTick } from 'vue';
import { customDraggable } from './Draggable';
nextTick(()=>{
  const cell=document.querySelector('#cell') as HTMLElement
   const box = document.querySelector('#box') as HTMLElement
   console.log(cell, box);
customDraggable(cell, box)

})

</script>

<style>
* {
  padding: 0;
  margin: 0;
}

body {
  position: relative;
  height: 10000px;
}

#box {
  position: fixed;
  left: 200px;
  top: 200px;
  width: 100px;
  height: 100px;
  background-color: aqua;
}
#cell{
 width: 100px;
  height: 40px;
  background-color: rgb(255, 0, 0);
}
</style>
