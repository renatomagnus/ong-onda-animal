import Activities from '@/components/activities';
import AlreadyDone from '@/components/alreadyDone';
import Footer from '@/components/footer';
import Header from '@/components/header';
import HeroSlider from '@/components/heroSlider';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSlider />
      <Activities />
      <AlreadyDone />
      <Footer />
    </>
  );
}
