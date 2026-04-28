import { Banner } from "../components/Banner";
import { Projects } from "../components/Projects";
import { Solutions } from "../components/Solutions";
// import Team from "../components/Team";
import { Testimonials } from "../components/Testimonials";

export default function HomePage() {
  return (
    <main>
      <div id="banner">
        <Banner />
      </div>
      <div id="solutions">
        <Solutions />
      </div>
      <div id="company">
        <Projects />
      </div>
      {/* <div id="team">
        <Team />
      </div> */}
      <div id="testimonials">
        <Testimonials />
      </div>
    </main>
  );
}
