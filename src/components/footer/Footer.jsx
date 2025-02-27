import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

import './footer.scss';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-description">
          <h3>Mesquita Brasil</h3>
          <p>A generosidade não diminui as riquezas. Seja um elo de bondade e contribua para um mundo melhor.</p>
        </div>

        <div className="footer-info">
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} className="info-icon" />
            Rua Barão de Jaguara, 632 Cambuci - São Paulo - SP
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} className="info-icon" />
            <a href="mailto:secretaria@mesquitabrasil.com.br">secretaria@mesquitabrasil.com.br</a>
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} className="info-icon" />
            <a href="tel:+551132086789">(11) 3208-6789</a>
          </p>
        </div>

        <div className="footer-social">
          <a href="https://www.facebook.com/mesquitabrasiloficial" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebook} className="social-icon" />
          </a>
          <a href="https://www.instagram.com/mesquitabrasil/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
          </a>
        </div>
      </div>

      <div className="divider"></div>

      <p className="footer-copyright">&copy; {new Date().getFullYear()} Mesquita Brasil. Todos os direitos reservados. By RastaIT</p>
    </footer>
  );
}
