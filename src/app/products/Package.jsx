export default function ComparePackages() {
  const CheckIcon = () => (
    <svg
      className="w-5 h-5 text-green-500 mx-auto"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
  const packages = [
    { name: "Starter" },
    { name: "Professional" },
    { name: "Enterprise" },
  ];

  const features = [
    {
      feature: "Custom Design",
      Starter: true,
      Professional: true,
      Enterprise: true,
    },
    {
      feature: "Mobile Responsive",
      Starter: true,
      Professional: true,
      Enterprise: true,
    },
    {
      feature: "SEO Optimization",
      Starter: "Basic",
      Professional: true,
      Enterprise: true,
    },
    {
      feature: "Analytics Integration",
      Starter: "-",
      Professional: true,
      Enterprise: true,
    },
    {
      feature: "24/7 Support",
      Starter: "-",
      Professional: "-",
      Enterprise: true,
    },
    {
      feature: "Dedicated Support",
      Starter: "-",
      Professional: "-",
      Enterprise: true,
    },
  ];

  const renderCell = (value) => {
    if (value === true) return <CheckIcon />;
    if (value === "-") {
      return <span className="text-gray-400">-</span>;
    }
    return <span className="text-gray-700 text-sm">{value}</span>;
  };

  return (
    <section className="py-20 bg-[#F2F2F2]">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">
          Compare Our Packages
        </h2>
        <p className="text-gray-600 text-lg mt-2">
          Choose the perfect package for your needs
        </p>
      </div>

      {/* Table */}
      <div className="max-w-5xl mx-auto px-6">
        <table className="w-full text-left border-collapse">
          {/* Table Head */}
          <thead>
            <tr className="border-b border-gray-200">
              <th className="py-3 text-gray-900 font-medium">Feature</th>
              {packages.map((p, i) => (
                <th
                  key={i}
                  className="py-3 text-gray-900 font-medium text-center"
                >
                  {p.name}
                </th>
              ))}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {features.map((row, i) => (
              <tr key={i} className="border-b border-gray-200">
                <td className="py-4 text-gray-800">{row.feature}</td>

                <td className="py-4 text-center">{renderCell(row.Starter)}</td>
                <td className="py-4 text-center">
                  {renderCell(row.Professional)}
                </td>
                <td className="py-4 text-center">
                  {renderCell(row.Enterprise)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
