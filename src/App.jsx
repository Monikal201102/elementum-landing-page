import Hero from "./components/Hero";
import FeatureSection from "./components/FeatureSection";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import FooterCTA from "./components/FooterCTA";

import image348 from "./assets/image348.png";
import imagea348 from "./assets/imagea348.png";

import Polygon2 from "./assets/Polygon2.png";
import Polygon3 from "./assets/Polygon3.png";

function App() {
  return (
    <>

      <Hero />

      <FeatureSection
        title="Tomorrow should be better than today"
        description="We are a team of strategists, designers, communicators, researchers. Together, we believe that progress only happens when you refuse to play things safe."
        image={image348}
        polygon={Polygon3}
      />

      <FeatureSection
        title="See how we can help you progress"
        description="We add a layer of fearless insights and action that allows change makers to move faster and achieve better results."
        image={imagea348}
        polygon={Polygon2}
        reverse={true}
      />

      <Services />
      <Testimonials />
      <FooterCTA />
    </>
  );
}

export default App;