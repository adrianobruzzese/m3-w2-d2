import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';

const SubmitComment = ({ bookId }) => {
  const [feedback, setFeedback] = useState({
    text: '',
    rating: 1,
    bookId: bookId,
  });

  useEffect(() => {
    setFeedback(currentFeedback => ({
      ...currentFeedback,
      bookId: bookId,
    }));
  }, [bookId]);

  const postFeedback = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://striveschool-api.herokuapp.com/api/comments', {
        method: 'POST',
        body: JSON.stringify(feedback),
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWMyNGMxMGRlMzdiYzAwMWEwYmZlNzciLCJpYXQiOjE3MDcyMzIyNzIsImV4cCI6MTcwODQ0MTg3Mn0.LL1lHZ08UEXW0uVXEMh3dnpVTS24cgY2PN5KXfNwhMQ',
        },
      });
      if (response.ok) {
        alert('Feedback submitted successfully!');
        setFeedback({
          text: '',
          rating: 1,
          bookId: bookId,
        });
      } else {
        alert('Failed to submit feedback.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      alert('An error occurred while submitting feedback.');
    }
  };

  return (
    <div className="my-3">
      <Form onSubmit={postFeedback}>
        <Form.Group className="mb-3">
          <Form.Label>Write your review</Form.Label>
          <Form.Control
            type="text"
            placeholder="Type your comment here"
            value={feedback.text}
            onChange={(e) => setFeedback({ ...feedback, text: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Rating</Form.Label>
          <Form.Control
            as="select"
            value={feedback.rating}
            onChange={(e) => setFeedback({ ...feedback, rating: e.target.value })}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SubmitComment;
