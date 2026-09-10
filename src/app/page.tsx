import { Hero } from "@/components/hero";
import { HomeAbout } from "@/components/home-about";
import { HomeProject } from "@/components/home-project";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <HomeAbout />
      <HomeProject />
    </main>
  );
}
