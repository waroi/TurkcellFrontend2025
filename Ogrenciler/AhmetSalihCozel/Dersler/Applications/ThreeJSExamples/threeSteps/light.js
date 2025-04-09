import * as THREE from '../node_modules/three/build/three.module.js';
import { scene } from './scene.js';

// Ambient Light (Genel aydınlatma)
const ambientLight = new THREE.AmbientLight("red", 1);
scene.add(ambientLight);

const inputX = document.getElementById("lightX")
const inputY = document.getElementById("lightY")
const inputZ = document.getElementById("lightZ")

const lightCalcButton = document.getElementById("lightCalc")

lightCalcButton.addEventListener("click", () => {
    console.log(inputX.value, inputY.value, inputZ.value)
    
    directionalLight.position.set(
        Number(inputX.value), 
        Number(inputY.value), 
        Number(inputZ.value)
    );
})


// Directional Light (Yönlü ışık)
const directionalLight = new THREE.DirectionalLight("blue", 1);
directionalLight.intensity = 5;
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

// Directional light için yardımcı göstergeler
const lightHelper = new THREE.DirectionalLightHelper(directionalLight, 5);
scene.add(lightHelper);

// light.js içinde export
export { ambientLight, directionalLight };
