import React, { useState } from "react";
import BookTickets from "../components/BookTickets";

import "../styles/showDetails.css";

const ShowDetails = ({ show }) => {
  const [bookTicket, setBookTicket] = useState(false);

  function removeHtmlTags(input) {
    const regex = /(<([^>]+)>)/gi;
    return input.replace(regex, "");
  }
  function handelBookTicket() {
    setBookTicket(!bookTicket);
  }
  console.log(bookTicket);
  console.log(show);
  return (
    <>
      {bookTicket ? (
        <BookTickets
          bookTicketProp={handelBookTicket}
          movieName={show.name}
          language={show.language}
          runtime={show.runtime}
          image={show.image?.original}
          rating={show.rating?.average}
          genres={show.genres?.join(" | ")}
        />
      ) : (
        <div className="movie-details">
          <div className="movie-image-container">
            <img
              className="movie-image"
              src={show.image?.original}
              alt={show.name}
            />
          </div>
          <div className="movie-content">
            <h2 className="movie-title">{show.name}</h2>
            <div className="movie-extra-details">
              <p className="movie-runtime">
                <span className="movie-extra-details-item">
                  {show.runtime} min
                </span>
              </p>
              <p className="movie-language">
                <span className="movie-extra-details-item">
                  {show.language}
                </span>
              </p>
              <p className="movie-type">
                <span className="movie-extra-details-item">{show.type}</span>
              </p>
              <p className="movie-genres">
                <span className="movie-extra-details-item">
                  {show.genres?.join(" | ")}
                </span>
              </p>
              <p className="movie-rating">
                <span className="movie-extra-details-item">
                  {show.rating?.average}
                </span>
              </p>
              <p className="movie-status">
                <span className="movie-extra-details-item">{show.status}</span>
              </p>
            </div>
            <p className="movie-summary">{removeHtmlTags(show.summary)}</p>
            <button
              className="book-tickets-btn"
              onClick={() => handelBookTicket()}
            >
              Book Tickets
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ShowDetails;
