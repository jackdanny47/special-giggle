import { PortfolioSphere } from "../../components/3d/PortfolioSphere";
import { YieldWaterfall } from "../../components/YieldWaterfall";

export default function Dashboard() {
  return (
    <div className="p-10">
      <h1 className="text-6xl font-black bg-gradient-to-r from-gold to-cyan bg-clip-text text-transparent mb-10">
        Portfolio Sphere
      </h1>
      <div className="h-[800px] glass rounded-3xl overflow-hidden">
        <PortfolioSphere />
      </div>
      <YieldWaterfall />
    </div>
  );
}
