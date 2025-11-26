import { useState } from "react";
import { Code2, Database, Wrench, Users, Sparkles } from "lucide-react";

const skills = [
  // Lenguajes de Programación
  { name: "C#", level: 90, category: "languages" },
  { name: "TypeScript", level: 85, category: "languages" },
  { name: "JavaScript", level: 85, category: "languages" },
  { name: "SQL", level: 85, category: "languages" },
  { name: "Java", level: 75, category: "languages" },
  { name: "Dart", level: 70, category: "languages" },
  { name: "HTML5", level: 90, category: "languages" },
  { name: "CSS3", level: 90, category: "languages" },

  // Frameworks & Librerías
  { name: "Angular", level: 90, category: "frameworks" },
  { name: ".NET", level: 90, category: "frameworks" },
  { name: "ASP.NET Core", level: 90, category: "frameworks" },
  { name: "React", level: 80, category: "frameworks" },
  { name: "Django", level: 75, category: "frameworks" },
  { name: "Flutter", level: 75, category: "frameworks" },
  { name: "Node.js", level: 75, category: "frameworks" },

  // Bases de Datos
  { name: "SQL Server", level: 90, category: "databases" },
  { name: "PostgreSQL", level: 80, category: "databases" },
  { name: "MySQL", level: 80, category: "databases" },

  // Herramientas de Desarrollo
  { name: "Visual Studio", level: 90, category: "tools" },
  { name: "VS Code", level: 90, category: "tools" },
  { name: "Git", level: 90, category: "tools" },
  { name: "GitHub", level: 90, category: "tools" },
  { name: "Azure DevOps", level: 85, category: "tools" },
  { name: "Postman", level: 85, category: "tools" },
  { name: "Jira", level: 85, category: "tools" },
  { name: "Trello", level: 80, category: "tools" },
  { name: "JMeter", level: 70, category: "tools" },
  { name: "Power Automate", level: 75, category: "tools" },

  // Habilidades Blandas
  { name: "Comunicación Efectiva", level: 90, category: "soft-skills" },
  { name: "Trabajo en Equipo", level: 95, category: "soft-skills" },
  { name: "Pensamiento Analítico", level: 90, category: "soft-skills" },
  { name: "Adaptabilidad", level: 90, category: "soft-skills" },
  { name: "Proactividad", level: 90, category: "soft-skills" },
  { name: "Gestión del Tiempo", level: 85, category: "soft-skills" },
  { name: "Aprendizaje Autónomo", level: 95, category: "soft-skills" },
  { name: "Orientación a Resultados", level: 90, category: "soft-skills" },
];

const categories = [
  { id: "all", label: "Todas", icon: Sparkles },
  { id: "languages", label: "Lenguajes", icon: Code2 },
  { id: "frameworks", label: "Frameworks", icon: Code2 },
  { id: "databases", label: "Bases de Datos", icon: Database },
  { id: "tools", label: "Herramientas", icon: Wrench },
  { id: "soft-skills", label: "Habilidades Blandas", icon: Users },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-32 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        {/* Título mejorado */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="h-6 w-6 text-primary animate-pulse" />
            <span className="text-sm uppercase tracking-wider text-primary font-semibold">
              Mis Capacidades
            </span>
            <Sparkles className="h-6 w-6 text-primary animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Habilidades Técnicas &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/60">
              Intereses
            </span>
          </h2>
        </div>

        {/* Filtros mejorados con iconos */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-[0_0_20px_rgba(239,15,87,0.3)] scale-105"
                    : "bg-card border-2 border-border text-foreground hover:border-primary hover:scale-105"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{category.label}</span>
              </button>
            );
          })}
        </div>

        {/* Grid de habilidades mejorado */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="group bg-card p-6 rounded-2xl shadow-lg border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(239,15,87,0.15)] hover:scale-105"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-base text-foreground group-hover:text-primary transition-colors">
                  {skill.name}
                </h3>
                <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-secondary/50 h-3 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-primary to-primary/70 h-3 rounded-full origin-left animate-[grow_1.5s_ease-out] shadow-[0_0_10px_rgba(239,15,87,0.5)]"
                  style={{ width: skill.level + "%" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
