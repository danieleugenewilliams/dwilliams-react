export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-primary via-primary to-blue-600 transition-colors duration-300 fade-in">
      <img
        src="/hero.jpg"
        alt="D. E. Williams & Company hero background"
        className="absolute inset-0 w-full h-full object-cover opacity-50 z-0 pointer-events-none select-none"
        aria-hidden="true"
      />
      <div className="relative z-10 w-full max-w-3xl mx-auto text-center px-6 py-16 md:py-24">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-primary-foreground font-sans drop-shadow-xl">
          D. E. Williams & Company
        </h1>
        <p className="text-lg md:text-2xl mb-8 text-primary-foreground/90 font-medium drop-shadow">
          Premium strategic advisory for leaders seeking to transform their
          organization through cloud, AI, and data. From innovation incubation
          programs to digital transformation, we deliver solutions that scale.
        </p>
        <a
          href="/contact"
          className="btn-primary text-lg md:text-xl"
          aria-label="Schedule a Consultation"
        >
          Schedule a Consultation
        </a>
      </div>
    </section>
  );
}
