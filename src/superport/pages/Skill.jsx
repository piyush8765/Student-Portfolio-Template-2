const Skill = ({
  title = "Skills",
  subtitle = "Technologies & areas I work with",
  categories = [],
}) => {
  return (
    <section id="skills" className="bg-black text-white py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-16">

        {/* ===== Heading ===== */}
        <div className="text-center mb-20">
          <p className="text-xs uppercase tracking-[0.35em] text-[#FFB900] mb-4">
            Expertise
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            {title}
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            {subtitle}
          </p>

          <div className="w-24 h-[2px] bg-[#FFB900] mx-auto"></div>
        </div>

        {/* ===== Skill Categories ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="relative bg-white/5 border border-white/10 
              rounded-2xl p-8 hover:border-[#FFB900]/40 transition"
            >
              {/* Accent strip (ONLY strip, no dot) */}
              <span className="absolute left-0 top-10 w-1 h-16 bg-[#FFB900] rounded-r"></span>

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-3">
                {cat.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 mb-6 leading-relaxed">
                {cat.description}
              </p>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full text-sm cursor-pointer
                    bg-white/10 border border-white/10 text-gray-300
                    transition-all duration-300
                    hover:border-[#FFB900]
                    hover:text-[#FFB900]
                    hover:bg-[#FFB900]/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {categories.length === 0 && (
          <p className="text-center text-gray-400 mt-16">
            Skills will be added soon 🚀
          </p>
        )}
      </div>
    </section>
  );
};

export default Skill;
