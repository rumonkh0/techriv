import CallToAction from "@/components/CallToAction";
import TeamSection from "./Team";

export default function AboutPage() {
  return (
    <div>
      <section className="relative z-10 text-center max-w-3xl mx-auto pt-14 pb-25">
        {/* Gradient Heading */}
        <h2 className="text-7xl font-semibold  bg-[linear-gradient(90deg,#3753CB_0%,#5E5DD5_48%,#007FBB_100%)] bg-clip-text text-transparent">
          About TechRiv
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 mt-3 text-lg">
          Transforming businesses through innovative digital solutions and
          strategic partnerships.
        </p>
      </section>
      <section className="py-20 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE */}
          <div>
            {/* Heading with icon */}
            <div className="flex items-center gap-2 mb-4">
              <div className="text-blue-600 text-2xl">🛡️</div>
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            </div>

            {/* Paragraphs */}
            <p className="text-gray-600 leading-relaxed mb-6">
              To empower ambitious brands and businesses by delivering
              world-class digital solutions that drive measurable growth and
              lasting impact. We&apos;re committed to transforming ideas into
              reality through innovative design, robust development, and
              strategic thinking.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Every project we undertake is an opportunity to create something
              extraordinary that exceeds expectations and delivers real business
              value.
            </p>
          </div>

          {/* RIGHT SIDE CARD */}
          <div
            className="
    bg-[#ECF2FF] 
    p-10 
    border border-blue-100

    /* Custom rounded corners */
    rounded-tl-[15px] rounded-tr-[120px] 
    rounded-bl-[120px] rounded-br-[15px]

    /* Center content vertically but keep text left-aligned */
    flex flex-col justify-center items-center text-left
  "
          >
            <ul className="space-y-4 text-gray-700 w-fit">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-600 mt-2"></span>
                Deliver exceptional digital experiences
              </li>

              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-600 mt-2"></span>
                Drive measurable business results
              </li>

              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-600 mt-2"></span>
                Foster long-term client partnerships
              </li>

              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-600 mt-2"></span>
                Innovate and stay ahead of industry trends
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SHAPE CARD */}
          <div
            className="
            bg-[#ECF2FF]
            p-10 
            border border-blue-100
            rounded-tr-[120px] rounded-bl-[120px]
            rounded-tl-[15px] rounded-br-[15px]

            flex items-center justify-center
          "
          >
            <ul className="space-y-4 text-gray-700 text-left w-fit">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-600 mt-2"></span>
                Become the most trusted digital partner in the region
              </li>

              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-600 mt-2"></span>
                Lead digital transformation across industries
              </li>

              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-600 mt-2"></span>
                Build sustainable and scalable solutions
              </li>

              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-600 mt-2"></span>
                Empower teams with cutting-edge technology
              </li>
            </ul>
          </div>

          {/* RIGHT TEXT BLOCK */}
          <div>
            {/* Icon + Title */}
            <div className="flex items-center gap-2 mb-4">
              <div className="text-blue-600 text-2xl">🎯</div>
              <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              To be the leading digital transformation partner that empowers
              businesses to thrive in an increasingly digital world. We envision
              a future where technology seamlessly enhances human potential and
              drives meaningful business outcomes.
            </p>

            <p className="text-gray-600 leading-relaxed">
              We aspire to create a legacy of innovation, excellence, and
              positive impact that extends beyond our projects to shape the
              entire digital landscape.
            </p>
          </div>
        </div>
      </section>
      <CoreValues />
      <TeamSection />
      <CallToAction />
    </div>
  );
}

function CoreValues() {
  const values = [
    {
      icon: "💡",
      title: "Innovation",
      desc: "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.",
    },
    {
      icon: "🤝",
      title: "Collaboration",
      desc: "We believe in the power of teamwork and close partnerships with our clients.",
    },
    {
      icon: "🔒",
      title: "Integrity",
      desc: "Transparency and honesty guide every decision we make and every project we undertake.",
    },
    {
      icon: "✨",
      title: "Excellence",
      desc: "We're committed to delivering exceptional quality in everything we do.",
    },
  ];

  return (
    <section className="py-20 bg-linear-to-b from-[#F3F7FF] to-white">
      <div className="text-center mb-12 max-w-2xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Our Core Values
        </h2>
        <p className="text-[#535353] text-lg mb-13">
          These principles guide everything we do and define who we are as a
          company.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((v, i) => (
          <div
            key={i}
            className="
              bg-white p-8 rounded-2xl 
              shadow-sm border border-gray-200
            "
          >
            {/* Icon Container */}
            <div
              className="
                w-12 h-12 
                flex items-center justify-center 
                rounded-xl bg-blue-50 text-blue-600 text-2xl
                mb-4
              "
            >
              {v.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {v.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
