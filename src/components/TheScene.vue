<script setup>
import { ref } from "vue";

import TheCameraRig from "./TheCameraRig.vue";
import TheMesh from "./TheMesh.vue";
import TheBullet from "./TheBullet.vue";
import TheGuns from "./TheGuns.vue";
import TheStartScreen from "./TheStartScreen.vue";
import TheTargetHandler from "./TheTargetHandler.vue";
import TheRoom from "./TheRoom.vue";
import TheFinishScreen from "./TheFinishScreen.vue";

import { getItems, updateItems } from "../utils/localStorage.js";

/**
 * Defines props received from parent components.
 * @prop {Number} scale - The scale factor for the game's 3D environment.
 * @prop {String} overlaySelector - Selector for the game's overlay element.
 */
defineProps({
  scale: Number,
  overlaySelector: String,
});

// State variables to track the game's status, levels, scores, and timers.
const allAssetsLoaded = ref(false);
const level = ref(0);
let score = ref(0);
let time = ref(0);
const gameHasStarted = ref(false);
const finishScreen = ref(false);
const countDownIsVisible = ref(false);
const countDown = ref(5);

/**
 * Function to handle score updates in the game.
 */
const handleScoreUpdate = () => {
  score.value += 1;
};

/**
 * Starts the game with a timer, checks the score against local storage for level completion, and stops the game when time runs out.
 */
const startGame = () => {
  const music = document.querySelector('.music');
  gameHasStarted.value = true;
  let gameTimer = null;

  gameTimer = setInterval(() => {
    time.value -= 1;
    if (time.value === 0) {
      if (level.value == 3000 && score.value > getItems("easy")) {
        updateItems("easy", score.value);
      } else if (level.value == 2000 && score.value > getItems("normal")) {
        updateItems("normal", score.value);
      } else if (level.value == 1000 && score.value > getItems("hard")) {
        updateItems("hard", score.value);
      }
      music.components.sound.stopSound();
      
      gameHasStarted.value = false;
      finishScreen.value = true;

      clearInterval(gameTimer);
    }
  }, 1000);
};

/**
 * Prepares and starts the countdown for game start, initializes game settings, and plays the countdown sounds.
 * @param {Number} e - The level difficulty to set the game level.
 */
const start = (e) => {
  const ready1 = document.querySelector('.ready-1');
  const ready2 = document.querySelector('.ready-2');
  const go = document.querySelector('.go');
  const music = document.querySelector('.music');
  countDownIsVisible.value = true;
  level.value = e;
  score.value = 0;
  time.value = 30;

  music.components.sound.playSound();

  let countDownTimer = setInterval(() => {
    if (countDown.value === 3) {
      ready1.components.sound.playSound();
      
    } else if (countDown.value === 2) {
      ready2.components.sound.playSound();
    } else if (countDown.value === 1) {
      go.components.sound.playSound();
    } 
    else if (countDown.value === 0) {
      clearInterval(countDownTimer);
      countDownIsVisible.value = false;
      countDown.value = 5;
      startGame();
    }
    countDown.value -= 1;
  }, 1000);
};
</script>


