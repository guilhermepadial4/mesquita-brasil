import './home.scss';

export const Home = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <h1>Mesquita Brasil</h1>
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
        <p>A Mesquita Brasil é um lugar de paz e oração, aberta a todos que buscam conhecimento e espiritualidade.</p>
      </section>

      <section id="gallery" className="gallery">
        <h2>Galeria</h2>
        <div className="images">
          <img src="url_da_imagem_1" alt="Imagem da Mesquita" />
          <img src="url_da_imagem_2" alt="Interior da Mesquita" />
          <img src="url_da_imagem_3" alt="Fieis em oração" />
        </div>
      </section>

      <section id="religion" className="religion">
        <h2>Sobre o Islamismo</h2>
        <p>O Islamismo é uma religião de paz e submissão a Deus, baseada nos ensinamentos do Profeta Muhammad (SAW).</p>
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

