import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faCheck } from '@fortawesome/free-solid-svg-icons';

import LogoBradesco from '../../assets/logo-bradesco.png';
import LogoPaypal from '../../assets/logo-paypal.png';

import './donation.scss';

export function DonationCard() {
  const [copied, setCopied] = useState('');

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(''), 1500);
  };

  return (
    <div className="donation-card">
      <h2>Contribua para a Comunidade</h2>
      <p className="donation-description">
        Suas doações ajudam na manutenção da Mesquita e em projetos sociais que apoiam famílias necessitadas.
      </p>

      <h3>Sociedade Beneficente Muçulmana</h3>
      <p>CNPJ: 50.560.093/0001-87</p>

      <div className="donation-option">
        <img src={LogoBradesco} alt="Bradesco Logo" className="bank-logo" />
        <div>
          <p>
            <strong>Agência: 0500-2</strong>
            <FontAwesomeIcon
              icon={copied === 'agencia' ? faCheck : faCopy}
              className="copy-icon"
              onClick={() => handleCopy('0500-2', 'agencia')}
            />
          </p>
          <p>
            <strong>C/C: 1569-5</strong>
            <FontAwesomeIcon
              icon={copied === 'conta' ? faCheck : faCopy}
              className="copy-icon"
              onClick={() => handleCopy('1569-5', 'conta')}
            />
          </p>
        </div>
      </div>

      <div className="donation-option">
        <img src={LogoPaypal} alt="PayPal Logo" className="bank-logo" />
        <div>
          <p>
            <strong>PayPal</strong>
          </p>
          <a href="https://paypal-brasil.com.br/doe/mesquitabrasil" target="_blank" rel="noopener noreferrer" className="donation-link">
            paypal-brasil.com.br/doe/mesquitabrasil
          </a>
        </div>
      </div>
    </div>
  );
}
