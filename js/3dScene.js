import * as THREE from 'three';

export function init3DScene() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    
    renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
    renderer.setClearColor(0x000000, 0);
    
    const heroContainer = document.querySelector('.hero-3d');
    if (heroContainer) {
        heroContainer.appendChild(renderer.domElement);
    }

    // Create floating cube
    const geometry = new THREE.TorusKnotGeometry(1, 0.3, 100, 16);
    const material = new THREE.MeshPhongMaterial({ 
        color: 0x6ee7b7,
        shininess: 100,
        transparent: true,
        opacity: 0.9
    });
    const shape = new THREE.Mesh(geometry, material);

    // Add lights
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(2, 2, 2);
    const ambientLight = new THREE.AmbientLight(0x404040);
    
    scene.add(shape);
    scene.add(light);
    scene.add(ambientLight);

    camera.position.z = 5;

    function animate() {
        requestAnimationFrame(animate);
        shape.rotation.x += 0.01;
        shape.rotation.y += 0.01;
        renderer.render(scene, camera);
    }

    animate();

    // Handle window resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
    });
}