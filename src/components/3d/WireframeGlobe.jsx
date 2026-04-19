import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Globe() {
    const wireRef = useRef();
    const pointsRef = useRef();

    // Create vertices for dots on sphere surface
    const dotPositions = useMemo(() => {
        const positions = [];
        const radius = 2;
        const count = 200;

        for (let i = 0; i < count; i++) {
            const phi = Math.acos(-1 + (2 * i) / count);
            const theta = Math.sqrt(count * Math.PI) * phi;

            positions.push(
                radius * Math.cos(theta) * Math.sin(phi),
                radius * Math.sin(theta) * Math.sin(phi),
                radius * Math.cos(phi)
            );
        }
        return new Float32Array(positions);
    }, []);

    // Create arcs between random points
    const arcGeometries = useMemo(() => {
        const arcs = [];
        const radius = 2;

        for (let i = 0; i < 8; i++) {
            const points = [];
            const startPhi = Math.random() * Math.PI;
            const startTheta = Math.random() * Math.PI * 2;
            const endPhi = Math.random() * Math.PI;
            const endTheta = Math.random() * Math.PI * 2;

            for (let t = 0; t <= 20; t++) {
                const frac = t / 20;
                const phi = startPhi + (endPhi - startPhi) * frac;
                const theta = startTheta + (endTheta - startTheta) * frac;
                const r = radius + Math.sin(frac * Math.PI) * 0.3;

                points.push(
                    new THREE.Vector3(
                        r * Math.cos(theta) * Math.sin(phi),
                        r * Math.sin(theta) * Math.sin(phi),
                        r * Math.cos(phi)
                    )
                );
            }

            const curve = new THREE.CatmullRomCurve3(points);
            const geo = new THREE.BufferGeometry().setFromPoints(curve.getPoints(50));
            arcs.push(geo);
        }

        return arcs;
    }, []);

    useFrame((_, delta) => {
        if (wireRef.current) {
            wireRef.current.rotation.y += delta * 0.15;
        }
        if (pointsRef.current) {
            pointsRef.current.rotation.y += delta * 0.15;
        }
    });

    return (
        <group>
            {/* Wireframe sphere */}
            <mesh ref={wireRef}>
                <sphereGeometry args={[2, 24, 24]} />
                <meshBasicMaterial
                    color="#00F0FF"
                    wireframe
                    transparent
                    opacity={0.08}
                />
            </mesh>

            {/* Dot grid on sphere */}
            <points ref={pointsRef}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={dotPositions.length / 3}
                        array={dotPositions}
                        itemSize={3}
                    />
                </bufferGeometry>
                <pointsMaterial
                    color="#00F0FF"
                    size={0.04}
                    transparent
                    opacity={0.6}
                    sizeAttenuation
                />
            </points>

            {/* Arcs */}
            {arcGeometries.map((geo, i) => (
                <line key={i} geometry={geo} ref={(el) => {
                    if (el) el.rotation.y = wireRef.current?.rotation.y || 0;
                }}>
                    <lineBasicMaterial
                        color={i % 2 === 0 ? '#00F0FF' : '#7000FF'}
                        transparent
                        opacity={0.25}
                    />
                </line>
            ))}

            {/* Outer ring */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <ringGeometry args={[2.3, 2.35, 64]} />
                <meshBasicMaterial
                    color="#7000FF"
                    transparent
                    opacity={0.2}
                    side={THREE.DoubleSide}
                />
            </mesh>

            {/* Another ring at angle */}
            <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
                <ringGeometry args={[2.5, 2.53, 64]} />
                <meshBasicMaterial
                    color="#00F0FF"
                    transparent
                    opacity={0.1}
                    side={THREE.DoubleSide}
                />
            </mesh>
        </group>
    );
}

export default function WireframeGlobe() {
    return (
        <div className="absolute inset-0 opacity-60 pointer-events-none">
            <Canvas
                camera={{ position: [0, 0, 6], fov: 40 }}
                dpr={[1, 1.5]}
                gl={{ antialias: true, alpha: true }}
                style={{ background: 'transparent' }}
            >
                <Suspense fallback={null}>
                    <ambientLight intensity={0.1} />
                    <Globe />
                </Suspense>
            </Canvas>
        </div>
    );
}
