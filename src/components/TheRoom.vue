<template>
  <a-entity>
    <a-entity
      gltf-model="#wall"
      scale="0.3 0.25 0.3"
      position="0.9 0 -2"
      target="healthPoints: 1; static:true"
    ></a-entity>
    <a-entity
      gltf-model="#wall"
      scale="0.3 0.25 0.3"
      position="-0.9 0 -2"
      target="healthPoints: 1; static:true"
    ></a-entity>
  </a-entity>

  <a-entity rotation="0 90 0" position="0.05 0 -0.3">
    <a-entity
      gltf-model="#wall"
      scale="0.3 0.25 0.3"
      position="0.9 0 -2"
    ></a-entity>
    <a-entity
      gltf-model="#wall"
      scale="0.3 0.25 0.3"
      position="-0.9 0 -2"
    ></a-entity>
  </a-entity>

  <a-entity rotation="0 -90 0" position="-0.08 0 -0.2">
    <a-entity
      gltf-model="#wall"
      scale="0.3 0.25 0.3"
      position="0.9 0 -2"
    ></a-entity>
    <a-entity
      gltf-model="#wall"
      scale="0.3 0.25 0.3"
      position="-0.9 0 -2"
    ></a-entity>
  </a-entity>

  <a-entity rotation="0 180 0" position="0 0 -0.5">
    <a-entity
      gltf-model="#wall"
      scale="0.3 0.25 0.3"
      position="0.9 0 -2"
    ></a-entity>
    <a-entity
      gltf-model="#wall"
      scale="0.3 0.25 0.3"
      position="-0.9 0 -2"
    ></a-entity>
  </a-entity>

  <a-entity gltf-model="#forest" scale="2 2 2" position="0 0 0"></a-entity>

  <a-sky color="#87CEEB"></a-sky>
</template>
