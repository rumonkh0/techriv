import Image from "next/image";

const CheckIcon = () => (
  <svg
    className="w-4 h-4 text-green-500"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const StarIcon = ({ filled }) => (
  <svg
    className={`w-4 h-4 ${filled ? "text-yellow-400" : "text-gray-300"}`}
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.12 3.44a1 1 0 00.95.69h3.615c.969 0 1.372 1.24.588 1.81l-2.926 2.13a1 1 0 00-.363 1.118l1.12 3.44c.3.922-.755 1.688-1.54 1.118l-2.926-2.13a1 1 0 00-1.176 0l-2.926 2.13c-.784.57-1.838-.196-1.539-1.118l1.12-3.44a1 1 0 00-.363-1.118L2.98 8.867c-.783-.57-.38-1.81.588-1.81h3.616a1 1 0 00.95-.69l1.12-3.44z" />
  </svg>
);

export const ProductCard = ({ item }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition">
      {/* TOP IMAGE */}
      <div className="h-44 w-full overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          width={400}
          height={176}
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
        <p className="text-gray-600 text-sm">{item.subtitle}</p>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-2">
          {[1, 2, 3, 4, 5].map((n) => (
            <StarIcon key={n} filled={n <= item.rating} />
          ))}
          <span className="text-gray-600 text-sm ml-1">
            {item.rating} ({item.reviews} reviews)
          </span>
        </div>

        {/* Features */}
        <ul className="mt-3 space-y-1">
          {item.features.map((f, i) => (
            <li
              key={i}
              className="flex items-center gap-2 text-sm text-gray-700"
            >
              <CheckIcon /> {f}
            </li>
          ))}
        </ul>

        <div className="border-t border-gray-200 my-4"></div>

        {/* Price */}
        <p className="text-blue-600 text-xl font-bold">{item.price}</p>

        {/* Button */}
        <button className="w-full mt-3 bg-blue-600 text-white py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-700 transition">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9h14l-2-9M10 21a1 1 0 110-2 1 1 0 010 2zm8 0a1 1 0 100-2 1 1 0 000 2z"
            />
          </svg>
          Get Started
        </button>
      </div>
    </div>
  );
};
