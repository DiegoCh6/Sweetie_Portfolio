import { Briefcase, Code, MonitorCheck, Sparkles } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        {/* Título centrado con decoración */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="h-6 w-6 text-primary animate-pulse" />
            <span className="text-sm uppercase tracking-wider text-primary font-semibold">
              Conóceme
            </span>
            <Sparkles className="h-6 w-6 text-primary animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Sobre{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/60">
              Mí
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Contenido de texto - mejorado */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                Apasionada por construir{" "}
                <span className="text-primary">soluciones escalables</span>
              </h3>

              <div className="h-1 w-24 bg-gradient-to-r from-primary to-transparent mx-auto lg:mx-0"></div>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Full-Stack Developer con experiencia en el desarrollo de{" "}
                <span className="text-foreground font-semibold">
                  aplicaciones web y móviles empresariales
                </span>{" "}
                utilizando .NET, Angular y SQL Server, respaldada por bases
                sólidas en arquitectura y buenas prácticas.
              </p>

              <p>
                En constante aprendizaje, incorporando nuevas tecnologías y
                metodologías para entregar{" "}
                <span className="text-foreground font-semibold">
                  productos digitales eficientes, fiables y de alto impacto
                </span>
                .
              </p>
            </div>

            {/* Botones mejorados */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start">
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(239,15,87,0.4)] hover:scale-105 active:scale-95"
              >
                <span className="relative z-10">Contáctame</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
              </a>

              <a
                href="/projects/CV_Brenda.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-primary text-primary font-semibold transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-105 active:scale-95"
              >
                Descargar CV
              </a>
            </div>
          </div>

          {/* Tarjetas de características - mejoradas */}
          <div className="space-y-6">
            <div className="group gradient-border p-8 card-hover bg-card/50 backdrop-blur-sm">
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300">
                  <Code className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1 text-left">
                  <h4 className="font-bold text-xl mb-3 text-foreground">
                    Desarrollo de Software
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Desarrollo aplicaciones eficientes y mantenibles con{" "}
                    <span className="text-foreground font-semibold">.NET</span>,{" "}
                    <span className="text-foreground font-semibold">
                      Angular
                    </span>
                    ,{" "}
                    <span className="text-foreground font-semibold">React</span>{" "}
                    y{" "}
                    <span className="text-foreground font-semibold">
                      Django
                    </span>
                    , integrando frontend, backend y bases de datos para
                    soluciones completas y orientadas al negocio.
                  </p>
                </div>
              </div>
            </div>

            <div className="group gradient-border p-8 card-hover bg-card/50 backdrop-blur-sm">
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300">
                  <MonitorCheck className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1 text-left">
                  <h4 className="font-bold text-xl mb-3 text-foreground">
                    Web & Mobile
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Implementación de soluciones multiplataforma utilizando{" "}
                    <span className="text-foreground font-semibold">
                      Angular SSR
                    </span>{" "}
                    y{" "}
                    <span className="text-foreground font-semibold">
                      Flutter
                    </span>
                    , enfocadas en experiencia de usuario, rendimiento y
                    compatibilidad entre dispositivos.
                  </p>
                </div>
              </div>
            </div>

            <div className="group gradient-border p-8 card-hover bg-card/50 backdrop-blur-sm">
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1 text-left">
                  <h4 className="font-bold text-xl mb-3 text-foreground">
                    Trabajo en Equipo & Agilidad
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Experiencia trabajando bajo{" "}
                    <span className="text-foreground font-semibold">Scrum</span>
                    , contribuyendo al análisis, diseño, desarrollo y mejora
                    continua para asegurar entregas constantes y objetivos
                    alineados con el negocio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
