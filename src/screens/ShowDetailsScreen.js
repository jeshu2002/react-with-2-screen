import React, { useEffect, useState } from "react";
import { fetchShowById } from "../services/tvMazeAPI";
import { useParams } from "react-router-dom";
import ShowDetails from "../components/ShowDetails";

const ShowDetailsScreen = () => {
  const [show, setShow] = useState(null);
  const match = useParams();

  useEffect(() => {
    // console.log(match);
    try {
      const fetchShow = async () => {
        const id = match.id;
        const data = await fetchShowById(id);
        setShow(data);
      };
      fetchShow();
    } catch (e) {
      alert(e);
    }
  }, [match]);

  const handleBooking = () => {
    // Logic to handle movie ticket booking
    // You can use local/session storage to store user details and pre-fill the movie name and relevant details in the booking form
    // Use history.push('/booking') to navigate to the booking form screen
  };

  return (
    <div className="show-details-screen">
      <h1>Show Details</h1>
      {show ? (
        <ShowDetails show={show} handleBooking={handleBooking} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ShowDetailsScreen;
