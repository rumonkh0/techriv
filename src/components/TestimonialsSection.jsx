export default function TestimonialsSection() {
  const testimonials = [
    {
      stars: 5,
      text: `"TechRiv transformed our digital presence beautifully. The team exceeded expectations."`,
      name: "Sarah Johnson",
      role: "CEO, FoodFleet",
      highlighted: false,
    },
    {
      stars: 5,
      text: `"TechRiv transformed our digital presence beautifully. The team exceeded expectations."`,
      name: "Sarah Johnson",
      role: "CEO, FoodFleet",
      highlighted: false,
    },
    {
      stars: 5,
      text: `"TechRiv transformed our digital presence beautifully. The team exceeded expectations."`,
      name: "Sarah Johnson",
      role: "CEO, FoodFleet",
      highlighted: true, // Last card with blue border
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900">
          Client Testimonials
        </h2>
        <p className="text-center text-gray-600 mt-2 mb-8 sm:mb-12 text-sm sm:text-base">
          What our clients say about working with TechRiv
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className={`p-6 bg-white rounded-xl border shadow-sm transition border-gray-200`}
            >
              {/* Stars */}
              <div className="text-yellow-400 text-lg mb-4">
                {"★".repeat(item.stars)}
              </div>

              {/* Quote */}
              <p className="text-gray-700 italic mb-6">{item.text}</p>

              {/* Avatar + Info */}
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-blue-600"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
