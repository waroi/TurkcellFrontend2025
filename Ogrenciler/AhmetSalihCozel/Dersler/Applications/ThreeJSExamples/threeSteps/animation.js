import { cube } from "./mesh.js";
import { scene } from "./scene.js";
import { camera } from "./camera.js";
import { renderer } from "./renderer.js";

function animate() {
    cube.rotation.x += 0;
    cube.rotation.y += 0.01;
    
  }

  // Sahneyi render etme ve animasyonu başlatma
function animateScene() {
    requestAnimationFrame(animateScene);  // Animasyon döngüsünü başlat
    renderer.render(scene, camera);  // Sahneyi render et
    animate();  // Animasyonları çalıştır
  }
  
  animateScene();