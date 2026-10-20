import { useEffect, useState } from "react";

const Hero = ({
  name = "piyush shakya",
  roles = [],
  description = "",
  phone = "919999999999",
}) => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  // Typing effect (clean – no cursor)
  useEffect(() => {
    if (!roles.length) return;

    const currentRole = roles[roleIndex];

    if (charIndex < currentRole.length) {
      const t = setTimeout(() => {
        setText((prev) => prev + currentRole.charAt(charIndex));
        setCharIndex(charIndex + 1);
      }, 80);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setText("");
        setCharIndex(0);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 1600);
      return () => clearTimeout(t);
    }
  }, [charIndex, roleIndex, roles]);

  return (
    <section
      id="home"
      className="min-h-screen bg-black text-white flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-24 grid grid-cols-1 lg:grid-cols-2 gap-20">

        {/* ================= LEFT – TEXT ================= */}
        <div className="flex flex-col justify-center">

          <p className="uppercase tracking-[0.35em] text-sm text-[#FFB900] mb-6">
            Personal Portfolio
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            {name}
          </h1>

          <div
            className="inline-block w-fit px-6 py-3 mb-8
            border border-[#FFB900]/40 rounded-full
            text-[#FFB900] text-lg md:text-xl font-semibold"
          >
            {text}
          </div>

          <p className="text-gray-300 leading-relaxed max-w-xl mb-10">
            {description}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="px-10 py-4 rounded-xl font-semibold
              bg-[#FFB900] text-black hover:opacity-90 transition"
            >
              Contact Me
            </a>

            <a
              href={`tel:${phone}`}
              className="px-10 py-4 rounded-xl font-semibold
              border border-[#FFB900] text-[#FFB900]
              hover:bg-[#FFB900] hover:text-black transition"
            >
              Call Me
            </a>
          </div>
        </div>

        {/* ================= RIGHT – INFO CARDS (HOVER ONLY HERE) ================= */}
        <div className="flex flex-col justify-center gap-8">

          {/* Card 1 */}
          <div
            className="p-6 rounded-2xl bg-white/5 border border-white/10
            transition-all duration-300
            hover:border-[#FFB900]
            hover:-translate-y-1"
          >
            <h3 className="text-xl font-semibold mb-2 text-[#FFB900]">
              What I Do
            </h3>
            <p className="text-gray-300 leading-relaxed">
              I design and develop responsive, modern and scalable web
              interfaces using React, Tailwind CSS and modern frontend tools.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="p-6 rounded-2xl bg-white/5 border border-white/10
            transition-all duration-300
            hover:border-[#FFB900]
            hover:-translate-y-1"
          >
            <h3 className="text-xl font-semibold mb-2 text-[#FFB900]">
              My Focus
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Clean UI, smooth UX, performance optimization and writing
              maintainable code that scales with real-world projects.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="p-6 rounded-2xl bg-white/5 border border-white/10
            transition-all duration-300
            hover:border-[#FFB900]
            hover:-translate-y-1"
          >
            <h3 className="text-xl font-semibold mb-2 text-[#FFB900]">
              Availability
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Open for internships, freelance work and frontend developer roles.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
