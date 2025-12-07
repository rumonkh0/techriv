import Image from "next/image";

export default function TeamSection() {
  const lead = {
    name: "Md Mahfuz",
    role: "Founder & CEO",
    img: "/images/mahfuz.png",
    bio: "Vision-led leadership with 10+ years scaling digital products. Focused on team growth, client value, and long-term strategy.",
    socials: [
      { icon: "🌐", url: "#" },
      { icon: "🔗", url: "#" },
      { icon: "📸", url: "#" },
    ],
  };

  const stats = [
    { label: "Members", value: "18" },
    { label: "Years avg exp", value: "7+" },
    { label: "Client satisfaction", value: "100%" },
  ];

  const team = [
    {
      name: "Rumon Khan",
      role: "Backend Engineer",
      desc: "Brand systems, design ops, and product UI.",
      img: "/images/mahfuz.png",
    },
    {
      name: "Sabbir Tanvir",
      role: "AI Specialist",
      desc: "Full-stack development and scalable architecture.",
      img: "/images/mahfuz.png",
    },
    {
      name: "Afique Hossain",
      role: "Marketing Strategist",
      desc: "SEO, content marketing, and campaign management.",
      img: "/images/mahfuz.png",
    },
    {
      name: "Kowsiq Mondol",
      role: "Frontend Engineer",
      desc: "Agile workflows and client communication.",
      img: "/images/mahfuz.png",
    },
  ];

  return (
    <section className="relative py-12 sm:py-20 bg-[linear-gradient(135deg,#E1D9FD_0%,#F8FAFC_27%,#D8DFFC_50%,#F8FAFC_100%)]">
      {/* Background soft gradient elements */}
      <div
        className="
    absolute right-10 sm:right-40 top-5
    blur-[20px]
    w-[200px] sm:w-[300px] h-[200px] sm:h-[300px]
    bg-[radial-gradient(circle,#F4D7FC_29%,#E4E9FC_100%)]
    rounded-full
  "
      ></div>

      {/* Header */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-10 sm:mb-14 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          Meet Our Team
        </h2>
        <p className="text-gray-600 text-base sm:text-lg mt-3">
          Talented professionals dedicated to delivering excellence and driving
          your success.
        </p>
      </div>
      {/* Lead & Stats Row */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 mb-8 sm:mb-12">
        {/* LEAD MEMBER CARD */}
        <div
          className="
            flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-white p-4 sm:p-6 rounded-2xl border border-gray-100 col-span-1 lg:col-span-8
            shadow-[0_0_20px_6px_#F4D7FC]
          "
        >
          <div className="relative w-24 h-24 sm:h-full sm:w-auto sm:aspect-square rounded-full overflow-hidden shrink-0">
            <Image
              src={lead.img}
              alt={lead.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 mb-1">
              <h3 className="text-lg font-semibold text-gray-900">
                {lead.name}
              </h3>
              <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                {lead.role}
              </span>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed max-w-md mb-3">
              {lead.bio}
            </p>

            {/* Socials */}
            <div className="flex gap-4 text-gray-500 text-lg justify-center sm:justify-start">
              {lead.socials.map((s, i) => (
                <a key={i} href={s.url} className="hover:text-gray-700">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* STATS CARD */}
        <div
          className="
            bg-white p-4 sm:p-6 rounded-2xl border border-gray-100 col-span-1 lg:col-span-4
            shadow-[0_0_20px_6px_#F4D7FC]
          "
        >
          <p className="text-gray-600 mb-4 sm:mb-6 text-center text-sm sm:text-base">
            We&apos;re a lean, multi-disciplinary team.
          </p>

          <div className="grid grid-cols-3 text-center">
            {stats.map((s, i) => (
              <div key={i}>
                <p className="text-2xl font-semibold text-gray-900">
                  {s.value}
                </p>
                <p className="text-xs text-gray-600 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* TEAM MEMBER GRID */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
        {team.map((member, i) => (
          <div
            key={i}
            className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 text-center"
          >
            <div className="w-20 h-20 mx-auto bg-gray-200 rounded-full mb-4">
              <Image
                src={member.img}
                alt={member.name}
                width={80}
                height={80}
                className="w-20 h-20 rounded-full object-cover"
                priority
              />
            </div>

            <h3 className="text-lg font-semibold text-gray-900">
              {member.name}
            </h3>
            <p className="text-blue-600 text-sm font-medium">{member.role}</p>
            <p className="text-gray-600 text-sm mt-2">{member.desc}</p>
          </div>
        ))}
      </div>
      {/* BUTTON */}
      <div className="relative z-10 text-center">
        <button
          className="
            px-6 py-3 text-sm font-medium text-blue-600 
            border border-blue-600 rounded-xl 
            hover:bg-blue-50 inline-flex items-center gap-2
          "
        >
          View All Member →
        </button>
      </div>
    </section>
  );
}
