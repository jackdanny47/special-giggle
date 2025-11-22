import { Canvas } from "@react-three/fiber";
import { Line } from "@react-three/drei";

export function BridgeVisualizer() {
  const chains = ["Ethereum", "Solana", "Base", "Arbitrum", "Avalanche"];
  return (
    <Canvas>
      {chains.map((chain, i) => (
        <Line
          key={i}
          points={[[0,0,0], [Math.cos(i)*5, Math.sin(i)*5, 0]]}
          color="#00d4ff"
          lineWidth={3}
          dashed
        />
      ))}
    </Canvas>
  );
}
