export default function Header() {
  return (
    <header className="flex justify-evenly items-center px-2 py-4 rounded-tl-[20px] rounded-br-[20px] shadow-[0_0_15px_1px_rgba(0,0,0,0.15)]">
      <div className="font-bold text-lg">TechRiv</div>
      <nav>
        <ul className="flex gap-8 text-sm text-[#535353]">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Products</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="bg-[#0F53C3] text-[#fbfbfb] rounded-xl px-6 py-2.5">Let&apos;s Talk</div>
    </header>
  );
}
