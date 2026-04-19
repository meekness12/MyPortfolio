import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Html } from '@react-three/drei';
import * as THREE from 'three';

function SkillNode({ position, label, color, index }) {
    const meshRef = useRef();

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.scale.setScalar(
                1 + Math.sin(state.clock.elapsedTime * 2 + index) * 0.15
            );
        }
    });

    return (
        <Float speed={1.5} rotationIntensity={0} floatIntensity={0.5}>
            <group position={position}>
                {/* Glowing node */}
                <mesh ref={meshRef}>
                    <sphereGeometry args={[0.15, 16, 16]} />
                    <meshBasicMaterial color={color} transparent opacity={0.9} />
                </mesh>

                {/* Outer ring */}
                <mesh rotation={[Math.PI / 2, 0, 0]}>
                    <ringGeometry args={[0.2, 0.28, 32]} />
                    <meshBasicMaterial
                        color={color}
                        transparent
                        opacity={0.4}
                        side={THREE.DoubleSide}
                    />
                </mesh>

                {/* HTML label */}
                <Html
                    position={[0, -0.45, 0]}
                    center
                    distanceFactor={5}
                    style={{
                        color: 'white',
                        fontSize: '12px',
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 'bold',
                        textShadow: '0 0 10px rgba(0,240,255,0.5)',
                        whiteSpace: 'nowrap',
                        userSelect: 'none',
                        pointerEvents: 'none',
                    }}
                >
                    {label}
                </Html>
            </group>
        </Float>
    );
}

function ConnectionLine({ start, end, color }) {
    const geometry = useMemo(() => {
        const points = [new THREE.Vector3(...start), new THREE.Vector3(...end)];
        return new THREE.BufferGeometry().setFromPoints(points);
    }, [start, end]);

    return (
        <line geometry={geometry}>
            <lineBasicMaterial color={color} transparent opacity={0.2} />
        </line>
    );
}

function SkillSphereScene() {
    const groupRef = useRef();

    const skills = useMemo(() => [
        { label: 'React', color: '#00F0FF' },
        { label: 'JavaScript', color: '#FFD700' },
        { label: 'HTML/CSS', color: '#FF00AA' },
        { label: 'Git', color: '#00F0FF' },
        { label: 'UI Design', color: '#7000FF' },
        { label: 'Tailwind', color: '#00F0FF' },
        { label: 'Node.js', color: '#7000FF' },
        { label: 'Figma', color: '#FF00AA' },
    ], []);

    const positions = useMemo(() => {
        const radius = 2;
        return skills.map((_, i) => {
            const phi = Math.acos(-1 + (2 * i + 1) / skills.length);
            const theta = Math.sqrt(skills.length * Math.PI) * phi;
            return [
                radius * Math.cos(theta) * Math.sin(phi),
                radius * Math.sin(theta) * Math.sin(phi),
                radius * Math.cos(phi),
            ];
        });
    }, [skills]);

    useFrame((_, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.12;
        }
    });

    return (
        <>
            <ambientLight intensity={0.3} />
            <pointLight position={[3, 3, 3]} intensity={0.5} color="#00F0FF" />
            <pointLight position={[-3, -3, -3]} intensity={0.3} color="#7000FF" />

            <group ref={groupRef}>
                {/* Central core - wireframe icosahedron */}
                <mesh>
                    <icosahedronGeometry args={[0.6, 1]} />
                    <meshBasicMaterial
                        color="#7000FF"
                        wireframe
                        transparent
                        opacity={0.4}
                    />
                </mesh>

                {/* Inner pulsing sphere */}
                <mesh>
                    <sphereGeometry args={[0.3, 16, 16]} />
                    <meshBasicMaterial
                        color="#00F0FF"
                        transparent
                        opacity={0.15}
                    />
                </mesh>

                {/* Skill nodes */}
                {skills.map((skill, i) => (
                    <SkillNode
                        key={skill.label}
                        position={positions[i]}
                        label={skill.label}
                        color={skill.color}
                        index={i}
                    />
                ))}

                {/* Connection lines from center to nodes */}
                {positions.map((pos, i) => (
                    <ConnectionLine
                        key={i}
                        start={[0, 0, 0]}
                        end={pos}
                        color={skills[i].color}
                    />
                ))}

                {/* Outer ring */}
                <mesh rotation={[Math.PI / 2, 0, 0]}>
                    <ringGeometry args={[2.6, 2.65, 64]} />
                    <meshBasicMaterial
                        color="#00F0FF"
                        transparent
                        opacity={0.15}
                        side={THREE.DoubleSide}
                    />
                </mesh>
            </group>
        </>
    );
}

export default function SkillSphere() {
    return (
        <div className="w-full h-[400px] lg:h-[500px]">
            <Canvas
                camera={{ position: [0, 0, 6], fov: 45 }}
                dpr={[1, 1.5]}
                gl={{ antialias: true, alpha: true }}
                style={{ background: 'transparent' }}
            >
                <Suspense fallback={null}>
                    <SkillSphereScene />
                </Suspense>
            </Canvas>
        </div>
    );
}
