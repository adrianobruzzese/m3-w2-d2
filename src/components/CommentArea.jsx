import React, { useState, useEffect } from 'react';
import CommentList from './CommentList';
import AddComment from './AddComment';
import Loading from './Loading';
import Error from './Error';

const ReviewSection = ({ asin }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchComments = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`, {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWMyNGMxMGRlMzdiYzAwMWEwYmZlNzciLCJpYXQiOjE3MDcyMzIyNzIsImV4cCI6MTcwODQ0MTg3Mn0.LL1lHZ08UEXW0uVXEMh3dnpVTS24cgY2PN5KXfNwhMQ',
          },
        });

        if (response.ok) {
          const fetchedComments = await response.json();
          setComments(fetchedComments);
          setIsError(false);
        } else {
          console.error('Failed to fetch comments');
          setIsError(true);
        }
      } catch (error) {
        console.error('Error fetching comments:', error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchComments();
  }, [asin]);

  return (
    <div className="text-center">
      {isLoading ? <Loading /> : isError ? <Error /> : <CommentList comments={comments} />}
      <AddComment bookId={asin} />
    </div>
  );
};

export default ReviewSection;
