import { Banner } from "../components/Banner";
import { Contact } from "../components/Contact";
import { Projects } from "../components/Projects";
import { Solutions } from "../components/Solutions";
import { Testimonials } from "../components/Testimonials";
import { WhyUs } from "../components/Whyus";

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
      <div id="whyus">
        <WhyUs />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </main>
  );
}
