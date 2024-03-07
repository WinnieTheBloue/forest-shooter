<script setup>
/**
 * Defines props for configuring the appearance and behavior of a 3D button entity in an A-Frame scene.
 *
 * @prop {Number} x - The x-coordinate of the button's position in 3D space.
 * @prop {Number} y - The y-coordinate of the button's position.
 * @prop {Number} z - The z-coordinate of the button's position.
 * @prop {Number} w - The width of the button.
 * @prop {Number} h - The height of the button.
 * @prop {String} class - A class name for the button used for identification.
 * @prop {String} text - The text label displayed on the button.
 * @prop {String} color - The color of the button.
 * @prop {Number} best - The best score to display
 */
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
