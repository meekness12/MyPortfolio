import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Trail, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function OrbitingParticle({ radius, speed, offset, color, size = 0.04 }) {
    const ref = useRef();

    useFrame((state) => {
        const t = state.clock.elapsedTime * speed + offset;
        ref.current.position.x = Math.cos(t) * radius;
        ref.current.position.y = Math.sin(t * 0.7) * radius * 0.5;
        ref.current.position.z = Math.sin(t) * radius;
    });

    return (
        <Trail
            width={1}
            length={6}
            color={new THREE.Color(color)}
            attenuation={(t) => t * t}
        >
            <mesh ref={ref}>
                <sphereGeometry args={[size, 8, 8]} />
                <meshBasicMaterial color={color} />
            </mesh>
        </Trail>
    );
}

function HeroTorusKnot() {
    const meshRef = useRef();
    const mouseRef = useRef({ x: 0, y: 0 });

    React.useEffect(() => {
        const handleMouseMove = (e) => {
            mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
            mouseRef.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.15;
            meshRef.current.rotation.y += delta * 0.2;

            // Mouse-reactive rotation
            meshRef.current.rotation.x = THREE.MathUtils.lerp(
                meshRef.current.rotation.x,
                meshRef.current.rotation.x + mouseRef.current.y * 0.1,
                0.05
            );
            meshRef.current.rotation.z = THREE.MathUtils.lerp(
                meshRef.current.rotation.z,
                mouseRef.current.x * 0.2,
                0.05
            );
        }
    });

    return (
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.8}>
            <mesh ref={meshRef} scale={1.2}>
                <torusKnotGeometry args={[1.2, 0.35, 128, 16]} />
                <meshBasicMaterial
                    color="#00F0FF"
                    wireframe
                    transparent
                    opacity={0.4}
                />
            </mesh>

            {/* Inner glowing core */}
            <mesh scale={0.6}>
                <sphereGeometry args={[1, 32, 32]} />
                <MeshDistortMaterial
                    color="#7000FF"
                    transparent
                    opacity={0.15}
                    distort={0.4}
                    speed={2}
                    roughness={0}
                />
            </mesh>
        </Float>
    );
}

function HeroParticles() {
    const particles = useMemo(() => {
        return Array.from({ length: 12 }, (_, i) => ({
            id: i,
            radius: 2 + Math.random() * 1.5,
            speed: 0.3 + Math.random() * 0.5,
            offset: (i / 12) * Math.PI * 2,
            color: i % 3 === 0 ? '#00F0FF' : i % 3 === 1 ? '#7000FF' : '#FF00AA',
            size: 0.02 + Math.random() * 0.04,
        }));
    }, []);

    return (
        <group>
            {particles.map((p) => (
                <OrbitingParticle key={p.id} {...p} />
            ))}
        </group>
    );
}

function HeroScene3D() {
    return (
        <>
            <ambientLight intensity={0.2} />
            <pointLight position={[5, 5, 5]} intensity={0.5} color="#00F0FF" />
            <pointLight position={[-5, -5, -5]} intensity={0.3} color="#7000FF" />

            <HeroTorusKnot />
            <HeroParticles />
        </>
    );
}

export default function HeroScene() {
    return (
        <div className="w-full h-full absolute inset-0">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 50 }}
                dpr={[1, 1.5]}
                gl={{ antialias: true, alpha: true }}
                style={{ background: 'transparent' }}
                aria-label="Interactive 3D Hero Scene: A glowing torus knot orbiting with particles reacting to your mouse movement."
            >
                <Suspense fallback={null}>
                    <HeroScene3D />
                </Suspense>
            </Canvas>
        </div>
    );
}
