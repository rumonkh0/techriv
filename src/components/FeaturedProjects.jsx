import Image from "next/image";
import styles from "./FeaturedProjects.module.css";

export default function FeaturedProjects() {
  const projects = [
    {
      image: "/images/Rectangle 11.png",
      title: "FoodFleet",
      subtitle: "Food Delivery Platform",
    },
    {
      image: "/images/Rectangle 12.png",
      title: "E Care Hub",
      subtitle: "Healthcare Platform",
    },
    {
      image: "/images/Rectangle 13.png",
      title: "HisabWala",
      subtitle: "Business Accounting",
    },
    {
      image: "/images/Rectangle 14.png",
      title: "TechFlow",
      subtitle: "Project Management",
    },
  ];

  return (
    <section className="py-20 bg-[#F2F2F2]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
          Featured Projects
        </h2>
        <p className="text-center text-gray-600 mt-2 mb-12">
          Showcase of our premium work across various industries
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, i) => (
            <article
              key={i}
              className={`relative bg-white rounded-2xl shadow-sm overflow-visible`}
            >
              <div className={`${styles.cornerBr}`}>
                <div className="h-full w-full flex items-end justify-end">
                  <button className="h-13 w-13 rounded-full bg-gray-100 hover:bg-gray-200 transition flex items-center justify-center text-blue-600 text-lg -rotate-40 hover:rotate-0">
                    →
                  </button>
                </div>
              </div>
              <div className="w-full h-48 bg-white overflow-hidden relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900 text-[17px]">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{project.subtitle}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition flex items-center gap-2 mx-auto">
            View All Projects →
          </button>
        </div>
      </div>
    </section>
  );
}
