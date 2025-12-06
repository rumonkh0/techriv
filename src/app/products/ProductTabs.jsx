const categories = ["All Product", "Website", "Mobile App", "Design", "Marketing"];

export function ProductTabs({ active, setActive }) {
  return (
    <div className="flex gap-3 justify-center mb-10">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActive(cat)}
          className={`
            px-5 py-2 rounded-xl border 
            ${active === cat 
              ? "bg-blue-600 text-white border-blue-600" 
              : "bg-white text-gray-700 border-gray-200 hover:bg-gray-100"}
          `}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
