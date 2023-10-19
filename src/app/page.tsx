import IntroSection from "./_sections/intro-section";
import FeaturedArtSection from "./_sections/featured-art-section";
import TeamSection from "./_sections/team-section";
import TattooServiceSection from "./_sections/tattoo-service-section";
import PierciengServiceSection from "./_sections/piercieng-service-section";
export default function Home() {
  return (
    <main className="flex items-center flex-col gap-4 ">
      <IntroSection />
      <FeaturedArtSection />
      <section className="flex flex-col gap-4 w-4/5">
        <TeamSection />
        <TattooServiceSection />
        <PierciengServiceSection />
      </section>
    </main>
  );
}
