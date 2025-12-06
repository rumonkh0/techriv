import Link from "next/link";

export default function Header() {
  return (
    <header
      className="
      sticky top-0 z-50
      flex justify-around items-center 
      px-6 py-4 
      rounded-tl-[20px] rounded-br-[20px]
      shadow-[0_0_15px_1px_rgba(0,0,0,0.15)]
      bg-white
    "
    >
      <div className="font-bold text-xl tracking-wide text-[#0F53C3] cursor-pointer">
        TechRiv
      </div>

      <nav aria-label="Main Navigation">
        <ul className="flex gap-8 text-sm text-[#535353] font-medium">
          <li className="cursor-pointer hover:text-[#0F53C3] transition-colors">
            <Link href="/">Home</Link>
          </li>

          <li className="cursor-pointer hover:text-[#0F53C3] transition-colors">
            <Link href="/about">About</Link>
          </li>

          <li className="cursor-pointer hover:text-[#0F53C3] transition-colors">
            <Link href="/services">Services</Link>
          </li>

          <li className="cursor-pointer hover:text-[#0F53C3] transition-colors">
            <Link href="/products">Products</Link>
          </li>

          <li className="cursor-pointer hover:text-[#0F53C3] transition-colors">
            <Link href="/portfolio">Portfolio</Link>
          </li>

          <li className="cursor-pointer hover:text-[#0F53C3] transition-colors">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Link
        href="/contact"
        className="
          bg-[#0F53C3] text-white 
          rounded-xl px-6 py-2.5 
          font-medium
          hover:bg-[#0d45a3] 
          transition-colors
        "
      >
        Let&apos;s Talk
      </Link>
    </header>
  );
}
