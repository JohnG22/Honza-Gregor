import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Scene3D = () => {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!mountRef.current) return;

        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
            powerPreference: "high-performance"
        });

        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
        mountRef.current.appendChild(renderer.domElement);

        // Create main geometric shape
        const geometry = new THREE.IcosahedronGeometry(1, 1);
        const material = new THREE.MeshPhysicalMaterial({
            color: '#2B81EB',
            metalness: 0.2,
            roughness: 0.2,
            clearcoat: 0.8,
            clearcoatRoughness: 0.2,
            transmission: 0.5,
            thickness: 0.5,
            envMapIntensity: 1
        });
        const mainSphere = new THREE.Mesh(geometry, material);
        scene.add(mainSphere);

        // Create particles
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 2000;
        const posArray = new Float32Array(particlesCount * 3);

        for (let i = 0; i < particlesCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 5;
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.005,
            color: '#4D87C0',
            transparent: true,
            opacity: 0.8
        });

        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const pointLight1 = new THREE.PointLight(0x2B81EB, 2);
        pointLight1.position.set(2, 3, 4);
        scene.add(pointLight1);

        const pointLight2 = new THREE.PointLight(0x4D87C0, 2);
        pointLight2.position.set(-2, -3, -4);
        scene.add(pointLight2);

        // Position camera
        camera.position.z = 2.5;

        // Mouse movement effect
        let mouseX = 0;
        let mouseY = 0;
        let targetX = 0;
        let targetY = 0;
        const windowHalfX = window.innerWidth / 2;
        const windowHalfY = window.innerHeight / 2;

        const handleMouseMove = (event: MouseEvent) => {
            mouseX = (event.clientX - windowHalfX);
            mouseY = (event.clientY - windowHalfY);
        };

        document.addEventListener('mousemove', handleMouseMove);

        // Animation
        const animate = () => {
            requestAnimationFrame(animate);

            targetX = mouseX * 0.001;
            targetY = mouseY * 0.001;

            mainSphere.rotation.y += 0.01;
            mainSphere.rotation.x += 0.005;

            mainSphere.rotation.y += (targetX - mainSphere.rotation.y) * 0.05;
            mainSphere.rotation.x += (targetY - mainSphere.rotation.x) * 0.05;

            particlesMesh.rotation.y += 0.002;
            particlesMesh.rotation.x += 0.001;

            renderer.render(scene, camera);
        };

        animate();

        // Handle window resize
        const handleResize = () => {
            if (!mountRef.current) return;

            const width = mountRef.current.clientWidth;
            const height = mountRef.current.clientHeight;

            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('mousemove', handleMouseMove);
            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }
            geometry.dispose();
            material.dispose();
            particlesGeometry.dispose();
            particlesMaterial.dispose();
        };
    }, []);

    return (
        <div
            ref={mountRef}
            className="w-full h-full min-h-[400px]"
            style={{
                background: 'transparent',
                cursor: 'move'
            }}
        />
    );
};

export default Scene3D; 