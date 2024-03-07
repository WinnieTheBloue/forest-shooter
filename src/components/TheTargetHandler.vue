<script setup>
import { onMounted, ref } from "vue";

/**
 * Defines the component's props.
 * @prop {Number} level - The game level that influences monster creation speed.
 */
const props = defineProps({
  level: Number,
});

/**
 * A reactive array to store the generated monsters' data.
 * @type {Ref<Array<Object>>}
 */
const monsters = ref([]);

/**
 * Predefined monster templates with attributes for scaling, rotation, and sound.
 * @type {Array<Object>}
 */
const monstersIds = [
  {
    name: "#monster_2",
    scale: "0.3 0.3 0.3",
    rotation: "0 0 0",
    sound: "src: #mst2; poolSize: 10; volume: 0.6; autoplay: true",
  },
  {
    name: "#monster_3",
    scale: "0.15 0.15 0.15",
    rotation: "0 0 0",
    sound: "src: #mst3; poolSize: 10; volume: 0.6; autoplay: true",
  },
];

/**
 * Creates and adds a new monster to the monsters array with randomized position and predefined animation.
 * The speed of the animation and the selection of the monster template are determined by the game level and randomization.
 * @param {Number} speed - The duration of the animation, affecting the monster's speed.
 */
const createMonster = (speed) => {
  const x = -2 + 4 * Math.random(); 
  const y = Math.random() * 2.2 + 0.8; 
  const z = Math.random() * -1.5 - 2.5; 

  const animation = `property: position; to: ${x} ${y} ${z}; dur: ${speed}; loop: true; dir: alternate`;
  const randomIndex = Math.floor(Math.random() * monstersIds.length); 

  monsters.value.push({
    position: `${x} 0 ${z}`,
    animation,
    monster: monstersIds[randomIndex],
  });
};

/**
 * On component mount, initializes a recurring interval to create monsters every 1000 milliseconds.
 */
onMounted(() => {
  setInterval(() => {
    createMonster(props.level); 
  }, 1000);
});
</script>

<template>
  <a-entity
    v-for="(monster, index) in monsters"
    :key="index"
    :position="monster.position"
    :animation="monster.animation"
    hit-handler
    target="healthPoints: 1; static:false"
  >
    <a-entity
      :gltf-model="monster.monster.name"
      :scale="monster.monster.scale"
      :rotation="monster.monster.rotation"
    ></a-entity>
  </a-entity>
</template>
