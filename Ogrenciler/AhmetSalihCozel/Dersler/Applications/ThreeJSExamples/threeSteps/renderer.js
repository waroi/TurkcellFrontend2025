import * as THREE from '../node_modules/three/build/three.module.js';
import { camera } from './camera.js';

// Canvas container element'ini seç
const container = document.getElementById('canvas-container');

// WebGLRenderer oluştur
const renderer = new THREE.WebGLRenderer();
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.shadowMap.enabled = true;  // Gölge haritalarını etkinleştir
renderer.shadowMap.type = THREE.PCFSoftShadowMap;  // Yumuşak gölgeler

container.appendChild(renderer.domElement);

// Ekran boyutunu değiştirdiğinde sahneyi yeniden boyutlandırma
window.addEventListener('resize', () => {
    renderer.setSize(container.clientWidth, container.clientHeight);
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
});

export { renderer };
