export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Planning",
      desc: "We understand your business goals, target audience, and project requirements through detailed consultation.",
    },
    {
      number: "02",
      title: "Design & Strategy",
      desc: "Our team creates comprehensive designs and strategies aligned with your vision and industry best practices.",
    },
    {
      number: "03",
      title: "Development & Implementation",
      desc: "We build robust, scalable solutions using cutting-edge technologies and proven development methodologies.",
    },
    {
      number: "04",
      title: "Testing & Quality Assurance",
      desc: "Rigorous testing ensures your solution is bug-free, secure, and performs optimally across all platforms.",
    },
    {
      number: "05",
      title: "Launch & Deployment",
      desc: "We handle the deployment process smoothly, ensuring minimal downtime and maximum performance.",
    },
    {
      number: "06",
      title: "Support & Optimization",
      desc: "Ongoing support and continuous optimization to keep your solution running at peak performance.",
      highlighted: true, // highlight last card
    },
  ];

  return (
    <section className="bg-[#F4F7FF] py-20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Our Process</h2>
        <p className="text-gray-600 mt-2">
          A structured approach to deliver exceptional results every time.
        </p>
      </div>

      {/* Steps Grid */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <div
            key={i}
            className={`
              relative bg-white p-8 rounded-2xl shadow-sm 
              border border-gray-200
            `}
          >
            {/* Connector (hidden on last card) */}
            <div className="absolute right-[-18px] top-1/2 -translate-y-1/2 w-6 h-[1.5px] bg-blue-200"></div>

            {/* Number */}
            <p className="text-5xl font-bold text-[#CCDBF3] mb-4">
              {step.number}
            </p>

            {/* Title */}
            <h3 className="text-lg font-medium text-gray-900">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-[#535353] text-sm mt-2 leading-relaxed">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
