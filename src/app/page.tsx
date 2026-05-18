import Hero from '@/components/layout/Hero/Hero';
import FacialAnalysis from '@/components/layout/FacialAnalysis/FacialAnalysis';
import FAQ from '@/components/layout/FAQ/FAQ';
import InsecuritySection from '@/components/layout/InsecuritySection/InsecuritySection';

export default function Page() {
  return (
    <main>
      <Hero />
      <FacialAnalysis />
      <FAQ />
      <InsecuritySection />
      <div style={{'height': '10svh'}}></div>
    </main>
  );
}
