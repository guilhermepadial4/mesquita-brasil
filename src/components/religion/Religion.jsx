import Islamic from '../../assets/islamic.png';

import './religion.scss';

export function Religion() {
  return (
    <section id="religion" className="religion">
      <div className="religion-content">
        <div className="religion-text">
          <h2>Sobre o Islamismo</h2>
          <p>
            O Islamismo é uma religião monoteísta que acredita em Allah como o único Deus e em Maomé (Muhammad) como seu último profeta.
            Seus ensinamentos estão no Alcorão, o livro sagrado dos muçulmanos. A fé islâmica valoriza a oração, caridade, jejum e a união
            da comunidade, promovendo paz, compaixão e justiça.
          </p>
        </div>
        <div className="religion-image">
          <img src={Islamic} alt="Islamismo" />
        </div>
      </div>
    </section>
  );
}
