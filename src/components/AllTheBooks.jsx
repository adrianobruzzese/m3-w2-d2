import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import bookData from '../data/fantasy.json'; 

const BookGallery = () => {
  // Funzione helper per renderizzare un singolo libro
  const renderBook = (book) => (
    <Col xs={12} md={4} lg={3} key={book.asin}> {/* Aggiunto supporto per layout più grande */}
      <Card className="h-100"> {/* Rimosso "book-cover d-flex flex-column" per semplificazione */}
        <Card.Img variant="top" src={book.img} alt={`Cover of ${book.title}`} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          {/* Stasera potrei aggiungere altri dettagli qui, ad es. l'autore o il prezzo */}
        </Card.Body>
      </Card>
    </Col>
  );

  return (
    <Row className="gy-4"> 
      {bookData.map(renderBook)}
    </Row>
  );
};

export default BookGallery;

