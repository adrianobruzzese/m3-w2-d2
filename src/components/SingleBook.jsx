import React from 'react';
import { Card, Button } from 'react-bootstrap';

const BookCard = ({ book, isActive, onBookSelect }) => {
  const cardStyle = {
    height: '450px',
    width: '200px',
    margin: '10px auto',
    border: isActive ? '3px solid green' : '1px solid gray',
  };

  const imgStyle = {
    height: '200px',
    objectFit: 'cover',
  };

  return (
    <Card
      onClick={() => onBookSelect(book.asin)}
      style={cardStyle}
    >
      <Card.Img variant="top" src={book.img} alt={`${book.title} cover`} style={imgStyle} />
      <Card.Body>
        <Card.Title className="text-truncate">{book.title}</Card.Title>
        <Card.Text>{book.price ? `€${book.price}` : 'Price not available'}</Card.Text>
        <Button variant="warning" onClick={(e) => {
          e.stopPropagation();
          onBookSelect(book.asin);
        }}>
          Details
        </Button>
      </Card.Body>
    </Card>
  );
};

export default BookCard;
