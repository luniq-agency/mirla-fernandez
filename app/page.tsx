import Image from "next/image";
import FeatureCard from "./components/services/ServiceCard";
import Grid from "./components/layout/Grid";
import {
  AnimateH1,
  AnimateH2,
  AnimateSpan,
} from "./components/animations/Text";
import Divider from "./components/layout/Divider";
import { Metadata } from "next";
import { PrimaryButton } from "./components/buttons/Buttons";
import SplitText from "./components/animations/SplitText";
import AnimateDiv from "./components/animations/Container";
import Tag from "./components/Tag";
import TeamCard from "./components/team/TeamCard";
import ServiceSlider from "./components/services/ServiceSlider";
import CTA from "./components/CTA";

export const metadata: Metadata = {
  title: "Friseur Akademie Offenburg",
  description: "",
};

export default function Home() {
  return (
    <main>
      <section className="section-hero">
        <video
          autoPlay
          loop
          muted
          className="video-hero"
          playsInline
          src="https://darksalmon-panther-942134.hostingersite.com/wp-content/uploads/2026/07/header-video.mp4"
        />
        <div className="video-overlay" />
        <div className="content column">
          <SplitText
            delay={80}
            tag="h1"
            splitType="chars"
            text="Love your Hair again"
            textAlign="left"
          />
          <Divider height={0.5} />
          <AnimateSpan
            delay={0.5}
            text="Dein Friseur in Offenburg. Mehrsprachig, multikulturell & garantiert einzigartig. Mit und ohne Termin."
          />
          <Divider height={1} />
          <AnimateDiv delay={0.8}>
            <PrimaryButton
              label="Termin buchen"
              target="/"
              width="fit-content"
            />
          </AnimateDiv>
        </div>
      </section>
      <section id="leistungen">
        <div className="content">
          <Tag alt={true} text="Professionell & Erfahren" />
          <Divider height={1} />
          {/*<Grid columns={3} gap="1rem">*/}
          <ServiceSlider title="Unsere Leistungen">
            <FeatureCard
              delay={0.4}
              description="Klassisch, modern oder individuell"
              image="https://www.friseur-akademie-offenburg.de/assets/img/upload/6537d3953ce87.jpeg"
              title="Schneiden"
            />
            <FeatureCard
              delay={0.8}
              description="Genau auf dich zugeschnitten"
              image="https://darksalmon-panther-942134.hostingersite.com/wp-content/uploads/2026/07/6523d5f966cdd.jpeg"
              title="Beratung"
            />
            <FeatureCard
              delay={1.2}
              description="Für jeden Anlass perfekt gestyled"
              image="https://www.friseur-akademie-offenburg.de/assets/img/upload/6537d24182674.jpeg"
              title="Frisuren & Make-Up"
            />
            <FeatureCard
              delay={0.4}
              description="Auf deine Persönlichkeit abgestimmt"
              image="https://www.friseur-akademie-offenburg.de/assets/img/upload/6544e69596545.jpeg"
              title="Balayage & Color"
            />
          </ServiceSlider>
          {/*</Grid>*/}
        </div>
      </section>
      <section
        className="section-alternate"
        id="ueber-uns"
        style={{ minHeight: "150vh" }}
      >
        <div className="content-centered sticky">
          <Tag text="Über uns" />
          <Divider height={1} />
          <SplitText
            className="text-quote"
            splitType="words"
            text="Die Friseur Akademie Offenburg ist ein Salon für Damen, Herren, Kinder und Senioren – ein Ort für die ganze Familie und Generationen, an dem persönliche Betreuung und Wohlbefinden an erster Stelle stehen."
          />
          <Divider height={1} />
          <SplitText
            className="text-quote"
            delay={40}
            splitType="words"
            text="Bei uns steht nicht nur Ihr Haar im Mittelpunkt – sondern Sie als Mensch."
            textAlign="center"
          />
        </div>
      </section>
      <section id="team">
        <div className="content">
          <Tag alt={true} text="Erfahren & Multikulturell" />
          <Divider height={1} />
          <SplitText
            delay={40}
            splitType="chars"
            tag="h2"
            text="Unser Team"
            textAlign="left"
          />
          <Divider height={2} />
          <Grid columns={3} gap="1rem">
            <TeamCard
              img="https://www.friseur-akademie-offenburg.de/assets/img/upload/04.jpg"
              languages={["de", "en", "es"]}
              name="Mirla Fernandez"
              role="Diplomierte Friseurmeisterin & Coloristin"
            />
          </Grid>
          <Divider height={6} />
          <CTA />
        </div>
      </section>
    </main>
  );
}
