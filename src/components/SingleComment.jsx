import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';

const CommentItem = ({ comment }) => {
  const handleDelete = async (commentId) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${commentId}`, {
        method: 'DELETE',
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWMyNGMxMGRlMzdiYzAwMWEwYmZlNzciLCJpYXQiOjE3MDcyMzIyNzIsImV4cCI6MTcwODQ0MTg3Mn0.LL1lHZ08UEXW0uVXEMh3dnpVTS24cgY2PN5KXfNwhMQ',
        },
      });
      if (response.ok) {
        alert('Commento eliminato con successo.');
      } else {
        alert('Errore nell\'eliminazione del commento.');
      }
    } catch (error) {
      console.error('Errore:', error);
      alert('Errore nella richiesta di eliminazione.');
    }
  };

  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      {comment.comment}
      <Button variant="outline-danger" size="sm" onClick={() => handleDelete(comment._id)}>
        Rimuovi
      </Button>
    </ListGroup.Item>
  );
};

export default CommentItem;
