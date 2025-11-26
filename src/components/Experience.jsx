import {
  Briefcase,
  Calendar,
  MapPin,
  Sparkles,
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { useState } from "react";

const workExperiences = [
  {
    id: 1,
    company: "Consejeros y Corredores de Seguros",
    logo: "/projects/company1.png",
    position: "Full-Stack Developer",
    period: "Febrero 2025 - Presente",
    location: "Arequipa, Perú",
    website: "https://www.consejeros.com.pe/empresas",
    description:
      "Lideré el desarrollo de un sistema de automatización para la gestión del SOAT, optimizando los procesos de cotización, emisión y validación de pólizas. Diseñé la lógica de negocio, mejoré el rendimiento en el manejo de datos y coordiné integraciones con múltiples plataformas, asegurando estabilidad, seguridad y una experiencia fluida para los usuarios.",
    technologies: [
      "C#",
      ".NET",
      "Angular SSR",
      "SQL Server",
      "Stored Procedures",
      "API Integrations",
      "Layered Architecture",
    ],
  },
  {
    id: 2,
    company: "INCALPACA",
    logo: "/projects/company2.png",
    position: "Frontend Developer",
    period: "Febrero 2024 - Julio 2024",
    location: "Arequipa, Perú",
    website: "https://www.incalpaca.com",
    description:
      "Colaboré en el desarrollo de aplicaciones web empresariales alineadas a los requerimientos del negocio y participé en la creación de aplicaciones móviles, asegurando una experiencia moderna y adaptable. Apoyé el ciclo completo de desarrollo, desde análisis y diseño hasta pruebas e implementación, garantizando la integridad de la información en distintos entornos de base de datos.",
    technologies: ["GeneXus", "Flutter", "SQL Server", "MySQL", "PostgreSQL"],
  },
  {
    id: 3,
    company: "CARIP PERÚ",
    logo: "/projects/company3.png",
    position: "Junior Developer",
    period: "Enero 2023 - Enero 2024",
    location: "Arequipa, Perú",
    website: "https://www.caripperu.com",
    description:
      "Contribuí al desarrollo de soluciones web integrales, tanto en el frontend como en el backend. Implementé componentes reutilizables para mejorar la mantenibilidad y la coherencia visual, y colaboré en la lógica de negocio, asegurando una comunicación eficiente entre capas y una correcta gestión de datos y procesos.",
    technologies: [
      "React",
      "Django",
      "JavaScript",
      "Python",
      "REST APIs",
      "SQL",
    ],
  },
];

export const Experience = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openModal = (index) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const navigateNext = () => {
    setSelectedImageIndex((prev) => (prev + 1) % workExperiences.length);
  };

  const navigatePrev = () => {
    setSelectedImageIndex(
      (prev) => (prev - 1 + workExperiences.length) % workExperiences.length
    );
  };

  return (
    <section id="experience" className="py-32 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        {/* Título mejorado */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="h-6 w-6 text-primary animate-pulse" />
            <span className="text-sm uppercase tracking-wider text-primary font-semibold">
              Experiencia Profesional
            </span>
            <Sparkles className="h-6 w-6 text-primary animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Mis{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/60">
              Trabajos
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experiencia profesional en el desarrollo de soluciones tecnológicas,
            trabajando con equipos multidisciplinarios y aplicando las mejores
            prácticas de la industria.
          </p>
        </div>

        {/* Grid de experiencias laborales */}
        <div className="space-y-8">
          {workExperiences.map((work, index) => (
            <div
              key={work.id}
              className="group bg-card rounded-2xl shadow-xl border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(239,15,87,0.2)] overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                {/* Logo de la empresa - Lado izquierdo en desktop */}
                <div
                  className="relative md:w-[420px] lg:w-[520px] bg-gradient-to-br from-primary/10 via-primary/5 to-transparent overflow-hidden border-b-2 md:border-b-0 md:border-r-2 border-border group-hover:border-primary/30 transition-all cursor-pointer"
                  onClick={() => openModal(index)}
                >
                  {/* Efecto de resplandor */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Imagen escalada para llenar todo el contenedor */}
                  <div className="relative w-full h-80 md:h-96 lg:h-[28rem] flex items-center justify-center p-8 md:p-12">
                    <img
                      src={work.logo}
                      alt={work.company}
                      className="w-full h-full object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Indicador de click */}
                  <div className="absolute bottom-4 right-4 bg-primary/80 text-white text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    Click para ampliar
                  </div>
                </div>

                {/* Información - Lado derecho */}
                <div className="flex-1 p-8 md:p-10">
                  {/* Empresa y posición */}
                  <div className="mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {work.company}
                    </h3>
                    <p className="text-xl md:text-2xl font-semibold text-primary">
                      {work.position}
                    </p>
                  </div>

                  {/* Metadatos */}
                  <div className="flex flex-wrap gap-4 mb-6 text-muted-foreground text-sm">
                    <div className="flex items-center gap-2 bg-background/50 px-4 py-2 rounded-lg">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="font-medium">{work.period}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-background/50 px-4 py-2 rounded-lg">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="font-medium">{work.location}</span>
                    </div>
                    {work.website && (
                      <a
                        href={work.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-primary/10 hover:bg-primary/20 px-4 py-2 rounded-lg text-primary hover:scale-105 transition-all group/link"
                      >
                        <ExternalLink className="h-4 w-4 group-hover/link:rotate-12 transition-transform" />
                        <span className="font-medium">Sitio Web</span>
                      </a>
                    )}
                  </div>

                  {/* Descripción */}
                  <p className="text-muted-foreground leading-relaxed text-base mb-6">
                    {work.description}
                  </p>

                  {/* Tecnologías */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                      <Briefcase className="h-4 w-4 text-primary" />
                      <span>Tecnologías utilizadas:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {work.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 hover:bg-primary/20 hover:scale-105 transition-all cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal para ver la imagen en grande */}
        {selectedImageIndex !== null && (
          <div
            className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-2 sm:p-4 overflow-y-auto"
            onClick={closeModal}
          >
            <div
              className="relative w-full max-w-6xl my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botón cerrar */}
              <button
                onClick={closeModal}
                className="fixed top-4 right-4 sm:absolute sm:-top-14 sm:right-0 bg-primary text-white rounded-full p-2 sm:p-3 hover:bg-primary/80 transition-colors z-50 shadow-xl"
              >
                <X size={24} />
              </button>

              {/* Botón anterior - Desktop */}
              <button
                onClick={navigatePrev}
                className="hidden md:block absolute -left-16 lg:-left-20 top-1/2 -translate-y-1/2 bg-primary text-white rounded-full p-4 hover:bg-primary/80 hover:scale-110 transition-all z-50 shadow-2xl"
              >
                <ChevronLeft size={32} />
              </button>

              {/* Botón siguiente - Desktop */}
              <button
                onClick={navigateNext}
                className="hidden md:block absolute -right-16 lg:-right-20 top-1/2 -translate-y-1/2 bg-primary text-white rounded-full p-4 hover:bg-primary/80 hover:scale-110 transition-all z-50 shadow-2xl"
              >
                <ChevronRight size={32} />
              </button>

              {/* Contenido del modal */}
              <div className="bg-card rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 border-primary/20 max-h-[95vh] flex flex-col">
                {/* Imagen en el modal - con scroll si es necesario */}
                <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-6 sm:p-12 md:p-16 flex items-center justify-center overflow-auto">
                  <img
                    src={workExperiences[selectedImageIndex].logo}
                    alt={workExperiences[selectedImageIndex].company}
                    className="w-full max-w-4xl h-auto object-contain drop-shadow-2xl"
                  />
                </div>

                {/* Información de la empresa */}
                <div className="p-6 sm:p-8 md:p-10 bg-gradient-to-b from-card to-card/80 border-t-2 border-primary/20">
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 sm:mb-3 text-center">
                    {workExperiences[selectedImageIndex].company}
                  </h3>
                  <p className="text-lg sm:text-xl md:text-2xl text-primary font-semibold text-center mb-4">
                    {workExperiences[selectedImageIndex].position}
                  </p>
                  <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 text-xs sm:text-sm text-muted-foreground mt-4 sm:mt-6">
                    <div className="flex items-center gap-2 bg-background/50 px-3 py-1.5 rounded-lg">
                      <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                      <span>{workExperiences[selectedImageIndex].period}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-background/50 px-3 py-1.5 rounded-lg">
                      <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                      <span>
                        {workExperiences[selectedImageIndex].location}
                      </span>
                    </div>
                    {workExperiences[selectedImageIndex].website && (
                      <a
                        href={workExperiences[selectedImageIndex].website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground px-3 py-1.5 rounded-lg hover:scale-105 transition-all group/link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 group-hover/link:rotate-12 transition-transform" />
                        <span className="font-medium">Visitar Sitio</span>
                      </a>
                    )}
                  </div>
                  <div className="text-center mt-4 sm:mt-6">
                    <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                      {selectedImageIndex + 1} / {workExperiences.length}
                    </span>
                  </div>

                  {/* Botones de navegación - Mobile */}
                  <div className="flex md:hidden gap-3 mt-6 justify-center">
                    <button
                      onClick={navigatePrev}
                      className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/80 transition-all shadow-lg"
                    >
                      <ChevronLeft size={20} />
                      <span className="text-sm font-semibold">Anterior</span>
                    </button>
                    <button
                      onClick={navigateNext}
                      className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/80 transition-all shadow-lg"
                    >
                      <span className="text-sm font-semibold">Siguiente</span>
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
