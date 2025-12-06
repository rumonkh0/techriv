export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 pt-17 pb-10 px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-10">
        {/* Logo + Description */}
        <div>
          <h2 className="text-xl font-semibold text-white px-10">TechRiv</h2>
          <p className="mt-3 text-sm font-light leading-relaxed">
            Empowering digital transformation through design and innovation.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm font-light">
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Portfolio
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-white mb-3">Contact</h3>
          <ul className="space-y-2 text-sm font-light">
            <li className="flex items-center gap-2">
              <span>📧</span> info@techriv.com
            </li>
            <li className="flex items-center gap-2">
              <span>📞</span> +880 1234 567890
            </li>
            <li className="flex items-center gap-2">
              <span>📍</span> Dhaka, Bangladesh
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex items-center gap-4 text-xl">
            <SocialWrapper >
              🌐
            </SocialWrapper>
            <SocialWrapper>
              💼
            </SocialWrapper>
            <SocialWrapper>
              📸
            </SocialWrapper>
            <SocialWrapper>
              🏀
            </SocialWrapper>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-white mt-10 pt-6 text-center text-sm">
        Copyright © 2025 TechRiv. All rights reserved. Built with{" "}
        <span className="text-red-500">❤</span> by TechRiv Team
      </div>
    </footer>
  );
}

const SocialWrapper = ({ children }) => (
  <a className="h-10 w-10 bg-[#232323] rounded-xl flex justify-center items-center cursor-pointer hover:text-white">
    {children}
  </a>
);
