'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Projects() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const projects = [
    {
      title: "Online Mobile Notepad",
      description: "Seamless note-taking experience with cloud sync. Users can capture thoughts, ideas, and export to PDF with an intuitive interface.",
      technologies: ["React Native", "TypeScript", "Gluestack", "Node.js", "MongoDB Atlas", "Express.js", "Expo"],
      image: "📱",
      gif: "/projects/notepad.gif",
      category: "Mobile",
      links: {
        ui: "https://github.com/kbimsara/NoteSketch-React-Native-App",
        server: "https://github.com/kbimsara/NoteSketch-Nodejs-Server"
      }
    },
    {
      title: "User Mail Verification System (SaaS)",
      description: "SaaS platform for developers to manage and verify users independently using cURL API. Includes API integration with Google Cloud Console.",
      technologies: ["PHP", "JavaScript", "Ajax", "MySQL", "Bootstrap", "OOP", "cURL", "JSON", "HTTPie", "API"],
      image: "🔐",
      gif: "/projects/saas.gif",
      category: "Web",
      link: "https://oncloudotp.kbxwebx-test.top"
    },
    {
      title: "MERN Stack To-Do with Docker",
      description: "Full-stack to-do application with add, delete, update, view functionality. Containerized with Docker and Nginx load balancing.",
      technologies: ["React.js", "Bootstrap", "Express.js", "MongoDB", "Docker", "Nginx"],
      image: "✅",
      gif: "/projects/todo.gif",
      category: "Web",
      link: "https://github.com/kbimsara/Docker-Dev"
    },
    {
      title: "Book Viewer/Publisher",
      description: "Platform for storing and managing book data and publisher information with REST API integration.",
      technologies: ["PHP", "Laravel", "React.js", "MySQL", "Bootstrap", "OOP", "REST API"],
      image: "📚",
      gif: "/projects/Bookstore.gif",
      category: "Web",
      links: {
        server: "https://github.com/kbimsara/Book-Publisher-Laravel-Server",
        client: "https://github.com/kbimsara/Book-Publisher-React-js-Client"
      }
    },
    {
      title: "Shop Management System",
      description: "Comprehensive POS system for inventory management with admin controls for items, stock tracking, and sales management.",
      technologies: ["Java", "GUI", "SQL", "OOP", "POS"],
      image: "🏪",
      gif: "/projects/stock.gif",
      category: "Desktop",
      link: "https://github.com/kbimsara/shop-management-system-Java"
    },
    {
      title: "Online Notepad",
      description: "Web-based notepad for quick note-taking and organization. Seamless interface for capturing and retrieving notes.",
      technologies: ["PHP", "JavaScript", "Ajax", "MySQL", "Bootstrap"],
      image: "📝",
      gif: "/projects/notepad2.gif",
      category: "Web",
      link: "https://notesketch.kbxwebx-test.top"
    },
    {
      title: "Flutter Mobile Notepad",
      description: "Local storage notepad app with intuitive UI, PDF export functionality, and offline-first architecture.",
      technologies: ["Flutter", "Dart", "Local Storage"],
      image: "📲",
      gif: "/projects/notetaking.gif",
      category: "Mobile",
      link: "https://github.com/kbimsara/myNote"
    },
    {
      title: "Music Player App",
      description: "Feature-rich music player with playlist management, music loading, and modern UI built with React Native.",
      technologies: ["React Native", "Expo", "Gluestack"],
      image: "🎵",
      gif: "/projects/music app2.gif",
      category: "Mobile",
      link: "https://github.com/kbimsara/Music-App"
    },
    {
      title: "Fuel Station Management System",
      description: "Android app for managing vehicle data and fuel station tank information with real-time tracking.",
      technologies: ["Java", "GUI", "SQLite", "OOP"],
      image: "⛽",
      gif: "/projects/fuil.gif",
      category: "Mobile",
      link: "https://github.com/kbimsara/Fuel-Station-Management-System-Android"
    },
    {
      title: "YouTube Video Downloader",
      description: "Desktop application to download YouTube videos and playlists in any resolution with threading support.",
      technologies: ["Python", "PyQt5", "Threading", "pytube"],
      image: "📥",
      gif: "/projects/pythonDownloader.gif",
      category: "Desktop",
      link: "https://github.com/kbimsara/Python-YT-Downloader"
    },
    {
      title: "Chat Web Application",
      description: "Real-time chat application with contact management and XML-based data exchange.",
      technologies: ["PHP", "Ajax", "MySQL", "Bootstrap", "OOP", "XML"],
      image: "💬",
      gif: "/projects/chat.gif",
      category: "Web",
      link: "https://github.com/kbimsara/ChatWebApplication-php"
    },
    {
      title: "Student Data Collection Form",
      description: "Laravel-based form system for collecting and managing student information efficiently.",
      technologies: ["PHP", "Laravel", "MySQL", "Bootstrap", "OOP"],
      image: "🎓",
      gif: "/projects/form.gif",
      category: "Web",
      link: "https://github.com/kbimsara/Student_data_collecting_Form_Laravel-Bootstrap_4.5"
    },
    {
      title: "ERP System",
      description: "Enterprise Resource Planning system with full CRUD operations for managing system data. Built with PHP and MySQL for efficient business data management.",
      technologies: ["PHP", "MySQL", "Bootstrap", "XAMPP", "CRUD"],
      image: "🏢",
      gif: "/projects/erp.gif",
      category: "Web",
      link: "https://github.com/kbimsara/erp-assignment"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Featured Projects
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12"></div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative h-[500px]"
              style={{ perspective: '1000px' }}
              onMouseEnter={() => setFlippedCard(index)}
              onMouseLeave={() => setFlippedCard(null)}
            >
              <div 
                className={`relative w-full h-full transition-transform duration-700`}
                style={{
                  transformStyle: 'preserve-3d',
                  transform: flippedCard === index ? 'rotateY(180deg)' : 'rotateY(0deg)'
                }}
              >
                {/* Front of Card */}
                <div 
                  className="absolute w-full h-full bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className="h-40 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-6xl relative">
                    {project.image}
                    <div className="absolute top-3 right-3">
                      <span className="px-3 py-1 text-xs font-semibold bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-white rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech, i) => (
                        <span 
                          key={i}
                          className="px-2.5 py-1 text-xs font-medium bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2.5 py-1 text-xs font-medium bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {project.link && (
                        <a 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline text-sm"
                        >
                          View Project
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                      {project.links && (
                        <>
                          {project.links.ui && (
                            <a 
                              href={project.links.ui}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-purple-600 dark:text-purple-400 font-medium hover:underline text-sm"
                            >
                              UI/APK
                              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          )}
                          {project.links.server && (
                            <a 
                              href={project.links.server}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-green-600 dark:text-green-400 font-medium hover:underline text-sm"
                            >
                              Server
                              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          )}
                          {project.links.client && (
                            <a 
                              href={project.links.client}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline text-sm"
                            >
                              Client
                              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 text-gray-400 dark:text-gray-600 text-xs">
                    Hover to preview
                  </div>
                </div>

                {/* Back of Card */}
                <div 
                  className="absolute w-full h-full bg-gray-900 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <div className="relative w-full h-full flex items-center justify-center p-4">
                    <Image
                      src={project.gif}
                      alt={`${project.title} preview`}
                      fill
                      className="object-contain"
                      unoptimized
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 text-xs font-semibold bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-white rounded-full">
                        Live Preview
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
