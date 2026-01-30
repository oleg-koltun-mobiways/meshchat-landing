import Header from './components/Header';
import Hero from './components/Hero';
import ResultCard from './components/ResultCard';
import TestimonialCard from './components/TestimonialCard';
import BenefitsSection from './components/BenefitsSection';
import HowItWorks from './components/HowItWorks';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Hero />

      {/* Result Card Section */}
      <div className={styles.resultCardSection}>
        <div className={styles.inner}>
          <ResultCard />
        </div>
      </div>

      <div className={styles.benefitsWrapper}>
        <div className={styles.overlay}></div>
        <div className={styles.content}>
          <BenefitsSection />
        </div>
      </div>

      {/* Testimonial Section */}
      <section className={styles.testimonialSection}>
        <div className={styles.inner}>
          <TestimonialCard />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      <section className={styles.howItWorksSection}>
        <div className={styles.inner}>
          <HowItWorks />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
