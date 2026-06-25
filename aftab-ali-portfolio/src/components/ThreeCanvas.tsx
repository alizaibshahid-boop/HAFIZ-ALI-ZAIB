import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeCanvasProps {
  currentSection: string;
}

export default function ThreeCanvas({ currentSection }: ThreeCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  
  // Refs for animated objects
  const gridFloorRef = useRef<THREE.GridHelper | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  
  // Custom interactive objects
  const oilTankGroupRef = useRef<THREE.Group | null>(null);
  const cargoGroupRef = useRef<THREE.Group | null>(null);
  const networkGroupRef = useRef<THREE.Group | null>(null);

  // Mouse tracking for parallax
  const mouse = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    // 1. Scene Setup
    const scene = new THREE.Scene();
    scene.background = null; // Transparent to blend with CSS backgrounds
    scene.fog = new THREE.FogExp2(0x020617, 0.015);
    sceneRef.current = scene;

    // 2. Camera Setup
    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.set(0, 5, 20);
    cameraRef.current = camera;

    // 3. Renderer Setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 4. Lights Setup
    const ambientLight = new THREE.AmbientLight(0x0e1b2f, 1.5);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x00f0ff, 2);
    dirLight1.position.set(10, 15, 10);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x3b82f6, 1.5);
    dirLight2.position.set(-10, -5, -10);
    scene.add(dirLight2);

    const pointLight = new THREE.PointLight(0x00ffff, 4, 30);
    pointLight.position.set(0, 2, 5);
    scene.add(pointLight);

    // 5. Grid Floor (Operations Coordinate Matrix)
    const gridHelper = new THREE.GridHelper(80, 40, 0x00f0ff, 0x1e293b);
    gridHelper.position.y = -6;
    scene.add(gridHelper);
    gridFloorRef.current = gridHelper;

    // 6. Data Stream Particles
    const particleCount = 400;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const velocities: number[] = [];

    for (let i = 0; i < particleCount; i++) {
      // Create streams of data
      positions[i * 3] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30 + 5;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 60;

      // Holographic gradient colors (Cyan to Navy Blue)
      colors[i * 3] = 0.0; // R
      colors[i * 3 + 1] = Math.random() * 0.8 + 0.2; // G
      colors[i * 3 + 2] = 1.0; // B

      // Speed along axes
      velocities.push(
        (Math.random() - 0.5) * 0.05,
        -Math.random() * 0.1 - 0.02, // Drift downward
        (Math.random() - 0.5) * 0.05
      );
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Glow particle material
    const particleMat = new THREE.PointsMaterial({
      size: 0.25,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);
    particlesRef.current = particles;

    // 7. CREATE INTERACTIVE 3D MODELS

    // Group A: HERO / GENERAL - Holographic Network (Global Operations)
    const networkGroup = new THREE.Group();
    const coreSphereGeo = new THREE.IcosahedronGeometry(3.5, 2);
    const coreSphereMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });
    const coreSphere = new THREE.Mesh(coreSphereGeo, coreSphereMat);
    networkGroup.add(coreSphere);

    // Orbiting rings
    const ringGeo1 = new THREE.RingGeometry(5, 5.1, 64);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.4,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 2;
    networkGroup.add(ring1);

    const ringGeo2 = new THREE.RingGeometry(6, 6.05, 64);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.3,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    networkGroup.add(ring2);

    // Dynamic data dots on sphere vertices
    const vertexPointsGeo = new THREE.IcosahedronGeometry(3.5, 2);
    const vertexPointsMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.15,
      transparent: true,
      opacity: 0.8,
    });
    const vertexPoints = new THREE.Points(vertexPointsGeo, vertexPointsMat);
    networkGroup.add(vertexPoints);

    networkGroup.position.set(0, 2, 0);
    scene.add(networkGroup);
    networkGroupRef.current = networkGroup;


    // Group B: PETROLEUM - 3D Oil Storage Tank with animated Dipping Tape
    const oilTankGroup = new THREE.Group();
    // Tank body (Cylinder)
    const tankCylinderGeo = new THREE.CylinderGeometry(4, 4, 6, 32, 1, true); // open-ended wireframe
    const tankCylinderMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const tankBody = new THREE.Mesh(tankCylinderGeo, tankCylinderMat);
    oilTankGroup.add(tankBody);

    // Solid inner liquid cylinder representing fill level (animated)
    const liquidGeo = new THREE.CylinderGeometry(3.9, 3.9, 4, 32);
    const liquidMat = new THREE.MeshPhongMaterial({
      color: 0x1d4ed8,
      transparent: true,
      opacity: 0.4,
      shininess: 100,
    });
    const liquid = new THREE.Mesh(liquidGeo, liquidMat);
    liquid.position.y = -1; // half-filled starting position
    oilTankGroup.add(liquid);

    // Dipping Tape / Level Meter (Moving vertical strip)
    const tapeGeo = new THREE.BoxGeometry(0.15, 7, 0.15);
    const tapeMat = new THREE.MeshBasicMaterial({
      color: 0xf59e0b, // Gold/Yellow dipping tape
      transparent: true,
      opacity: 0.8,
    });
    const dippingTape = new THREE.Mesh(tapeGeo, tapeMat);
    dippingTape.position.set(3, 0.5, 0);
    oilTankGroup.add(dippingTape);

    // Level markings on the tank wall
    for (let h = -2.5; h <= 2.5; h += 1.25) {
      const ringMarkGeo = new THREE.RingGeometry(4.05, 4.15, 32);
      const ringMarkMat = new THREE.MeshBasicMaterial({
        color: 0x10b981,
        transparent: true,
        opacity: 0.6,
        side: THREE.DoubleSide
      });
      const mark = new THREE.Mesh(ringMarkGeo, ringMarkMat);
      mark.rotation.x = Math.PI / 2;
      mark.position.y = h;
      oilTankGroup.add(mark);
    }

    oilTankGroup.position.set(8, 1, -5);
    scene.add(oilTankGroup);
    oilTankGroupRef.current = oilTankGroup;


    // Group C: LOGISTICS / FMCG - Wireframe Cargo Container/Cube
    const cargoGroup = new THREE.Group();
    const cargoBoxGeo = new THREE.BoxGeometry(5, 3, 3);
    const cargoBoxMat = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });
    const mainCargoBox = new THREE.Mesh(cargoBoxGeo, cargoBoxMat);
    cargoGroup.add(mainCargoBox);

    // Inner glowing nodes representing tracked shipments
    const shipmentGeo = new THREE.SphereGeometry(0.3, 16, 16);
    const shipmentMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff });
    
    // Add multiple packages inside the container
    const packages: THREE.Mesh[] = [];
    for (let x = -1.8; x <= 1.8; x += 1.2) {
      for (let y = -0.8; y <= 0.8; y += 0.8) {
        const pkg = new THREE.Mesh(shipmentGeo, shipmentMat);
        pkg.position.set(x, y, (Math.random() - 0.5) * 1.5);
        cargoGroup.add(pkg);
        packages.push(pkg);
      }
    }

    cargoGroup.position.set(-8, 1, -5);
    scene.add(cargoGroup);
    cargoGroupRef.current = cargoGroup;

    // 8. Event Listeners
    const handleMouseMove = (event: MouseEvent) => {
      // Map to normal coordinates (-1 to 1)
      mouse.current.targetX = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.targetY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const handleResize = () => {
      if (!containerRef.current || !rendererRef.current || !cameraRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // 9. ANIMATION LOOP
    let animationId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse parallax
      mouse.current.x += (mouse.current.targetX - mouse.current.x) * 0.05;
      mouse.current.y += (mouse.current.targetY - mouse.current.y) * 0.05;

      // Move camera subtly with mouse
      if (camera) {
        camera.position.x = mouse.current.x * 3;
        camera.position.y = 4 + mouse.current.y * 2;
        camera.lookAt(0, 1, 0);
      }

      // Rotate network core
      if (networkGroup) {
        networkGroup.rotation.y = elapsedTime * 0.15;
        networkGroup.rotation.x = elapsedTime * 0.08;
        ring1.rotation.z = -elapsedTime * 0.3;
        ring2.rotation.z = elapsedTime * 0.2;
      }

      // Animate Oil Tank elements (dipping tape goes up & down, liquid fluctuates)
      if (oilTankGroup) {
        oilTankGroup.rotation.y = elapsedTime * 0.1;
        
        // Dipping level moves as if measuring
        const dipOffset = Math.sin(elapsedTime * 0.8) * 1.5;
        dippingTape.position.y = 0.5 + dipOffset;
        
        // Liquid level fluctuates very subtly
        liquid.scale.y = 1 + Math.sin(elapsedTime * 0.4) * 0.05;
      }

      // Animate Cargo Box (drift and pulse packages)
      if (cargoGroup) {
        cargoGroup.rotation.y = -elapsedTime * 0.12;
        cargoGroup.rotation.x = Math.sin(elapsedTime * 0.5) * 0.1;

        packages.forEach((pkg, index) => {
          const pulse = Math.sin(elapsedTime * 2 + index) * 0.3 + 0.7;
          pkg.scale.set(pulse, pulse, pulse);
        });
      }

      // Animate particles (drift downward)
      if (particles) {
        const positionsAttr = particles.geometry.attributes.position;
        if (positionsAttr) {
          const arr = positionsAttr.array as Float32Array;
          for (let i = 0; i < particleCount; i++) {
            // Apply velocities
            arr[i * 3] += velocities[i * 3];
            arr[i * 3 + 1] += velocities[i * 3 + 1];
            arr[i * 3 + 2] += velocities[i * 3 + 2];

            // If a particle falls below floor level, recycle to top
            if (arr[i * 3 + 1] < -6) {
              arr[i * 3] = (Math.random() - 0.5) * 60;
              arr[i * 3 + 1] = 20;
              arr[i * 3 + 2] = (Math.random() - 0.5) * 60;
            }
          }
          positionsAttr.needsUpdate = true;
        }
      }

      // 10. SECTION-SPECIFIC CAMERA MOTIONS & LAYOUT TRANSITIONS
      // We morph/shift positions depending on which section is active!
      if (networkGroup && oilTankGroup && cargoGroup && gridHelper) {
        if (currentSection === 'hero') {
          // Center the central network globe, spread out other assets
          networkGroup.position.set(0, 2, 0);
          networkGroup.scale.set(1, 1, 1);
          oilTankGroup.position.set(12, 1, -8);
          cargoGroup.position.set(-12, 1, -8);
        } else if (currentSection === 'about') {
          // Bring the medical and welfare records assets (Cargo/Database cubes) closer
          networkGroup.position.set(-10, 3, -5);
          oilTankGroup.position.set(12, 1, -12);
          cargoGroup.position.set(4, 2, 2);
          cargoGroup.scale.set(1.2, 1.2, 1.2);
        } else if (currentSection === 'skills') {
          // Show interactive network database grid in center, representing high analytics skills
          networkGroup.position.set(0, 3.5, -2);
          networkGroup.scale.set(1.4, 1.4, 1.4);
          oilTankGroup.position.set(-10, 0, -10);
          cargoGroup.position.set(10, 0, -10);
        } else if (currentSection === 'experience') {
          // Bring petroleum storage tank and logistics cargo boxes forward to emphasize career
          networkGroup.position.set(-12, 2, -10);
          oilTankGroup.position.set(-4, 2.5, 3); // front and center-left
          oilTankGroup.scale.set(1.1, 1.1, 1.1);
          cargoGroup.position.set(4, 2.5, 3); // front and center-right
          cargoGroup.scale.set(1.1, 1.1, 1.1);
        } else if (currentSection === 'education' || currentSection === 'certifications') {
          // Fly back to see global overview
          networkGroup.position.set(0, 4, -8);
          oilTankGroup.position.set(14, -1, -10);
          cargoGroup.position.set(-14, -1, -10);
        } else if (currentSection === 'contact') {
          // Intense spotlight focus, converge everything into one centralized glowing pipeline
          networkGroup.position.set(0, 1.5, 2);
          networkGroup.scale.set(0.6, 0.6, 0.6);
          oilTankGroup.position.set(8, -1, -5);
          cargoGroup.position.set(-8, -1, -5);
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (rendererRef.current && containerRef.current) {
        try {
          containerRef.current.removeChild(rendererRef.current.domElement);
        } catch (e) {
          // Ignore
        }
      }
    };
  }, [currentSection]);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
      style={{ mixBlending: 'screen' }}
      id="3d-canvas-container"
    />
  );
}
