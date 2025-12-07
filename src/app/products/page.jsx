import CallToAction from "@/components/CallToAction";
import ComparePackages from "./Package";
import ProductSection from "./Product";

export default function ProductPage() {
  return (
    <div>
      <section className="bg-[#F3F6FF]">
        <div className="relative z-10 text-center max-w-3xl mx-auto pt-10 sm:pt-14 pb-20 sm:pb-35 px-4">
          {/* Gradient Heading */}
          <h2
            className="text-4xl sm:text-5xl md:text-7xl font-semibold bg-[linear-gradient(90deg,#3753CB_0%,#5E5DD5_48%,#007FBB_100%)]
  bg-clip-text text-transparent"
          >
            Our Product
          </h2>

          {/* Subtitle */}
          <p className="text-gray-600 mt-3 text-base sm:text-lg">
            Ready-made solutions and packages tailored to your business needs.
          </p>
        </div>
      </section>
      <ProductSection />
      <ComparePackages />
      <CallToAction />
    </div>
  );
}
