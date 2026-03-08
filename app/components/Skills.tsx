'use client';

const skillGroups = [
  {
    category: 'Languages',
    icon: '{ }',
    color: 'blue',
    skills: ['JavaScript', 'TypeScript', 'Python', 'PHP', 'Java', 'Dart', 'C'],
  },
  {
    category: 'Frontend',
    icon: '⬡',
    color: 'purple',
    skills: ['React.js', 'Next.js', 'React Native', 'Flutter', 'Three.js', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    category: 'Backend',
    icon: '⚙',
    color: 'green',
    skills: ['Node.js', 'Express.js', 'Laravel', 'Django'],
  },
  {
    category: 'Databases',
    icon: '▦',
    color: 'yellow',
    skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'SQLite'],
  },
  {
    category: 'DevOps & Cloud',
    icon: '☁',
    color: 'cyan',
    skills: ['Docker', 'Kubernetes', 'Terraform', 'GCP', 'AWS'],
  },
  {
    category: 'CI/CD & Monitoring',
    icon: '↻',
    color: 'orange',
    skills: ['GitHub Actions', 'Jenkins', 'Grafana', 'Prometheus'],
  },
  {
    category: 'Tools',
    icon: '⚒',
    color: 'pink',
    skills: ['Git', 'Postman', 'Firebase', 'Arduino'],
  },
];

const colorMap: Record<string, { card: string; icon: string; badge: string; dot: string }> = {
  blue: {
    card: 'hover:border-blue-500/40 hover:shadow-blue-500/10',
    icon: 'text-blue-400 bg-blue-400/10',
    badge: 'bg-blue-400/10 border-blue-400/30 text-blue-300',
    dot: 'bg-blue-400',
  },
  purple: {
    card: 'hover:border-purple-500/40 hover:shadow-purple-500/10',
    icon: 'text-purple-400 bg-purple-400/10',
    badge: 'bg-purple-400/10 border-purple-400/30 text-purple-300',
    dot: 'bg-purple-400',
  },
  green: {
    card: 'hover:border-green-500/40 hover:shadow-green-500/10',
    icon: 'text-green-400 bg-green-400/10',
    badge: 'bg-green-400/10 border-green-400/30 text-green-300',
    dot: 'bg-green-400',
  },
  yellow: {
    card: 'hover:border-yellow-500/40 hover:shadow-yellow-500/10',
    icon: 'text-yellow-400 bg-yellow-400/10',
    badge: 'bg-yellow-400/10 border-yellow-400/30 text-yellow-300',
    dot: 'bg-yellow-400',
  },
  cyan: {
    card: 'hover:border-cyan-500/40 hover:shadow-cyan-500/10',
    icon: 'text-cyan-400 bg-cyan-400/10',
    badge: 'bg-cyan-400/10 border-cyan-400/30 text-cyan-300',
    dot: 'bg-cyan-400',
  },
  orange: {
    card: 'hover:border-orange-500/40 hover:shadow-orange-500/10',
    icon: 'text-orange-400 bg-orange-400/10',
    badge: 'bg-orange-400/10 border-orange-400/30 text-orange-300',
    dot: 'bg-orange-400',
  },
  pink: {
    card: 'hover:border-pink-500/40 hover:shadow-pink-500/10',
    icon: 'text-pink-400 bg-pink-400/10',
    badge: 'bg-pink-400/10 border-pink-400/30 text-pink-300',
    dot: 'bg-pink-400',
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-4">Expertise</p>
        <h2 className="text-4xl font-bold text-white mb-16 section-heading">Skills</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group) => {
            const c = colorMap[group.color];
            return (
              <div
                key={group.category}
                className={`glass rounded-2xl p-6 transition-all duration-300 hover:shadow-lg ${c.card}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-lg font-mono w-9 h-9 rounded-lg flex items-center justify-center ${c.icon}`}>
                    {group.icon}
                  </span>
                  <h3 className="text-white font-semibold">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full border transition-all duration-200 hover:scale-105 cursor-default ${c.badge}`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
