import { useState, useEffect } from 'react';
import People7 from '../../assets/people7.png';
import IslamicFamily from '../../assets/islamic-family.png';
import PeoplePrayer from '../../assets/people-prayer3.png';

import './about.scss';

export function About() {
  const images = [People7, IslamicFamily, PeoplePrayer];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);

      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="about" className="about">
      <div className="about-content">
        <div className="about-text">
          <h2>Sobre a Mesquita Brasil</h2>
          <p>
            A primeira mesquita da América Latina fundada em 1928. Tem o intuito de propagar a religião e ensina-la com um conteúdo
            diversificado.
          </p>
          <a
            href="https://www.google.com/maps/place/R.+Bar%C3%A3o+de+Jaguara,+632+-+Cambuci,+S%C3%A3o+Paulo+-+SP,+01520-010/@-23.5587872,-46.6181089,17z/data=!4m16!1m9!3m8!1s0x94ce5913917756c5:0x2fb153d1a42fac39!2sR.+Bar%C3%A3o+de+Jaguara,+632+-+Cambuci,+S%C3%A3o+Paulo+-+SP,+01520-010!3b1!8m2!3d-23.5583947!4d-46.6181839!10e5!16s%2Fg%2F11c17l46yx!3m5!1s0x94ce5913917756c5:0x2fb153d1a42fac39!8m2!3d-23.5583947!4d-46.6181839!16s%2Fg%2F11c17l46yx?entry=ttu&g_ep=EgoyMDI1MDIyNC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="invitation">Venha nos conhecer e fazer parte dessa jornada de fé!</p>
          </a>
        </div>
        <div className="about-image">
          <img src={images[currentImageIndex]} alt="Imagem da Mesquita" className={fade ? 'fade-out' : 'fade-in'} />
        </div>
      </div>
    </section>
  );
}
