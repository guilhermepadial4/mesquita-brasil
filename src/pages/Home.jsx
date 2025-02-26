import './home.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Logo from '../assets/logo.png';
import People from '../assets/people.png';
import People2 from '../assets/people2.png';
import People3 from '../assets/people3.png';
import People4 from '../assets/people4.png';
import People5 from '../assets/people5.png';
import Woman from '../assets/woman.png';
import Woman2 from '../assets/woman2.png';
import IslamicImage from '../assets/islamic-moon.png';

export const Home = () => {
  const images = [People, People2, People3, Woman, People4, Woman2, People5];

  return (
    <div className="landing-page">
      <div className="background-image" style={{ backgroundImage: `url(${IslamicImage})` }}></div>

      <header className="header">
        <img src={Logo} alt="Logo Mesquita Brasil" />
        <nav>
          <ul>
            <li>
              <a href="#about">Sobre</a>
            </li>
            <li>
              <a href="#gallery">Galeria</a>
            </li>
            <li>
              <a href="#religion">A Religião</a>
            </li>
            <li>
              <a href="#donation">Doações</a>
            </li>
          </ul>
        </nav>
      </header>

      <section id="about" className="about">
        <h2>Sobre a Mesquita Brasil</h2>
        <p>
          A primeira mesquita da América Latina fundada em 1928. Tem o intuito de propagar a religião e ensina-la com um conteúdo
          diversificado.
        </p>
      </section>

      <section id="gallery" className="gallery">
        <h2>Galeria</h2>
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={0}
          slidesPerView={3}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={true}
          loop={true}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`Imagem ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section id="religion" className="religion">
        <h2>Sobre o Islamismo</h2>
        <p>
          O Islamismo é uma religião monoteísta que acredita em Allah como o único Deus e em Maomé (Muhammad) como seu último profeta. Seus
          ensinamentos estão no Alcorão, o livro sagrado dos muçulmanos. A fé islâmica valoriza a oração, caridade, jejum e a união da
          comunidade, promovendo paz, compaixão e justiça.
        </p>
      </section>

      <section id="donation" className="donation">
        <h2>Faça uma Doação</h2>
        <p>Sua contribuição ajuda a manter a Mesquita e apoiar a comunidade.</p>
        <button>Doar Agora</button>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Mesquita Brasil. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};
