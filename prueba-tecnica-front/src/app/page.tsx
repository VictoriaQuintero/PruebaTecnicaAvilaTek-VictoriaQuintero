import Nav from "@/components/Nav";
import Hero from "@/components/Hero"
import IntegrationSection from "@/components/IntegrationSection";
import CTASection from "@/components/CTASection";
import FeaturesSection from "@/components/FeaturesSection";
import SecondaryCtaSection from "@/components/SecondaryCtaSection";

export default function Home() {
  return (
    <div>
      <Nav/>
      <Hero/>
      <IntegrationSection/>
      <CTASection />
      <FeaturesSection />
      <SecondaryCtaSection />
    </div>
  );
}
