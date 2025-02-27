// 1. Initialize Three.js scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 2. Load 360 image
const texture = new THREE.TextureLoader().load('360-image.jpg');
const geometry = new THREE.SphereGeometry(500, 60, 40);
const material = new THREE.MeshBasicMaterial({
    map: texture,
    side: THREE.BackSide
});
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

// 3. Add basic controls
let isDragging = false;
document.addEventListener('mousedown', () => isDragging = true);
document.addEventListener('mouseup', () => isDragging = false);
document.addEventListener('mousemove', (e) => {
    if(isDragging) sphere.rotation.y += e.movementX * 0.005;
});

// 4. Animation loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
