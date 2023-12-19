import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const Loader = () => {
  useEffect(() => {
    const sceneRef = useRef<HTMLDivElement>(null);
    const mouse = new THREE.Vector2();
    const raycaster = new THREE.Raycaster();
    const cubeRef = useRef<THREE.Mesh | null>(null);

    const dampingFactor = 0.1; // Adjust the damping factor as needed
    let targetPosition = new THREE.Vector3();

    const initLoaderAnimation = () => {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        100,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      const renderer = new THREE.WebGLRenderer();

      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.shadowMap.enabled = true;
      sceneRef.current?.appendChild(renderer.domElement);

      // draw cube
      const geometryCube = new THREE.BoxGeometry();
      const materialCube = [
        new THREE.MeshStandardMaterial({ color: 0xff0000 }), // Right side (red)
        new THREE.MeshStandardMaterial({ color: 0x00ff00 }), // Left side (green)
        new THREE.MeshStandardMaterial({ color: 0x0000ff }), // Top side (blue)
        new THREE.MeshStandardMaterial({ color: 0xffff00 }), // Bottom side (yellow)
        new THREE.MeshStandardMaterial({ color: 0xff00ff }), // Front side (magenta)
        new THREE.MeshStandardMaterial({ color: 0x00ffff }), // Back side (cyan)
      ];
      const cube = new THREE.Mesh(geometryCube, materialCube);
      cube.castShadow = true;
      scene.add(cube);

      // draw edge for cube
      const edges = new THREE.EdgesGeometry(geometryCube);
      const edgesMaterial = new THREE.LineBasicMaterial({});
      const line = new THREE.LineSegments(edges, edgesMaterial);
      cube.add(line);

      cube.position.z = 100;

      cubeRef.current = cube;

      // draw capsule
      // const geometryCapsule = new THREE.CapsuleGeometry(1, 1, 4, 8);
      // const materialCapsule = new THREE.MeshBasicMaterial({ color: 0x00ffff });
      // const capsule = new THREE.Mesh(geometryCapsule, materialCapsule);

      // // capsule.position.z = 10;

      // scene.add(capsule);

      const geometryCircle = new THREE.CircleGeometry(5, 100);
      const materialCircle = new THREE.MeshBasicMaterial({ color: 0x000010 });
      const circle = new THREE.Mesh(geometryCircle, materialCircle);

      // circle.rotation.z = 10;

      scene.add(circle);

      camera.position.z = 10;
      // camera.rotation.y = 5;
      // camera.position.y = 5;

      // const handleMouseMove = (event: MouseEvent) => {
      //   // Calculate normalized device coordinates
      //   mouse.x = (event.clientX / window.innerWidth) * 1.5 - 1;
      //   mouse.y = -(event.clientY / window.innerHeight) * 1.5 + 1;

      //   // Update raycaster
      //   raycaster.setFromCamera(mouse, camera);

      //   // Intersect with objects
      //   const intersects = raycaster.intersectObjects([cube]);

      //   if (intersects.length > 0) {
      //     // Move the cube to the intersection point
      //     const intersection = intersects[0];
      //     const { x, y, z } = intersection.point;
      //     cube.position.set(x, y, 5);
      //   }
      // };

      // window.addEventListener("mousemove", handleMouseMove, false);

      // Add ambient light
      const ambientLight = new THREE.AmbientLight(0xffffff); // soft white light
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(50, 50, 50);
      directionalLight.castShadow = true; // Enable shadow casting
      scene.add(directionalLight);

      directionalLight.shadow.mapSize.width = 1024;
      directionalLight.shadow.mapSize.height = 1024;
      directionalLight.shadow.camera.near = 0.5;
      directionalLight.shadow.camera.far = 500;

      const animate = () => {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        cube.rotation.z += 0.01;

        const time = Date.now() * 0.001;
        cube.position.z = Math.abs(Math.sin(time) * 8);
        // cube.position.z = Math.sin(time) * 8;

        //   cube.scale.x = Math.sin(Date.now() * 0.001) + 0.1;
        //   cube.scale.y = Math.cos(Date.now() * 0.001) + 0.1;
        //   cube.scale.z = Math.sin(Date.now() * 0.001) + 1;

        cube.position.lerp(targetPosition, dampingFactor);

        renderer.shadowMap.needsUpdate = true;

        renderer.render(scene, camera);
      };

      animate();
    };
  }, []);
  return <div>Loader</div>;
};

export default Loader;
