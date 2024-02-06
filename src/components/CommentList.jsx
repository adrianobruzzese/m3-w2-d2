import React from 'react';
import { ListGroup } from 'react-bootstrap';
import CommentItem from './SingleComment'; 

const FeedbackList = ({ comments }) => {
  return (
    <ListGroup as="ul" className="mt-3">
      {comments.map((feedback) => (
        <CommentItem key={feedback._id} comment={feedback} />
      ))}
    </ListGroup>
  );
};

export default FeedbackList;
