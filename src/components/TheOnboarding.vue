<script setup>
import { ref } from "vue";

defineProps({
  loaded: Boolean,
});

const showOnboarding = ref(true);

function enterScene() {
  showOnboarding.value = false;
  if (
    AFRAME.utils.device.checkHeadsetConnected() &&
    !AFRAME.utils.device.isMobile()
  ) {
    document.querySelector("a-scene").enterVR();
  }
}
</script>

<template>
  <div id="onboarding" v-if="showOnboarding">
    <div>
      <h1>🌲 Forest Shooter</h1>
      <p v-if="!loaded">loading...</p>
      <button v-if="loaded" @click="enterScene()">Enter scene</button>
      <div class="licences">
        <section>
          <h4>Movement modes support</h4>
          <ul>
            <li>
              <strong>Desktop</strong> - Move your mouse to look around + Click
              the left mouse button to shoot at the monsters
            </li>
            <li>
              <strong>VR/AR</strong> - Look around by moving your head + You have two pistols in your hands. Use the triggers on your VR controllers to shoot at the monsters
            </li>
            
          </ul>
        </section>
        <dl>
          <dt>
            <i>Included</i>
          </dt>
          <dt>
            <a href="https://github.com/c-frame/aframe-extras" target="_blank"
              >aframe-extras controls and animation-mixer</a
            >
          </dt>
          <dd>
            <a
              href="https://github.com/c-frame/aframe-extras/blob/master/LICENSE"
              target="_blank"
              >MIT License</a
            >
          </dd>

          <dt>
            <a href="https://github.com/c-frame/physx" target="_blank"
              >aframe physx</a
            >
          </dt>
          <dd>
            <a
              href="https://github.com/c-frame/aframe-extras/blob/master/LICENSE"
              target="_blank"
              >MIT License</a
            >
          </dd>

          <dt>
            <a
              href="https://github.com/jure/aframe-blink-controls/"
              target="_blank"
              >aframe-blink-controls</a
            >
          </dt>
          <dd>
            <a
              href="https://github.com/jure/aframe-blink-controls/blob/main/LICENSE"
              target="_blank"
              >MIT License</a
            >
          </dd>

          <dt>
            <a
              href="https://github.com/diarmidmackenzie/aframe-multi-camera/"
              target="_blank"
              >aframe-multi-camera</a
            >
          </dt>
          <dd>
            <a
              href="https://github.com/diarmidmackenzie/aframe-multi-camera/blob/main/LICENSE"
              target="_blank"
              >MIT License</a
            >
          </dd>

          <dt>
            <a
              href=" https://github.com/AdaRoseCannon/aframe-xr-boilerplate"
              target="_blank"
              >simple-navmesh-constraint</a
            >
          </dt>
          <dd>By Ada Rose Cannon under MIT License</dd>

          <dt>
            <a href="https://skfb.ly/DHNN" target="_blank"
              >SciFi Gun by MrFetch</a
            >
          </dt>
          <dd>
            Licensed under
            <a
              href="http://creativecommons.org/licenses/by/4.0/"
              target="_blank"
              >CC BY 4.0</a
            >
          </dd>

          <dt>
            <a href="https://skfb.ly/69JQZ" target="_blank"
              >Medieval asset02/wall by hamsterspit</a
            >
          </dt>
          <dd>
            Licensed under
            <a
              href="http://creativecommons.org/licenses/by/4.0/"
              target="_blank"
              >CC BY 4.0</a
            >
          </dd>

          <dt>
            <a href="https://skfb.ly/oruOv" target="_blank"
              >Monster by Matthew Slater</a
            >
          </dt>
          <dd>
            Licensed under
            <a
              href="http://creativecommons.org/licenses/by/4.0/"
              target="_blank"
              >CC BY 4.0</a
            >
          </dd>

          <dt>
            <a href="https://skfb.ly/69qv6" target="_blank"
              >Monster Hunter by Raul Andrés Aguilera Rosales</a
            >
          </dt>
          <dd>
            Licensed under
            <a
              href="http://creativecommons.org/licenses/by/4.0/"
              target="_blank"
              >CC BY 4.0</a
            >
          </dd>

          <dt>
            <a href="https://skfb.ly/6V9Ru" target="_blank"
              >Camping buscraft ambience by Edgar_koh</a
            >
          </dt>
          <dd>
            Licensed under
            <a
              href="http://creativecommons.org/licenses/by/4.0/"
              target="_blank"
              >CC BY 4.0</a
            >
          </dd>

          <dt>
            <a
              href="https://www.libertivi.com/lelabodubruiteur_124"
              target="_blank"
              >Lasers / Pistolet (LASRGun) by Joseph SARDIN</a
            >
          </dt>
          <dd>
            Licensed under
            <a
              href="https://creativecommons.org/licenses/by/3.0/deed.fr"
              target="_blank"
              >CC BY 3.0</a
            >
          </dd>

          <dt>
            <a href="https://soundcloud.com/karol-piczak" target="_blank"
              >Les Champs Etoilés by Karol Piczak</a
            >
          </dt>
          <dd>
            Licensed under
            <a
              href="https://creativecommons.org/licenses/by/3.0/deed.fr"
              target="_blank"
              >CC BY 3.0</a
            >
          </dd>

          <dt>
            <a
              href="https://lasonotheque.org/bips-horaires-3_s1629.html"
              target="_blank"
              >Bips horaires 3 by Joseph SARDIN</a
            >
          </dt>
          <dd>
            Licensed under
            <a
              href="https://creativecommons.org/licenses/by/3.0/deed.fr"
              target="_blank"
              >CC BY 3.0</a
            >
            >
          </dd>

          <dt>
            <a
              href="https://lasonotheque.org/whoosh-6_s1799.html"
              target="_blank"
              >Whoosh 6 by Joseph SARDIN</a
            >
          </dt>
          <dd>
            Licensed under
            <a
              href="https://creativecommons.org/licenses/by/3.0/deed.fr"
              target="_blank"
              >CC BY 3.0</a
            >
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-size: 1.5rem;
}
a {
  color: #eee;
  text-decoration: none;
}
.licences {
  margin: 2rem 0;
  padding-bottom: 1rem;
  font-size: 1rem;
  text-align: left;
}
.licences dt {
  padding-top: 0.75rem;
  font-size: 0.9rem;
  font-weight: bold;
}
.licences dd {
  margin-left: 0;
  font-size: 0.8rem;
}

#onboarding {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #333;
  color: #ccc;
  width: 100vw;
  height: 100vh;
  padding: 1rem;
  font-family: monospace;
  z-index: 10000;
  overflow: auto;
}
#onboarding > * {
  margin: 0 auto;
  max-width: 50rem;
  width: calc(100vw - 10rem);
  text-align: center;
  border-radius: 0.3rem;
  padding: 1rem;
  font-size: 1.3rem;
}
#onboarding button {
  font-size: 1.3rem;
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  background-color: white;
  color: black;
  border: none;
  cursor: pointer;
}
</style>
#onboarding li { #onboarding li { font-size: 1rem; text-align: left; }
