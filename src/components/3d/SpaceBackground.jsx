import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars, PointMaterial, Points } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';
import FloatingGeometry from './FloatingGeometry';

function CyberParticles({ count = 800 }) {
    const ref = useRef();
    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 40;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 40;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 40;
        }
        return pos;
    }, [count]);

    const colors = useMemo(() => {
        const cols = new Float32Array(count * 3);
        const colorOptions = [
            new THREE.Color('#00F0FF'),
            new THREE.Color('#7000FF'),
            new THREE.Color('#FF00AA'),
        ];
        for (let i = 0; i < count; i++) {
            const col = colorOptions[Math.floor(Math.random() * colorOptions.length)];
            cols[i * 3] = col.r;
            cols[i * 3 + 1] = col.g;
            cols[i * 3 + 2] = col.b;
        }
        return cols;
    }, [count]);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.y += delta * 0.02;
            ref.current.rotation.x += delta * 0.01;
        }
    });

    return (
        <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                vertexColors
                size={0.08}
                sizeAttenuation
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
            <bufferAttribute
                attach="geometry-attributes-color"
                count={count}
                array={colors}
                itemSize={3}
            />
        </Points>
    );
}

function ScrollCamera() {
    const { camera } = useThree();
    const mouseRef = useRef({ x: 0, y: 0 });

    React.useEffect(() => {
        const handleMouseMove = (e) => {
            mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
            mouseRef.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useFrame(() => {
        const scrollY = window.scrollY || 0;
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        const scrollProgress = maxScroll > 0 ? scrollY / maxScroll : 0;

        // Gentle camera movement based on scroll
        camera.position.y = THREE.MathUtils.lerp(
            camera.position.y,
            -scrollProgress * 3,
            0.05
        );

        // Subtle mouse parallax
        camera.position.x = THREE.MathUtils.lerp(
            camera.position.x,
            mouseRef.current.x * 0.3,
            0.05
        );
    });

    return null;
}

function Scene() {
    return (
        <>
            <color attach="background" args={['#030014']} />
            <fog attach="fog" args={['#030014', 15, 40]} />
            <ambientLight intensity={0.1} />

            <ScrollCamera />

            <Stars
                radius={30}
                depth={60}
                count={3000}
                factor={3}
                saturation={0}
                fade
                speed={0.5}
            />

            <CyberParticles count={600} />
            <FloatingGeometry count={10} />

            <EffectComposer>
                <Bloom
                    luminanceThreshold={0.1}
                    luminanceSmoothing={0.9}
                    intensity={0.8}
                    mipmapBlur
                />
            </EffectComposer>
        </>
    );
}

export default function SpaceBackground() {
    return (
        <div className="fixed inset-0 -z-10" style={{ pointerEvents: 'none' }}>
            <Canvas
                camera={{ position: [0, 0, 8], fov: 60 }}
                dpr={[1, 1.5]}
                gl={{
                    antialias: false,
                    alpha: false,
                    powerPreference: 'high-performance',
                }}
                style={{ background: '#030014' }}
            >
                <Suspense fallback={null}>
                    <Scene />
                </Suspense>
            </Canvas>
        </div>
    );
}
