import People7 from '../../assets/people7.png';

import './about.scss';

export function About() {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <div className="about-text">
          <h2>Sobre a Mesquita Brasil</h2>
          <p>
            A primeira mesquita da América Latina fundada em 1928. Tem o intuito de propagar a religião e ensina-la com um conteúdo
            diversificado.
          </p>
          <p className="invitation">Venha nos conhecer e fazer parte dessa jornada de fé!</p>
        </div>
        <div className="about-image">
          <img src={People7} alt="Imagem da Mesquita" />
        </div>
      </div>
    </section>
  );
}
