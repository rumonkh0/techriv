import CallToAction from "@/components/CallToAction";
import ProcessSection from "./Process";
import ServicesGrid from "./ServicesGrid";
import WhyChoose from "./WhyChoose";

export default function ServicesPage() {
  return (
    <div>
      <ServicesGrid />
      <ProcessSection />
      <WhyChoose />
      <CallToAction />
    </div>
  );
}
