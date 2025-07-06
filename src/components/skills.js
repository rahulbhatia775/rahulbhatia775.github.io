function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: ["Python", "Java", "C"],
      gradient: "from-purple-500 to-indigo-600",
      bgGradient: "from-gray-900/50 to-gray-800/50",
    },
    {
      title: "AI & ML Tools",
      icon: "🧠",
      skills: ["NumPy", "Pandas","MatPlotlib"],
      gradient: "from-blue-500 to-blue-700",
      bgGradient: "from-gray-900/50 to-gray-800/50",
    },
    {
      title: "Web Development",
      icon: "🌐",
      skills: ["React", "Tailwind CSS", "HTML", "CSS","JavaScript"],
      gradient: "from-green-500 to-emerald-600",
      bgGradient: "from-gray-900/50 to-gray-800/50",
    },
    {
      title: "Tools & Platforms",
      icon: "🛠️",
      skills: ["Git", "GitHub", "VS Code"],
      gradient: "from-orange-500 to-red-600",
      bgGradient: "from-gray-900/50 to-gray-800/50",
    },
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-black via-gray-900 to-gray-800 relative overflow-hidden">
      {/* Decorative floating blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2 animate-float"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-green-500/10 to-blue-500/10 rounded-full blur-3xl opacity-30 translate-x-1/2 translate-y-1/2 animate-float" style={{ animationDelay: "2s" }}></div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className=" text-red-500">
              Skills & Technologies
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-indigo-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Tools and tech I use to build smart, scalable, and elegant solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`group bg-gradient-to-br ${category.bgGradient} rounded-2xl p-8 shadow-2xl border border-gray-700/40 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-red-500/50 hover:border-indigo-500/30`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-center mb-6">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-2xl text-white text-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 backdrop-blur-sm px-4 py-3 rounded-xl text-gray-300 font-medium text-center transition-all duration-300 hover:bg-indigo-500/20 hover:scale-105 cursor-default hover:border-red-800">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
