<script setup>
const props = defineProps({
  x: Number,
  y: Number,
  z: Number,
  w: Number,
  h: Number,
  class: String,
  text: String,
  color: String,
  best: Number,
});
</script>

<template>
  <a-entity
    target="healthPoints: 1"
    start
    :geometry="`primitive: box; width: ${w}; height: ${h}; depth: 0.1;`"
    :position="`${x} ${y} ${z}`"
    :material="`color: ${color}`"
    :class="class"
  >
  </a-entity>
  <a-text
    :value="text"
    :position="`${x} ${y + 0.1} ${z + 0.1}`"
    align="center"
    color="#FFFFFF"
    width="4"
  ></a-text>
  <a-text
    :value="`Best : ${best}`"
    :position="`${x} ${y - 0.1} ${z + 0.1}`"
    align="center"
    color="#FFFFFF"
    width="4"
  ></a-text>
</template>
