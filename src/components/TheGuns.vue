<script setup>
import { defineEmits } from "vue";

/**
 * Emits events to the parent component.
 */
const emits = defineEmits(["update-score", "start-level"]);

/**
 * Registers the 'click-to-shoot' component to enable shooting interactions on click events.
 * This component listens for mouse down events on the entire document body
 * and emits a 'shoot' event while also playing a shooting sound.
 */
AFRAME.registerComponent("click-to-shoot", {
  /**
   * Component initialization.
   */
  init: function () {
    document.body.addEventListener("mousedown", () => {
      this.el.emit("shoot");
      document.getElementById("soundShoot").components.sound.playSound();
    });
  },
});

/**
 * Registers the 'right-shoot' component for shooting interactions using the right hand controller.
 * It listens for 'triggerdown' events on the right hand controller
 * and emits a 'shoot' event while playing a shooting sound.
 */
AFRAME.registerComponent("right-shoot", {
  /**
   * Component initialization.
   */
  init: function () {
    const hand = document.getElementById("rightHand");

    hand.addEventListener("triggerdown", (event) => {
      this.el.emit("shoot");
      document.getElementById("soundShoot").components.sound.playSound();
    });
  },
});

/**
 * Registers the 'left-shoot' component for shooting interactions using the left hand controller.
 * It listens for 'triggerdown' events on the left hand controller
 * and emits a 'shoot' event while playing a shooting sound.
 */
AFRAME.registerComponent("left-shoot", {
  /**
   * Component initialization.
   */
  init: function () {
    const hand = document.getElementById("leftHand");

    hand.addEventListener("triggerdown", (event) => {
      this.el.emit("shoot");
      document.getElementById("soundShoot").components.sound.playSound();
    });
  },
});

/**
 * Registers the 'hit-handler' component to manage the behavior of hit targets.
 * Upon receiving a 'die' event, it updates the game score, plays a death sound,
 * and makes the entity invisible.
 */
AFRAME.registerComponent("hit-handler", {
  /**
   * Component initialization.
   */
  init: function () {
    const el = this.el;

    el.addEventListener("die", function () {
      emits("update-score");
      document.getElementById("die").components.sound.playSound();
      el.setAttribute("visible", false);
    });
  },
});

/**
 * Registers the 'start' component to handle the initiation of game levels based on difficulty.
 * It listens for 'hit' events on entities and starts a level with a timeout
 * determined by the entity's class (easy, normal, hard).
 */
AFRAME.registerComponent("start", {
  /**
   * Component initialization.
   */
  init: function () {
    const el = this.el;

    el.addEventListener("hit", function () {
      const cl = el.className;
      if (cl === "easy") {
        emits("start-level", 3000);
      } else if (cl === "normal") {
        emits("start-level", 2000);
      } else if (cl === "hard") {
        emits("start-level", 1000);
      }
    });
  },
});
</script>
<template>
  <a-entity id="die" sound="src: #whoosh; poolSize: 10; volume: 8"> </a-entity>
  <a-entity
    id="soundShoot"
    sound="src: #blast; poolSize: 10; volume: 0.6"
  ></a-entity>
  <a-entity
    id="rightHand"
    hand-controls="hand: right; handModelStyle: lowPoly; color: #ffcccc"
  >
    <a-entity
      gltf-model="#gun"
      position="0 -0.13 -0.05"
      rotation="-90 0 0"
      scale="0.05 0.05 0.05"
      right-shoot
      shooter
    ></a-entity>
  </a-entity>
  <a-entity
    id="leftHand"
    hand-controls="hand: left; handModelStyle: lowPoly; color: #ffcccc"
  >
    <a-entity
      gltf-model="#gun"
      position="0 -0.13 -0.05"
      rotation="-90 0 0"
      scale="0.05 0.05 0.05"
      left-shoot
      shooter
    >
    </a-entity>
  </a-entity>

  <a-entity
    id="head"
    look-controls="pointerLockEnabled: true"
    simple-navmesh-constraint="navmesh: [data-role='nav-mesh']; height: 1.65;"
    disable-in-vr="component: simple-navmesh-constraint;"
    camera
    position="0 1.65 0"
  >
    <a-entity
      id="gun"
      gltf-model="#gun"
      scale="0.05 0.05 0.05"
      position="0 -0.5 -0.5"
      rotation="0 0 0"
      shooter
      click-to-shoot
    >
    </a-entity>
  </a-entity>
</template>
