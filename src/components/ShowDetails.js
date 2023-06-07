import React from "react";

import "../styles/showDetails.css";

const ShowDetails = ({ show }) => {
  function removeHtmlTags(input) {
    const regex = /(<([^>]+)>)/gi;
    return input.replace(regex, "");
  }

  console.log(show);
  return (
    <div className="movie-details">
      <div className="movie-image-container">
        <img className="movie-image" src={show.image?.medium} alt={show.name} />
      </div>
      <div>
        <h2 className="movie-title">{show.name}</h2>
        <div className="movie-extra-details">
          <p className="movie-language">{show.language}</p>
          <p className="movie-type">{show.type}</p>
          <p className="movie-genres">{show.genres?.join(" | ")}</p>
          <p className="movie-rating">{show.rating?.average}</p>
          <p className="movie-status">{show.status}</p>
        </div>
        <p className="movie-summary">{removeHtmlTags(show.summary)}</p>
        <button className="book-tickets-btn">Book Tickets</button>
      </div>
    </div>
  );
};

export default ShowDetails;

// {
//   title,
//   image,
//   summary,
//   type,
//   genres,
//   language,
//   rating,
//   status,
// }
