import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import { useRef } from "react";

const assets = [
  { name: "Manhattan Tower", value: 428, color: "#ffb300" },
  { name: "Gold Vault", value: 567, color: "#ffd700" },
  { name: "US Treasuries", value: 890, color: "#8b5cf6" },
  // ... 12 more
];

function AssetNode({ asset, position }: any) {
  const ref = useRef<any>();
  useFrame((state) => (ref.current.rotation.y += 0.01));
  return (
    <group position={position}>
      <mesh ref={ref}>
        <sphereGeometry args={[0.6 + asset.value / 1000, 32, 32]} />
        <meshStandardMaterial color={asset.color} emissive={asset.color} emissiveIntensity={2} />
      </mesh>
      <Text position={[0, 2, 0]} fontSize={0.5} color="white">
        {asset.name} ${asset.value}M
      </Text>
    </group>
  );
}

export function PortfolioSphere() {
  return (
    <Canvas camera={{ position: [0, 0, 15] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls enableZoom={false} autoRotate />
      {assets.map((a, i) => {
        const phi = Math.acos(-1 + (2 * i) / assets.length);
        const theta = Math.sqrt(assets.length * Math.PI) * phi;
        const pos = [
          6 * Math.cos(theta) * Math.sin(phi),
          6 * Math.sin(theta) * Math.sin(phi),
          6 * Math.cos(phi),
        ];
        return <AssetNode key={i} asset={a} position={pos} />;
      })}
    </Canvas>
  );
}
