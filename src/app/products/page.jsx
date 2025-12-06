import CallToAction from "@/components/CallToAction";
import ComparePackages from "./Package";
import ProductSection from "./Product";

export default function ProductPage() {
  return (
    <div>
      <section className="bg-[#F3F6FF]">
        <div className="relative z-10 text-center max-w-3xl mx-auto pt-14 pb-35">
          {/* Gradient Heading */}
          <h2
            className="text-7xl font-semibold bg-[linear-gradient(90deg,#3753CB_0%,#5E5DD5_48%,#007FBB_100%)]
  bg-clip-text text-transparent"
          >
            Our Product
          </h2>

          {/* Subtitle */}
          <p className="text-gray-600 mt-3 text-lg">
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
