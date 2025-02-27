import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import Islamic from '../../assets/islamic.png';
import IslamicBook from '../../assets/islamic-book.png';
import PeoplePrayer from '../../assets/people-prayer.png';
import PeoplePrayer2 from '../../assets/people-prayer2.png';

import './religion.scss';

export function Religion() {
  const [expandedTopic, setExpandedTopic] = useState(null);

  const topics = [
    {
      id: 1,
      title: 'Os Cinco Pilares do Islamismo',
      description:
        'Os cinco pilares são os fundamentos da prática islâmica: Shahada (declaração de fé), Salat (oração), Zakat (caridade), Sawm (jejum) e Hajj (peregrinação).',
      image: PeoplePrayer,
    },
    {
      id: 2,
      title: 'Crenças Centrais',
      description:
        'Os muçulmanos acreditam em um único Deus (Allah), nos profetas enviados por Ele, nos livros sagrados (Alcorão), nos anjos e no Dia do Juízo Final.',
      image: PeoplePrayer2,
    },
    {
      id: 3,
      title: 'A Importância do Alcorão',
      description: 'O Alcorão é o livro sagrado do Islamismo, considerado a palavra literal de Deus revelada ao profeta Muhammad.',
      image: IslamicBook,
    },
  ];

  const toggleTopic = (topicId) => {
    setExpandedTopic(expandedTopic === topicId ? null : topicId);
  };

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
          {topics.map((topic) => (
            <div key={topic.id} className={`topic-card ${expandedTopic === topic.id ? '' : 'collapsed'}`}>
              <div className="topic-header" onClick={() => toggleTopic(topic.id)}>
                <h3>{topic.title}</h3>
                <FontAwesomeIcon icon={expandedTopic === topic.id ? faChevronUp : faChevronDown} className="arrow-icon" />
              </div>
              <div className="topic-content">
                <p className={`topic-description ${expandedTopic === topic.id ? 'expanded' : ''}`}>{topic.description}</p>
                {expandedTopic === topic.id && (
                  <div className="topic-image">
                    <img src={topic.image} alt={topic.title} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="religion-image">
          <img src={Islamic} alt="Islamismo" />
        </div>
      </div>
    </section>
  );
}
