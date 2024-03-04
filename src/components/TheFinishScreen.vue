<script setup>
import TheButton from "./TheButton.vue";
import { getItem } from "../utils/localStorage";

const props = defineProps({
  score: Number,
});

</script>
<template>
  <a-text
    :value="`Nice Work ! Your score : ${score}`"
    position="0 4 -5"
    align="center"
    color="#FFFFFF"
    width="4"
  ></a-text>
  <a-text
    value="Choose mode to try again"
    position="0 3.75 -5"
    align="center"
    color="#FFFFFF"
    width="4"
  ></a-text>

  <TheButton
    :x="-1.7"
    :y="3"
    :z="-5"
    :w="1.5"
    :h="0.8"
    text="Easy"
    color="#319224"
    class="easy"
    :best="getItem('easy')"
  />

  <TheButton
    :x="0"
    :y="3"
    :z="-5"
    :w="1.5"
    :h="0.8"
    text="Normal"
    color="#de7b0a"
    class="normal"
    :best="getItem('normal')"
  />
  <TheButton
    :x="1.7"
    :y="3"
    :z="-5"
    :w="1.5"
    :h="0.8"
    text="Hard"
    color="#bb2c13"
    class="hard"
    :best="getItem('hard')"
  />
</template>
