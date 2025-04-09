import * as THREE from '../node_modules/three/build/three.module.js';

const container = document.getElementById('canvas-container');

const camera = new THREE.PerspectiveCamera(
  100,
  container.clientWidth / container.clientHeight,
  0.1, 
  1000 
);

camera.position.z = 5;

export { camera };
