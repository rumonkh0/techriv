export default function WhyChoose() {
  const items = [
    {
      icon: "👥",
      title: "Expert Team",
      desc: "Experienced professionals with proven track records in delivering successful projects across diverse industries.",
    },
    {
      icon: "⏱️",
      title: "Fast Turnaround",
      desc: "Efficient project management and agile methodologies ensure timely delivery without compromising quality.",
    },
    {
      icon: "🛡️",
      title: "Security First",
      desc: "We implement industry-leading security practices to protect your data and ensure compliance with regulations.",
    },
    {
      icon: "📊",
      title: "Results Driven",
      desc: "We implement industry-leading security practices to protect your data and ensure compliance with regulations.",
    },
  ];

  return (
    <section className="py-12 sm:py-20 bg-white">
      {/* Section Header */}
      <div className="text-center mb-8 sm:mb-12 px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Why Choose TechRiv?
        </h2>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          We stand out through our commitment to excellence and client success.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
        {items.map((item, i) => (
          <div key={i} className="flex gap-4">
            {/* Icon box */}
            <div
              className="
                w-12 h-12 flex items-center justify-center
                bg-blue-50 text-blue-600 text-2xl 
                rounded-xl shrink-0
              "
            >
              {item.icon}
            </div>

            {/* Text */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
