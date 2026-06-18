'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

function Particles({ count = 200 }: { count?: number }) {
  const mesh = useRef<THREE.Points>(null);
  const { mouse } = useThree();

  const [positions, colors, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const sz = new Float32Array(count);

    const blue = new THREE.Color('#00BFFF');
    const orange = new THREE.Color('#FF6A00');
    const dimWhite = new THREE.Color('#666666');

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 22;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12;

      const r = Math.random();
      const c = r < 0.3 ? blue : r < 0.5 ? orange : dimWhite;
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;

      sz[i] = Math.random() * 0.025 + 0.008;
    }

    return [pos, col, sz];
  }, [count]);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
    }),
    []
  );

  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.getElapsedTime();
    uniforms.uTime.value = t;
    uniforms.uMouse.value.set(mouse.x, mouse.y);
    mesh.current.rotation.y = t * 0.015;
    mesh.current.rotation.x = Math.sin(t * 0.01) * 0.03;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
        <bufferAttribute attach="attributes-size" count={count} array={sizes} itemSize={1} />
      </bufferGeometry>
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={`
          attribute float size;
          uniform float uTime;
          uniform vec2 uMouse;
          varying vec3 vColor;
          void main() {
            vColor = color;
            vec3 pos = position;
            pos.y += sin(uTime * 0.2 + position.x * 0.4) * 0.1;
            pos.x += cos(uTime * 0.15 + position.y * 0.3) * 0.08;
            pos.z += sin(uTime * 0.18 + position.z * 0.3) * 0.06;
            pos.x += uMouse.x * 0.2;
            pos.y += uMouse.y * 0.15;
            vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
            gl_PointSize = size * 280.0 / -mvPosition.z;
            gl_Position = projectionMatrix * mvPosition;
          }
        `}
        fragmentShader={`
          varying vec3 vColor;
          void main() {
            float d = length(gl_PointCoord - vec2(0.5));
            if (d > 0.5) discard;
            float alpha = smoothstep(0.5, 0.15, d);
            gl_FragColor = vec4(vColor, alpha * 0.5);
          }
        `}
        transparent
        vertexColors
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function ThreeParticleField() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 55 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: false }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.05} />
        <Particles count={175} />
      </Canvas>
    </div>
  );
}