<template>
  <a-scene
    background="color: black;"
    :webxr="`
      requiredFeatures: local-floor;
      referenceSpaceType: local-floor;
      optionalFeatures: dom-overlay;
      overlayElement: ${overlaySelector};
    `"
    xr-mode-ui="XRMode: xr"
    physx="
      autoLoad: true;
      delay: 1000;
      useDefaultScene: false;
      wasmUrl: lib/physx.release.wasm;
    "
  >
    <a-assets @loaded="allAssetsLoaded = true">
      <!-- "SciFi Gun" (https://skfb.ly/DHNN) by MrFetch is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/). -->
      <a-asset-item id="gun" src="assets/gun.glb"></a-asset-item>

      <!-- "medieval asset02\wall" (https://skfb.ly/69JQZ) by hamsterspit is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/). -->
      <a-asset-item id="wall" src="assets/wall.glb"></a-asset-item>

      <!-- "Monster" (https://skfb.ly/oruOv) by Matthew Slater is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/). -->
      <a-asset-item id="monster_2" src="assets/monster_2.glb"></a-asset-item>

      <!-- "Monster Hunter" (https://skfb.ly/69qv6) by Raul Andrés Aguilera Rosales is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/). -->
      <a-asset-item id="monster_3" src="assets/monster_3.glb"></a-asset-item>
      
      <!-- "camping buscraft ambience" (https://skfb.ly/6V9Ru) by Edgar_koh is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/). -->
      <a-asset-item id="forest" src="assets/forest.glb"></a-asset-item>

      <!-- "Lasers / Pistolet (LASRGun)" (https://www.libertivi.com/lelabodubruiteur_124) by Joseph SARDIN is licensed under Creative Commons Attribution (https://creativecommons.org/licenses/by/3.0/deed.fr). Recorded with Tascam DR-40 and Sennheiser ME66. -->
      <audio id="blast" src="assets/blast.mp3" preload="auto"></audio>

      <!-- "Bips horaires 3" (https://lasonotheque.org/bips-horaires-3_s1629.html) by Joseph SARDIN is a series of time signal beeps. Duration: 00:04, Category UCS: Bips / General (BEEP), Type: Sound Only, Mode: Monophonic, Conditions: Computing, Realism: Sound Effects, Sampling Rate: 48,000 Hz, Resolution: 24 Bits. -->
      <audio id="ready" src="assets/ready.mp3" preload="auto"></audio>
      <audio id="go" src="assets/go.mp3" preload="auto"></audio>

      <!-- "Les Champs Etoilés" (https://soundcloud.com/karol-piczak) by Karol Piczak is licensed under Creative Commons Attribution (https://creativecommons.org/licenses/by/3.0/deed.fr). -->
      <audio id="music" src="assets/music.mp3" preload="auto"></audio>

      <!-- "Whoosh 6" (https://lasonotheque.org/whoosh-6_s1799.html) by Joseph SARDIN is a swoosh sound effect. Duration: 00:01, Category UCS: Swooshes / Swish (SWSH), Type: Sound Only, Mode: Stereophonic, Mic Arrangement: ORTF, Conditions: Studio, Realism: Real, Sampling Rate: 48,000 Hz, Resolution: 24 Bits, Equipment: SoundDevices MixPre-3 recorder and Rode NT5 microphones. -->
      <audio id="whoosh" src="assets/whoosh.mp3" preload="auto"></audio>

    </a-assets>

    <template v-if="allAssetsLoaded">
      <a-entity class="ready-1" sound="src: #ready"></a-entity>
      <a-entity class="ready-2" sound="src: #ready"></a-entity>
      <a-entity class="go" sound="src: #go"></a-entity>
      <a-entity class="music" sound="src: #music"></a-entity>

      <TheMesh />
      <TheBullet />
      <TheGuns @update-score="handleScoreUpdate" @start-level="start" />
      <TheTargetHandler v-if="gameHasStarted" :level="level" />
      <TheRoom />

      <a-text
        v-if="gameHasStarted"
        :value="`Score : ${score}`"
        position="0 3.7 -6"
        text="align: center;"
      ></a-text>

      <a-text
        v-if="gameHasStarted"
        :value="`Time : ${time}`"
        position="0 4 -6"
        text="align: center;"
      ></a-text>

      <a-text
      v-if="countDownIsVisible"
      :value="countDown"
      position=" 0 2 -2">

      </a-text>

      <TheStartScreen v-if="!gameHasStarted && !finishScreen && !countDownIsVisible" />
      <TheFinishScreen v-if="!gameHasStarted && finishScreen && !countDownIsVisible" :score="score" />
    </template>

    <TheCameraRig />
  </a-scene>
</template>
