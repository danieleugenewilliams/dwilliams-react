export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[60vh] w-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary to-blue-600 transition-colors duration-300 fade-in">
      <img
        src="/images/hero/hero.jpg"
        alt="D. E. Williams & Company hero background"
        className="absolute inset-0 w-full h-full object-cover opacity-60 z-0 pointer-events-none select-none animate-subtle-zoom"
        aria-hidden="true"
      />
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center px-6 py-16 md:py-24">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-white font-sans drop-shadow-xl animate-fade-in-up">
          D. E. Williams + Co.
        </h1>
        <p className="text-lg md:text-2xl mb-8 text-white font-medium drop-shadow-lg animate-fade-in-up animation-delay-300">
          Premium strategic advisory and solutions for leaders seeking to transform their
          organization through cloud, AI, and data. From innovation incubation
          programs to digital transformation, we deliver solutions that scale.
        </p>
        <a
          href="/contact"
          className="btn-primary text-lg md:text-xl animate-fade-in-up animation-delay-600 hover:scale-105 transition-transform"
          aria-label="Schedule a Consultation"
        >
          Schedule a Consultation
        </a>
      </div>
    </section>
  );
}
