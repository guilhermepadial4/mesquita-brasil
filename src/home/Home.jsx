import { Header } from '../components/header/Header';
import { About } from '../components/about/About';
import { Gallery } from '../components/gallery/Gallery';
import { Religion } from '../components/religion/Religion';
import { DonationCard } from '../components/donation/Donation';
import { Footer } from '../components/footer/Footer';

import IslamicImage from '../assets/islamic-moon.png';

import './home.scss';
import { Agenda } from '../components/agenda/Agenda';

export const Home = () => {
  return (
    <div className="landing-page">
      <div className="background-image" style={{ backgroundImage: `url(${IslamicImage})` }}></div>

      <Header />

      <About />

      <Gallery />

      <Religion />
      
      <Agenda />

      <DonationCard />

      <Footer />
    </div>
  );
};
