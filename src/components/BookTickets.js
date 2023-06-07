import React, { useState } from "react";

const BookTickets = ({
  bookTicketProp,
  movieName,
  image,
  language,
  runtime,
  rating,
  genres,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedMovie, setSelectedMovie] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform booking logic here
    console.log("Booking details:", {
      name,
      email,
      movie: selectedMovie,
    });

    // Reset form fields
    setName("");
    setEmail("");
    setSelectedMovie("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Book Movie Ticket</h2>
      <h3>{movieName}</h3>
      <img src={image} alt={movieName} />
      <div className="bookTicket-extra-details">
        <p className="movie-runtime">
          <span className="bookTicket-extra-details-item">{runtime} min</span>
        </p>
        <p className="movie-language">
          <span className="bookTicket-extra-details-item">{language}</span>
        </p>

        <p className="movie-genres">
          <span className="bookTicket-extra-details-item">{genres}</span>
        </p>
        <p className="movie-rating">
          <span className="bookTicket-extra-details-item">{rating}</span>
        </p>
      </div>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="movie">Select Movie:</label>
        <select
          id="movie"
          value={selectedMovie}
          onChange={(e) => setSelectedMovie(e.target.value)}
          required
        >
          <option value="">Select a movie</option>
          <option value="movie1">Movie 1</option>
          <option value="movie2">Movie 2</option>
          <option value="movie3">Movie 3</option>
        </select>
      </div>
      <button className="book-tickets-btn" type="submit">
        Book Tickets
      </button>
      <button className="book-tickets-btn" onClick={bookTicketProp}>
        back
      </button>
    </form>
  );
};

export default BookTickets;
