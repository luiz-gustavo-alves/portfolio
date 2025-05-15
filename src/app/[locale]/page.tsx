import HomeHero from "@/components/pages/home/hero";
import HomeSkils from "@/components/pages/home/skills";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HomeHero />
      <HomeSkils />
    </div>
  );
}
