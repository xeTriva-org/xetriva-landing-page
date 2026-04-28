import { Banner } from "../components/Banner";
import { Projects } from "../components/Projects";
import { Solutions } from "../components/Solutions";
import { Testimonials } from "../components/Testimonials";

export default function HomePage() {
  return (
    <main>
      <Banner />
      <Solutions />
      <Projects />
      <Testimonials />
    </main>
  );
}
