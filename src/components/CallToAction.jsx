export default function CallToAction() {
  return (
    <section
      className="py-20 text-center flex flex-col gap-3"
      style={{
        background:
          "linear-gradient(90deg, #DFE6F2 0%, #E9E8F4 50%, #DFEDF0 100%)",
      }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">
        Ready to Start Your Next Big Idea?
      </h2>

      <p className="mb-5 font-medium text-lg text-[#535353]">
        Let’s collaborate and create something extraordinary together.
      </p>

      <button className="px-9 py-4.5 bg-[#0F53C3] text-white rounded-2xl font-medium hover:bg-blue-700 transition flex items-center gap-2 mx-auto cursor-pointer">
        Let’s Build Together
        <span>→</span>
      </button>
    </section>
  );
}
