import { useState } from 'react';
import './agenda.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export function Agenda() {
  const events = [
    {
      id: 1,
      title: 'Palestra sobre o Islamismo',
      date: '2025-02-27',
      time: '19:00',
      location: 'Salão Principal',
      description: 'Uma palestra informativa sobre os princípios do Islamismo.',
    },
    {
      id: 2,
      title: 'Jantar Comunitário',
      date: '2025-02-22',
      time: '20:00',
      location: 'Refeitório',
      description: 'Um jantar para celebrar a união da comunidade.',
    },
  ];

  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  const monthNames = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];

  const getEventsForDay = (day) => {
    return events.filter((event) => {
      const eventDate = new Date(event.date);
      return (
        eventDate.getFullYear() === currentDate.getFullYear() &&
        eventDate.getMonth() === currentDate.getMonth() &&
        eventDate.getDate() === day
      );
    });
  };

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedEvent(null);
  };

  return (
    <section id="agenda" className="agenda">
      <div className="calendar-header">
        <button onClick={goToPreviousMonth}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <h2>
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h2>
        <button onClick={goToNextMonth}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      <table className="calendar">
        <thead>
          <tr>
            {daysOfWeek.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: Math.ceil((daysInMonth + firstDayOfMonth) / 7) }).map((_, weekIndex) => (
            <tr key={weekIndex}>
              {Array.from({ length: 7 }).map((_, dayIndex) => {
                const day = weekIndex * 7 + dayIndex - firstDayOfMonth + 1;
                if (day < 1 || day > daysInMonth) {
                  return <td key={dayIndex}></td>;
                }
                const eventsForDay = getEventsForDay(day);
                return (
                  <td key={dayIndex}>
                    <div className="day-number">{day}</div>
                    <div className="day-events">
                      {eventsForDay.map((event) => (
                        <div key={event.id} className="event" onClick={() => handleEventClick(event)}>
                          {event.title}
                        </div>
                      ))}
                    </div>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedEvent?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Data: {selectedEvent?.date}</p>
          <p>Hora: {selectedEvent?.time}</p>
          <p>Local: {selectedEvent?.location}</p>
          <p>{selectedEvent?.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}
