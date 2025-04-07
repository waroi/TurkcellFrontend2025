import * as THREE from '../node_modules/three/build/three.module.js';
import { scene } from './scene.js';

// Küp geometrisi
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshPhongMaterial({ color: "white" });

const cube = new THREE.Mesh(geometry, material);
cube.position.y = 0.5;  // Küpün yukarıda durması için pozisyonunu ayarladık
scene.add(cube);

// Zemin geometrisi
const planeGeometry = new THREE.PlaneGeometry(500, 500);  // Büyük bir zemin
const planeMaterial = new THREE.ShadowMaterial({ opacity: 0.5 });  // Gölge materyali
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = - Math.PI / 2;  // Zemini yatay hale getirmek için döndürüyoruz
plane.position.y = -0.5;  // Zemini küpün altına yerleştiriyoruz
scene.add(plane);



export { cube };
