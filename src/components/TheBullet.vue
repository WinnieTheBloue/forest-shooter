<template>
  <!-- <a-entity
    id="bulletTemplate"
    gltf-model="#bullet"
    scale="0.001 0.001 0.001"
    bullet="name: normal; speed: 30.0; poolSize: 20"
  ></a-entity> -->
  <a-entity id="bulletTemplate" bullet="name: normal; speed: 30.0; poolSize: 20" geometry="primitive: sphere; radius: 0.02" material="shader: standard; emissive: #ff007f; emissiveIntensity: 2; metalness: 0.5; roughness: 0.2;"></a-entity>
  <!-- <a-entity light="type: ambient; color: #BBB" bullet="name: normal; speed: 30.0; poolSize: 20"></a-entity> -->
</template>
