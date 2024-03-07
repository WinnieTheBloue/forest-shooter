<script setup>
import TheButton from "./TheButton.vue";
import { getItem } from "../utils/localStorage";

/**
 * Defines the component's props, including flags for the game's state.
 * @prop {Boolean} gameHasStarted - Indicates if the game has started.
 * @prop {Boolean} finishScreen - Indicates if the finish screen is currently displayed.
 */
const props = defineProps({
  gameHasStarted: Boolean,
  finishScreen: Boolean,
});
</script>
<template>
  <a-text
    value="Choose a mode to start the game"
    position="0 4 -5"
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
