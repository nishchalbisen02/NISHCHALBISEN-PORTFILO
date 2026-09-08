import Hero from "@/components/home/Hero";
import IntroBlock from "@/components/home/IntroBlock";
import FeaturedWork from "@/components/home/FeaturedWork";
import DisciplinePreview from "@/components/home/DisciplinePreview";
import ExperienceBlock from "@/components/home/ExperienceBlock";
import ApproachBlock from "@/components/home/ApproachBlock";
import ContactCta from "@/components/home/ContactCta";
import { Marquee } from "@/components/ui/Marquee";
import PageTexture from "@/components/layout/PageTexture";

export default function HomePage() {
  return (
    <>
      <PageTexture name="lines" position="right" />
      <Hero />
      <IntroBlock />
      <Marquee
        items={["Technology", "Artificial Intelligence", "Design", "Film", "Photography"]}
      />
      <FeaturedWork />
      <DisciplinePreview id="tech" />
      <DisciplinePreview id="ai" />
      <DisciplinePreview id="design" />
      <DisciplinePreview id="film" />
      <ExperienceBlock />
      <ApproachBlock />
      <ContactCta />
    </>
  );
}
