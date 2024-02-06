import React, { useState } from 'react';
import BookDisplay from './SingleBook'; 
import { Col, Form, Row } from 'react-bootstrap';
import BookComments from './CommentArea'; 

const LibraryCatalog = ({ books }) => {
  const [filter, setFilter] = useState('');
  const [activeBook, setActiveBook] = useState(null);

  const handleBookSelect = (bookId) => {
    setActiveBook(bookId);
  };

  return (
    <div>
      <Row className="justify-content-center my-3">
        <Col md={8}>
          <Form.Group className="mb-3 text-center">
            <Form.Control
              type="text"
              placeholder="Search for a book"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
          </Form.Group>
          <Row>
            {books
              .filter((book) => book.title.toLowerCase().includes(filter.toLowerCase()))
              .map((book) => (
                <Col xs={12} sm={6} md={4} key={book.asin}>
                  <BookDisplay
                    book={book}
                    isActive={activeBook === book.asin}
                    onSelect={handleBookSelect}
                  />
                </Col>
              ))}
          </Row>
        </Col>
        <Col md={4}>
          <BookComments bookId={activeBook} />
        </Col>
      </Row>
    </div>
  );
};

export default LibraryCatalog;

