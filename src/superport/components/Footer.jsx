const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative text-white overflow-hidden">

      {/* ===== LIGHT REFLECTIVE BACKGROUND ===== */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(
              circle at top,
              rgba(255,255,255,0.10),
              transparent 60%
            ),
            linear-gradient(
              to bottom,
              rgba(255,255,255,0.06),
              rgba(0,0,0,0.7)
            )
          `,
        }}
      />

      {/* ===== GLASS LAYER ===== */}
      <div className="backdrop-blur-xl border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-20">

          {/* ===== MAIN GRID ===== */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

            {/* ===== BRAND ===== */}
            <div className="md:col-span-2">
              <h3 className="text-3xl font-extrabold mb-3">
                Piyush Shakya
              </h3>

              <p className="text-amber-400 font-semibold mb-4">
                Frontend Developer | CSE Student
              </p>

              <p className="text-gray-300 max-w-md leading-relaxed mb-6">
                I build clean, modern and user-friendly web interfaces using
                React and Tailwind CSS, with a focus on performance and clarity.
              </p>

              <p className="text-sm text-gray-400">
                Always learning • Always building • Always improving
              </p>
            </div>

            {/* ===== CORE SKILLS ===== */}
            <div>
              <h4 className="text-lg font-semibold mb-5">
                Core Skills
              </h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>▸ React.js</li>
                <li>▸ Tailwind CSS</li>
                <li>▸ JavaScript (ES6+)</li>
                <li>▸ Responsive UI</li>
                <li>▸ Git & GitHub</li>
              </ul>
            </div>

            {/* ===== QUICK LINKS ===== */}
            <div>
              <h4 className="text-lg font-semibold mb-5">
                Quick Links
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#home" className="text-gray-400 hover:text-amber-400 transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-400 hover:text-amber-400 transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-gray-400 hover:text-amber-400 transition">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#experience" className="text-gray-400 hover:text-amber-400 transition">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-400 hover:text-amber-400 transition">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-amber-400 transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* ===== CONNECT SECTION ===== */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 
          rounded-3xl p-10 mb-16">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">

              <div>
                <h4 className="text-2xl font-semibold mb-2">
                  Let’s Connect
                </h4>
                <p className="text-gray-300 max-w-md">
                  Open for internships, freelance projects, and learning
                  opportunities. Let’s build something meaningful together.
                </p>
              </div>

              <div className="flex gap-4 text-xl">
                <a
                  href="https://github.com/username"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-full bg-white/10 border border-white/10 
                  flex items-center justify-center hover:bg-amber-400 hover:text-black transition"
                >
                  🐙
                </a>

                <a
                  href="https://linkedin.com/in/username"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-full bg-white/10 border border-white/10 
                  flex items-center justify-center hover:bg-amber-400 hover:text-black transition"
                >
                  💼
                </a>

                <a
                  href="mailto:piyush@example.com"
                  className="w-12 h-12 rounded-full bg-white/10 border border-white/10 
                  flex items-center justify-center hover:bg-amber-400 hover:text-black transition"
                >
                  ✉️
                </a>
              </div>

            </div>
          </div>

          {/* ===== BOTTOM BAR ===== */}
          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row 
          items-center justify-between gap-4 text-sm text-gray-400">
            <p>
              © {year} Piyush Shakya. All rights reserved.
            </p>
            <p>
              Designed & built with ❤️ using React & Tailwind CSS
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
