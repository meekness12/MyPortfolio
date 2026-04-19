import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

function GeometryShape({ type, position, scale, color, rotationSpeed, floatSpeed, floatIntensity }) {
    const meshRef = useRef();
    const speedX = useMemo(() => rotationSpeed * (0.5 + Math.random()), [rotationSpeed]);
    const speedY = useMemo(() => rotationSpeed * (0.5 + Math.random()), [rotationSpeed]);

    useFrame((_, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * speedX;
            meshRef.current.rotation.y += delta * speedY;
        }
    });

    const geometry = useMemo(() => {
        switch (type) {
            case 'torus':
                return <torusGeometry args={[1, 0.4, 16, 32]} />;
            case 'icosahedron':
                return <icosahedronGeometry args={[1, 0]} />;
            case 'octahedron':
                return <octahedronGeometry args={[1, 0]} />;
            case 'dodecahedron':
                return <dodecahedronGeometry args={[1, 0]} />;
            case 'torusKnot':
                return <torusKnotGeometry args={[1, 0.3, 64, 8]} />;
            case 'ring':
                return <ringGeometry args={[0.5, 1, 32]} />;
            default:
                return <icosahedronGeometry args={[1, 0]} />;
        }
    }, [type]);

    return (
        <Float
            speed={floatSpeed}
            rotationIntensity={0.3}
            floatIntensity={floatIntensity}
        >
            <mesh
                ref={meshRef}
                position={position}
                scale={scale}
            >
                {geometry}
                <meshBasicMaterial
                    color={color}
                    wireframe
                    transparent
                    opacity={0.6}
                />
            </mesh>
        </Float>
    );
}

export default function FloatingGeometry({ count = 8 }) {
    const shapes = useMemo(() => {
        const types = ['torus', 'icosahedron', 'octahedron', 'dodecahedron', 'torusKnot', 'ring'];
        const colors = ['#00F0FF', '#7000FF', '#FF00AA', '#00F0FF', '#7000FF'];

        return Array.from({ length: count }, (_, i) => ({
            id: i,
            type: types[i % types.length],
            position: [
                (Math.random() - 0.5) * 30,
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 15 - 5,
            ],
            scale: 0.2 + Math.random() * 0.5,
            color: colors[i % colors.length],
            rotationSpeed: 0.1 + Math.random() * 0.3,
            floatSpeed: 1 + Math.random() * 2,
            floatIntensity: 0.5 + Math.random() * 1.5,
        }));
    }, [count]);

    return (
        <group>
            {shapes.map((shape) => (
                <GeometryShape key={shape.id} {...shape} />
            ))}
        </group>
    );
}
