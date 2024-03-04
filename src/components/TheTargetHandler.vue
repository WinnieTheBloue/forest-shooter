<script setup>
import { onMounted, ref } from "vue";

const props = defineProps({
  level: Number,
});

const monsters = ref([]);

const monstersIds = [
  { name: "#monster_1", scale: "0.1 0.1 0.1", rotation: "0 180 0" },
  { name: "#monster_2", scale: "0.3 0.3 0.3", rotation: "0 0 0" },
  { name: "#monster_3", scale: "0.15 0.15 0.15", rotation: "0 0 0" },
];

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

onMounted(() => {
  setInterval(() => {
    createMonster(props.level);
  }, 500);
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
