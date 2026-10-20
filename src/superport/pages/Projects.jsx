const Projects = ({
  title = "Projects",
  subtitle = "Selected work that reflects my learning & problem-solving",
  projects = [],
}) => {
  return (
    <section
      id="projects"
      className="relative py-28 px-6 bg-black text-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* ===== HEADER ===== */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            {title}
          </h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            {subtitle}
          </p>
          <div className="w-16 h-1 bg-amber-400 mx-auto rounded"></div>
        </div>

        {/* ===== PROJECT STORY PANELS ===== */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-white/5 backdrop-blur-xl
              border border-white/10 rounded-3xl p-8 md:p-10
              transition-all duration-300
              hover:border-amber-400"
            >
              {/* Accent strip (same as Skill / Experience) */}
              <span className="absolute left-0 top-10 w-1 h-16 bg-amber-400 rounded-r"></span>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                {project.name}
              </h3>

              {/* Short Summary */}
              <p className="text-gray-300 mb-8 max-w-3xl">
                {project.summary}
              </p>

              {/* Story Grid */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/5 rounded-xl p-5">
                  <h4 className="text-sm font-semibold text-amber-400 mb-2">
                    Idea
                  </h4>
                  <p className="text-sm text-gray-300">
                    {project.idea}
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-5">
                  <h4 className="text-sm font-semibold text-amber-400 mb-2">
                    Implementation
                  </h4>
                  <p className="text-sm text-gray-300">
                    {project.implementation}
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-5">
                  <h4 className="text-sm font-semibold text-amber-400 mb-2">
                    Result
                  </h4>
                  <p className="text-sm text-gray-300">
                    {project.result}
                  </p>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3 mb-8">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 text-sm rounded-full cursor-pointer
                    bg-white/10 border border-white/15 text-gray-200
                    transition-all duration-300
                    hover:border-amber-400
                    hover:text-amber-400
                    hover:bg-amber-400/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-4">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3 rounded-xl font-semibold 
                    bg-amber-400 text-black hover:opacity-90 transition"
                  >
                    Live Demo
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3 rounded-xl font-semibold 
                    border border-white/20 text-white 
                    hover:border-amber-400 hover:text-amber-400 transition"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {projects.length === 0 && (
          <p className="text-center text-gray-400 mt-16">
            Projects will be added soon 🚀
          </p>
        )}
      </div>
    </section>
  );
};

export default Projects;
