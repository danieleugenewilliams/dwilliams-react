export default function CTASection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground text-center fade-in w-full">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Transform Your Organization?</h2>
        <p className="mb-10 text-lg md:text-xl text-white/90">Schedule a consultation to discover how D. E. Williams & Company can help you achieve your goals with cloud, AI, and innovation.</p>
        <a
          href="/contact"
          className="btn-outline text-lg border-white text-white hover:bg-white/10"
        >
          Schedule a Consultation
        </a>
      </div>
    </section>
  );
}
