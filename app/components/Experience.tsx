export default function Experience() {
  const experiences = [
    {
      role: "Software Developer Trainee",
      company: "Mahapola Ports And Maritime Academy",
      period: "July 2022 - January 2023",
      duration: "7 months",
      description: "Developed and maintained web applications using modern technologies. Worked on full-stack development projects with a focus on creating efficient and scalable solutions.",
      technologies: ["PHP", "JavaScript", "HTML", "CSS", "SQL", "Ajax", "MySQL", "Bootstrap 4.6/5", "OOP"],
      highlights: [
        "Built responsive web applications using PHP and JavaScript",
        "Implemented database solutions with MySQL",
        "Applied OOP principles for maintainable code architecture",
        "Collaborated with team members on various projects"
      ]
    }
  ];

  const education = [
    {
      degree: "B.Sc. Hons in Software Engineering",
      institution: "SLTC Research University",
      location: "Padukka, Sri Lanka",
      period: "2022 - Present",
      status: "Undergraduate",
      description: "Pursuing a comprehensive software engineering degree with focus on modern development practices, algorithms, and software architecture."
    },
    {
      degree: "Software Developer",
      institution: "Vocational Training Authority",
      location: "Kalutara South",
      period: "2021 - 2022",
      status: "NVQ Level 4",
      description: "Completed vocational training in software development with practical hands-on experience."
    },
    {
      degree: "GCE Advanced Level",
      institution: "Kalutara Vidyalaya",
      location: "Kalutara",
      period: "2020",
      status: "2C, 1S",
      description: "Completed Advanced Level examination in Technology stream."
    },
    {
      degree: "Certificate in Applied Information Technology",
      institution: "SLT Moratuwa",
      location: "Moratuwa",
      period: "2018",
      status: "Completed",
      description: "Foundational IT certification covering essential computer skills and technologies."
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Experience & Education
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12"></div>
        
        {/* Work Experience Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
            <span className="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
            Work Experience
          </h3>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-blue-600"
              >
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      {exp.role}
                    </h4>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-1">
                      {exp.company}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {exp.period} · {exp.duration}
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="mb-4">
                  <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Key Highlights:
                  </h5>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600 dark:text-gray-400 text-sm">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                    Tech Stack:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
            <span className="w-3 h-3 bg-purple-600 rounded-full mr-3"></span>
            Education
          </h3>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div 
                key={index}
                className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-purple-600"
              >
                <div className="flex flex-wrap justify-between items-start mb-3">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-lg text-purple-600 dark:text-purple-400 font-semibold mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {edu.location}
                    </p>
                  </div>
                  <div className="text-right mt-2 sm:mt-0">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      {edu.period}
                    </p>
                    <span className="inline-block mt-1 px-3 py-1 text-xs font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full">
                      {edu.status}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
