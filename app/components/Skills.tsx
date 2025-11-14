export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "HTML/CSS"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "Python", "FastAPI", "PostgreSQL", "MongoDB"]
    },
    {
      category: "Tools & Others",
      skills: ["Git", "Docker", "AWS", "Vercel", "Figma", "Jest"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Skills & Technologies
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12"></div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3"></span>
                {category.category}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, i) => (
                  <div 
                    key={i}
                    className="flex items-center space-x-3 group"
                  >
                    <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full group-hover:scale-150 transition-transform"></div>
                    <span className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                      {skill}
                    </span>
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
