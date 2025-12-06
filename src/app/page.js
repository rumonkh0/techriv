import CallToAction from "@/components/CallToAction";
import FeaturedProjects from "@/components/FeaturedProjects";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section
        className="pt-20 pb-32 text-center"
        style={{
          background:
            "linear-gradient(180deg, #DFE6F2 0%, #E9E8F4 50%, #DFEDF0 100%)",
        }}
      >
        {/* Gradient Title */}
        <h1
          className="text-4xl md:text-6xl font-bold mb-4 leading-[1.15]"
          style={{
            background:
              "linear-gradient(90deg, #004BC2 0%, #5B5CD4 52%, #008EA8 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Empowering Digital Transformation
        </h1>

        {/* Subtitle */}
        <p className="text-gray-700 max-w-2xl mx-auto mb-8">
          we design and develop world class digital experiences that elevate
          your brand and drive real business results.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition flex items-center gap-2">
            Explore Our Work →
          </button>

          <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition flex items-center gap-2">
            Let’s Talk →
          </button>
        </div>

        {/* Who We Are Box */}
        <div className="max-w-5xl mx-auto mt-20 bg-white shadow-sm border border-gray-200 rounded-2xl p-8 text-left">
          <h2 className="text-2xl font-semibold mb-3">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed">
            TechRiv is a next-gen IT agency delivering high-impact digital
            solutions through design, development, and innovation. We partner
            with ambitious brands to transform their digital presence and
            achieve measurable business growth.
          </p>

          <button className="mt-6 text-blue-600 font-medium hover:underline flex items-center gap-1">
            Know More About Us →
          </button>
        </div>
      </section>
      <ServicesSection />
      <FeaturedProjects />
      <TestimonialsSection />
      <CallToAction />
    </div>
  );
}
