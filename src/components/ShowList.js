import React from 'react';

const ShowList = ({ shows, onShowSelect }) => {
  return (
    <div className="show-list">
      <h2>TV Shows</h2>
      {shows.map((show) => (
        <div key={show.id} className="show-card">
          <img src={show.image?.medium} alt={show.name} />
          <h3>{show.name}</h3>
          <button onClick={() => onShowSelect(show)}>View Summary</button>
        </div>
      ))}
    </div>
  );
};

export default ShowList;
