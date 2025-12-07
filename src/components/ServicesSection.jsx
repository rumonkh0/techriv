export default function ServicesSection() {
  const services = [
    {
      icon: "🌐",
      title: "Website Design",
      desc: "Modern, visually stunning websites tailored to your brand.",
    },
    {
      icon: "💻",
      title: "Web Development",
      desc: "Secure, scalable, and high-performance web solutions.",
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      desc: "Human-centered design that enhances engagement.",
    },
    {
      icon: "📱",
      title: "Mobile App Development",
      desc: "Cross-platform apps that deliver smooth performance.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900">
          Our Core Services
        </h2>
        <p className="text-center text-gray-600 mt-2 mb-8 sm:mb-10 text-sm sm:text-base">
          Comprehensive digital solutions tailored to your business needs
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition"
            >
              {/* Icon */}
              <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-[#E5EDF9] text-blue-600 text-2xl mb-4">
                {item.icon}
              </div>

              <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>

              <p className="text-sm text-[#535353] mb-4">{item.desc}</p>

              <button className="text-blue-600 bg-[#E5EDF9] px-2.5 py-3 rounded-2xl font-medium text-sm flex items-center gap-1 hover:underline cursor-pointer">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
