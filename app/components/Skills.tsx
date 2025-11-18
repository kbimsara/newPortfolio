export default function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Java", "Python", "PHP", "C", "JavaScript", "TypeScript", "HTML/CSS", "SQL"]
    },
    {
      category: "Frameworks & Libraries",
      skills: ["React", "React Native", "Next.js", "Node.js", "Express.js", "Laravel", "Bootstrap", "Tailwind CSS", "Flutter", "PyQt5", "Ajax"]
    },
    {
      category: "Databases & Cloud",
      skills: ["MySQL", "MongoDB", "SQLite", "AWS", "Azure", "MongoDB Atlas"]
    },
    {
      category: "Tools & Technologies",
      skills: ["Git", "Docker", "VS Code", "Android Studio", "IntelliJ IDEA", "PhpStorm", "PyCharm", "NetBeans", "Adobe XD", "Photoshop", "Vercel", "Nginx"]
    },
    {
      category: "Concepts & Practices",
      skills: ["OOP", "REST API", "Web Design", "UI/UX Design", "Responsive Design", "cURL", "Socket.io", "Arduino", "Load Balancing"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Skills & Technologies
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12"></div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3"></span>
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1.5 text-sm font-medium bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-gray-700 dark:text-gray-300 rounded-full hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-900/50 dark:hover:to-purple-900/50 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
