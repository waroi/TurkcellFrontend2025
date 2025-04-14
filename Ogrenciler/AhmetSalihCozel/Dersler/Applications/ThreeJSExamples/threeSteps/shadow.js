import { cube } from "./mesh.js";
import { directionalLight } from "./light.js";
import { scene } from "./scene.js";
import * as THREE from '../node_modules/three/build/three.module.js';

directionalLight.castShadow = true;

// Objelerin gölge alabilmesini sağlamak
cube.castShadow = true;
cube.receiveShadow = true;

// Zeminin gölge alabilmesini sağlamak
const plane = scene.children.find(child => child instanceof THREE.Mesh && child.geometry instanceof THREE.PlaneGeometry);
plane.receiveShadow = true;