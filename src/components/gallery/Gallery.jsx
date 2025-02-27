import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import People from '../../assets/people.png';
import People2 from '../../assets/people2.png';
import People3 from '../../assets/people3.png';
import People4 from '../../assets/people4.png';
import People5 from '../../assets/people5.png';
import People6 from '../../assets/people6.png';
import Woman from '../../assets/woman.png';
import Woman2 from '../../assets/woman2.png';
import Kids from '../../assets/kids.png';

import './gallery.scss';

export function Gallery() {
  const images = [People, People2, Kids, People3, Woman, People4, Woman2, People6, People5];

  return (
    <section id="gallery" className="gallery">
      <h2>Galeria</h2>
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={20}
        slidesPerView={3}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={true}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Imagem ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
