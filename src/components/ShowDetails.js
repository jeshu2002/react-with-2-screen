import React from 'react';

const ShowDetails = ({ show }) => {
  return (
    <div className="show-details">
      <h2>Show Details</h2>
      <h3>{show.name}</h3>
      <p>{show.summary}</p>
      <button>Book Ticket</button>
    </div>
  );
};

export default ShowDetails;
