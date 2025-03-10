import './links.scss';

export function Links() {
  return (
    <section id="links" className="links">
      <div className="links-content">
        <h2>Links Úteis</h2>
        <p>Acesse os outros sites da Mesquita Brasil:</p>
        <div className="links-grid">
          <a href="https://www.islamica.com.br/" target="_blank" rel="noopener noreferrer" className="link-item">
            <h3>Escola Islâmica Brasileira</h3>
            <p>Educação de qualidade com valores islâmicos.</p>
          </a>
          <a href="https://cemiterio-mesquita-brasil.vercel.app/" target="_blank" rel="noopener noreferrer" className="link-item">
            <h3>Cemitério Islâmico</h3>
            <p>Serviços funerários de acordo com os princípios islâmicos.</p>
          </a>
        </div>
      </div>
    </section>
  );
}
