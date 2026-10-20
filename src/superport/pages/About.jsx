const About = ({
  title = "About Me",
  storyTitle = "My Story",
  story = "",
  identity = {},
  highlights = [],
}) => {
  return (
    <section
      id="about"
      className="relative py-32 px-6 bg-black text-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">

        {/* ===== STORY ===== */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            {title}
          </h2>

          <p className="text-[#FFB900] uppercase tracking-widest text-sm mb-4">
            {storyTitle}
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">
            {story}
          </p>
        </div>

        {/* ===== IDENTITY PILLS (HOVER ONLY HERE) ===== */}
        {Object.keys(identity).length > 0 && (
          <div className="flex flex-wrap gap-6 mb-24">
            {Object.entries(identity).map(([key, value], index) => (
              <div
                key={index}
                className="
                  px-7 py-4 rounded-full
                  bg-white/5 backdrop-blur-xl
                  border border-white/15
                  text-sm md:text-base font-medium
                  flex items-center gap-2
                  transition-all duration-300
                  cursor-default

                  hover:border-[#FFB900]
                  hover:bg-white/10
                  hover:-translate-y-1
                  hover:shadow-[0_0_18px_rgba(255,185,0,0.18)]
                "
              >
                <span className="text-[#FFB900] font-semibold">
                  {key}:
                </span>
                <span className="text-gray-200">
                  {value}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* ===== HIGHLIGHTS ===== */}
        {highlights.length > 0 && (
          <div className="space-y-12">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex gap-6 items-start"
              >
                {/* Number */}
                <div className="text-[#FFB900] text-3xl font-extrabold shrink-0">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default About;
