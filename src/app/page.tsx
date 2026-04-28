import { HeroBanner } from "../components/HeroBanner";
import { Projects } from "../components/Projects";
import { Solutions } from "../components/Solutions";
import { Testimonials } from "../components/Testimonials";

export default function HomePage() {
  return (
    <main>
      <HeroBanner />
      <Solutions />
      <Projects />
      <Testimonials />
    </main>
  );
}
