<script setup>
import { ref } from "vue";
import { defineEmits } from "vue";

const emits = defineEmits(["update-score", "start-level"]);

AFRAME.registerComponent("click-to-shoot", {
  init: function () {
    document.body.addEventListener("mousedown", () => {
      this.el.emit("shoot");
      document.getElementById("soundShoot").components.sound.playSound();
    });
  },
});

AFRAME.registerComponent("right-shoot", {
  init: function () {
    const hand = document.getElementById("rightHand");

    hand.addEventListener("triggerdown", (event) => {
      this.el.emit("shoot");
      document.getElementById("soundShoot").components.sound.playSound();
    });
  },
});

AFRAME.registerComponent("left-shoot", {
  init: function () {
    const hand = document.getElementById("leftHand");

    hand.addEventListener("triggerdown", (event) => {
      this.el.emit("shoot");
      document.getElementById("soundShoot").components.sound.playSound();
    });
  },
});

AFRAME.registerComponent("hit-handler", {
  init: function () {
    const el = this.el;
    const boom = document.querySelector(".boom");

    el.addEventListener("die", function () {
      boom.components.sound.playSound();
      emits("update-score");
      el.setAttribute("visible", false);
    });
  },
});

AFRAME.registerComponent("start", {
  init: function () {
    const el = this.el;

    el.addEventListener("hit", function () {
      const cl = el.className;
      if (cl == "easy") {
        emits("start-level", 3000);
      } else if (cl == "normal") {
        emits("start-level", 2000);
      } else if (cl == "hard") {
        emits("start-level", 1000);
      }
    });
  },
});
</script>
<template>
  <a-entity id="soundShoot" sound="src: #blast"></a-entity>

  <a-entity class="boom" sound="src: #boom"></a-entity>
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
    <a-entity
      id="soundShootRight"
      sound="src: #blast; poolSize: 10; on: shoot; volume: 0.6"
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
    ></a-entity>
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
