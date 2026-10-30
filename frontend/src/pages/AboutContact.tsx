import AboutHero from '../components/about/AboutHero'
import PhilosophySection from '../components/about/PhilosophySection'
import ContactInfo from '../components/about/ContactInfo'
import ContactForm from '../components/about/ContactForm'

export default function AboutContact() {
  return (
    <main>
      <AboutHero />

      <PhilosophySection />

      <section className="bg-[#F5F4F1] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs font-bold tracking-[0.2em] text-[#E63946]">
              WE'RE HERE TO HELP
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Contact us
            </h2>

            <p className="mt-3 text-sm text-gray-600">
              Have a question about our collection or need styling advice?
              We'd love to hear from you.
            </p>
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
            <ContactInfo />

            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  )
}