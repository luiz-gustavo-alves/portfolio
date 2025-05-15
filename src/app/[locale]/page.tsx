import HomeHero from "@/components/home/hero";
import HomeSkils from "@/components/home/skills";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HomeHero />
      <HomeSkils />
    </div>
  );
}
