// src/ThreeDMan.js
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Avatar = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const light = new THREE.AmbientLight(0x404040, 2);
    scene.add(light);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5).normalize();
    scene.add(directionalLight);

    // Geometry for the 3D man (Basic body structure)
    const createBodyPart = (geometry, material, position, scale) => {
      const part = new THREE.Mesh(geometry, material);
      part.position.set(position.x, position.y, position.z);
      part.scale.set(scale.x, scale.y, scale.z);
      return part;
    };

    const bodyMaterial = new THREE.MeshStandardMaterial({ color: 0x3b3b3b });

    // Head (sphere)
    const head = createBodyPart(new THREE.SphereGeometry(0.5, 32, 32), bodyMaterial, { x: 0, y: 2, z: 0 }, { x: 1, y: 1, z: 1 });

    // Body (cylinder)
    const body = createBodyPart(new THREE.CylinderGeometry(0.5, 0.5, 2, 32), bodyMaterial, { x: 0, y: 0, z: 0 }, { x: 1, y: 2, z: 1 });

    // Arms (cylinders)
    const armMaterial = new THREE.MeshStandardMaterial({ color: 0x2d2d2d });
    const leftArm = createBodyPart(new THREE.CylinderGeometry(0.2, 0.2, 1.5, 32), armMaterial, { x: -1, y: 1, z: 0 }, { x: 1, y: 3, z: 1 });
    const rightArm = createBodyPart(new THREE.CylinderGeometry(0.2, 0.2, 1.5, 32), armMaterial, { x: 1, y: 1, z: 0 }, { x: 1, y: 3, z: 1 });

    // Legs (cylinders)
    const leftLeg = createBodyPart(new THREE.CylinderGeometry(0.3, 0.3, 2, 32), bodyMaterial, { x: -0.5, y: -2, z: 0 }, { x: 1, y: 2, z: 1 });
    const rightLeg = createBodyPart(new THREE.CylinderGeometry(0.3, 0.3, 2, 32), bodyMaterial, { x: 0.5, y: -2, z: 0 }, { x: 1, y: 2, z: 1 });

    // Adding all parts to the scene
    scene.add(head);
    scene.add(body);
    scene.add(leftArm);
    scene.add(rightArm);
    scene.add(leftLeg);
    scene.add(rightLeg);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the model for basic animation
      head.rotation.x += 0.01;
      body.rotation.y += 0.01;
      leftArm.rotation.z += 0.01;
      rightArm.rotation.z += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      // Clean up the scene when the component is unmounted
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{ width: '100%', height: '500px' }}
    />
  );
};

export default Avatar;
