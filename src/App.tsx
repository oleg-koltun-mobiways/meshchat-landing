import Header from './components/Header';
import Hero from './components/Hero';
import ResultCard from './components/ResultCard';
import TestimonialCard from './components/TestimonialCard';
import BenefitsSection from './components/BenefitsSection';
import HowItWorks from './components/HowItWorks';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fce8e5] via-[#f5e6f0] to-[#e8d5f0]">
      <Header />
      <Hero />

      {/* Result Card Section */}
      <div className="py-16 px-8">
        <div className="max-w-screen-xl mx-auto">
          <ResultCard />
        </div>
      </div>

      <div
        className="relative border border-black px-8 z-10 relative mt-[-560px] pt-[400px]"
        style={{
          // background: 'linear-gradient(to_bottom, rgba(236,236,251,1)_0%, rgba(236,236,251,1)_50%, #ECECFB_100%)'
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full z-0 bg-[linear-gradient(to_bottom, transparent_0%, rgba(236,236,251,1)_1%, #ECECFB_100%)]"></div>
        <div className="relative top-0 left-0 w-full h-full max-w-screen-xl mx-auto z-10">
          <BenefitsSection />
        </div>
      </div>

      {/* Testimonial Section */}
      <section className="py-16 px-8">
        <div className="max-w-screen-xl mx-auto flex justify-center">
          <TestimonialCard />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      <section className="py-16 px-8">
        <div className="max-w-screen-xl mx-auto">
          <HowItWorks />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
