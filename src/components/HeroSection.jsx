import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 py-20 pb-24 md:pb-20"
    >
      <div className="container max-w-6xl mx-auto z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16 mb-16 md:mb-0">
          {/* Contenido de texto - Centrado verticalmente */}
          <div className="flex-1 flex flex-col justify-center text-center md:text-left space-y-6 md:space-y-8">
            {/* Saludo y nombre */}
            <div className="space-y-2">
              <h2 className="text-xl md:text-2xl font-medium text-muted-foreground opacity-0 animate-fade-in">
                👋 Hola, soy
              </h2>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                <span className="block text-primary opacity-0 animate-fade-in-delay-1">
                  Brenda Huarcaya
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 opacity-0 animate-fade-in-delay-2 mt-2">
                  Full-Stack Developer
                </span>
              </h1>
            </div>

            {/* Descripción */}
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto md:mx-0 opacity-0 animate-fade-in-delay-3">
              Especializada en soluciones empresariales escalables. Construyo
              aplicaciones web y móviles con{" "}
              <span className="text-foreground font-semibold">.NET</span>,{" "}
              <span className="text-foreground font-semibold">Angular</span> y{" "}
              <span className="text-foreground font-semibold">SQL Server</span>,
              enfocadas en rendimiento y resultados reales.
            </p>

            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start opacity-0 animate-fade-in-delay-4">
              <a
                href="#experience"
                className="group relative inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium transition-all duration-300 hover:shadow-[0_0_30px_rgba(239,15,87,0.4)] hover:scale-105 active:scale-95 overflow-hidden"
              >
                <span className="relative z-10">Ver Mi Trabajo</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full border-2 border-primary text-primary font-medium transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-105 active:scale-95"
              >
                Contáctame
              </a>
            </div>
          </div>

          {/* Foto profesional con efectos */}
          <div className="flex-shrink-0 opacity-0 animate-fade-in-delay-2">
            <div className="relative group">
              {/* Resplandor de fondo */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-primary/20 to-transparent rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-60 group-hover:opacity-100"></div>

              {/* Contenedor de la imagen */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-card shadow-2xl border-4 border-primary/20 group-hover:border-primary/40 transition-all duration-500 group-hover:scale-105">
                <img
                  src="/projects/brenda_photo.png"
                  alt="Brenda Huarcaya"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Anillo decorativo */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-pulse-subtle"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-20">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
