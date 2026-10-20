const Experience = ({
  title = "Experience",
  subtitle = "Where I applied my skills",
  experiences = [],
}) => {
  return (
    <section
      id="experience"
      className="relative py-28 px-6 bg-gradient-to-b from-black via-[#0b0b0b] to-black text-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* ===== HEADER ===== */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            {title}
          </h2>
          <p className="text-gray-400 mb-6">
            {subtitle}
          </p>
          <div className="w-16 h-1 bg-amber-400 mx-auto rounded"></div>
        </div>

        {/* ===== TIMELINE ===== */}
        <div className="relative border-l border-white/15 pl-8 space-y-14">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">

              {/* Dot */}
              <span className="absolute -left-[14px] top-1 w-6 h-6 rounded-full bg-amber-400 border-4 border-black"></span>

              {/* Card */}
              <div
                className="bg-white/5 backdrop-blur-xl 
                border border-white/10 rounded-3xl p-8
                transition-all duration-300
                hover:border-amber-400"
              >
                
                {/* Role & Time */}
                <div className="flex flex-wrap justify-between items-center mb-4">
                  <h3 className="text-xl md:text-2xl font-semibold">
                    {exp.role}
                  </h3>
                  <span className="text-sm text-amber-400">
                    {exp.duration}
                  </span>
                </div>

                {/* Company */}
                <p className="text-gray-300 font-medium mb-4">
                  {exp.company}
                </p>

                {/* Work */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {exp.work}
                </p>

                {/* Impact & Learning */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-sm font-semibold text-amber-400 mb-1">
                      Impact
                    </h4>
                    <p className="text-sm text-gray-300">
                      {exp.impact}
                    </p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-sm font-semibold text-amber-400 mb-1">
                      Learning
                    </h4>
                    <p className="text-sm text-gray-300">
                      {exp.learning}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {experiences.length === 0 && (
          <p className="text-center text-gray-400 mt-12">
            Experience details will be added soon 🚀
          </p>
        )}
      </div>
    </section>
  );
};

export default Experience;
