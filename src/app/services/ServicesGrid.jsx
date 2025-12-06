const services = [
  {
    icon: "🌐",
    title: "Website Design",
    desc: "Modern, visually stunning websites tailored to your brand.",
    features: [
      "Responsive design for all devices",
      "User-centered design approach",
      "Brand-aligned aesthetics",
      "Fast loading performance",
      "SEO-optimized structure",
      "Accessibility compliance",
    ],
    price: "Starting from $2,500",
  },
  {
    icon: "💻",
    title: "Website Development",
    desc: "Secure, scalable, and high-performance web solutions.",
    features: [
      "Full-stack development",
      "API integration",
      "Database design & optimization",
      "Security best practices",
      "Scalable architecture",
      "Maintenance & support",
    ],
    price: "Starting from $5,000",
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    desc: "Human-centered design that enhances engagement.",
    features: [
      "User research & personas",
      "Wireframing & prototyping",
      "Interactive mockups",
      "Design systems",
      "Usability testing",
      "Design documentation",
    ],
    price: "Starting from $3,000",
  },
  {
    icon: "📱",
    title: "Mobile App Development",
    desc: "Cross-platform apps that deliver smooth performance.",
    features: [
      "iOS & Android development",
      "React Native expertise",
      "App store optimization",
      "Push notifications",
      "Offline functionality",
      "App analytics integration",
    ],
    price: "Starting from $8,000",
  },
  {
    icon: "🚀",
    title: "Digital Marketing",
    desc: "Secure, scalable, and high-performance web solutions.",
    features: [
      "Full-stack development",
      "API integration",
      "Database design & optimization",
      "Security best practices",
      "Scalable architecture",
      "Maintenance & support",
    ],
    price: "Starting from $5,000",
  },
  {
    icon: "🛒",
    title: "E-Commerce Solutions",
    desc: "Complete online store setup and optimization.",
    features: [
      "Platform selection & setup",
      "Product catalog management",
      "Payment gateway integration",
      "Inventory management",
      "Order tracking system",
      "Conversion optimization",
    ],
    price: "Starting from $4,000",
  },
];

export default function ServicesGrid() {
  return (
    <section className="relative ">
      {/* Soft radial gradient bottom-right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 left-10 
  w-[560px] h-[560px] 
  opacity-20 -z-10
  blur-[100px]
  bg-[radial-gradient(circle,#3753CB_0%,#5E5DD5_48%,#007FBB_100%)]"
      ></div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 right-10 
  w-[560px] h-[560px] 
  opacity-20 -z-10
  blur-[100px]
  bg-[radial-gradient(circle,#3753CB_0%,#5E5DD5_48%,#007FBB_100%)]"
      ></div>
      <div className="max-w-7xl mx-auto px-4 py-16 overflow-hidden">
        <div className="relative z-10 text-center max-w-3xl mx-auto pt-10 pb-35">
          {/* Gradient Heading */}
          <h2
            className="text-7xl font-semibold  bg-[linear-gradient(90deg,#3753CB_0%,#5E5DD5_48%,#007FBB_100%)]
  bg-clip-text text-transparent"
          >
            Our Services
          </h2>

          {/* Subtitle */}
          <p className="text-gray-600 mt-3 text-lg">
            Comprehensive digital solutions designed to elevate your brand and
            drive business growth.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="
            bg-white 
            rounded-2xl 
            p-6 
            shadow-[0_2px_8px_rgba(0,0,0,0.06)]
            border border-gray-100
            hover:shadow-md transition-shadow
          "
            >
              {/* Icon */}
              <div
                className="
              w-12 h-12 
              flex items-center justify-center 
              rounded-xl bg-blue-50 
              text-blue-600 text-2xl 
              mb-4
            "
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mt-2">{service.desc}</p>

              {/* Features */}
              <div className="mt-4">
                <h4 className="font-semibold text-gray-900 text-sm mb-2">
                  Key Features:
                </h4>

                <ul className="text-gray-600 text-sm space-y-1">
                  {service.features.map((f, idx) => (
                    <li key={idx}>• {f}</li>
                  ))}
                </ul>
              </div>

              {/* Divider */}
              <div className="border-t border-[#CCCCCC] my-4"></div>

              {/* Price */}
              <p className="text-blue-600 font-semibold text-sm">
                {service.price}
              </p>

              {/* CTA */}
              <button
                className="
              text-blue-600 text-sm mt-1 
              hover:underline 
              inline-flex items-center gap-1
            "
              >
                Get Started →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
