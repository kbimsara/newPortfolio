export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with payment integration, inventory management, and real-time analytics.",
      technologies: ["Next.js", "TypeScript", "Prisma", "Stripe"],
      image: "🛍️",
      link: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      image: "✓",
      link: "#"
    },
    {
      title: "AI Content Generator",
      description: "AI-powered content generation platform that helps create engaging content for blogs, social media, and marketing.",
      technologies: ["Python", "OpenAI", "FastAPI", "React"],
      image: "🤖",
      link: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather dashboard with interactive maps, forecasts, and weather alerts for multiple locations.",
      technologies: ["Vue.js", "Weather API", "Chart.js", "Tailwind"],
      image: "🌤️",
      link: "#"
    },
    {
      title: "Portfolio CMS",
      description: "Custom content management system for creating and managing portfolio websites with drag-and-drop builder.",
      technologies: ["Next.js", "Sanity", "TypeScript", "Vercel"],
      image: "📝",
      link: "#"
    },
    {
      title: "Fitness Tracker",
      description: "Mobile-first fitness tracking app with workout plans, progress tracking, and nutrition logging.",
      technologies: ["React Native", "Firebase", "Redux", "Node.js"],
      image: "💪",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Featured Projects
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12"></div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="h-48 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-6xl">
                {project.image}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                  View Project
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
