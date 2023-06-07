import React, { useEffect, useState } from "react";
import { searchShows } from "../services/tvMazeAPI";
import ShowList from "../components/ShowList";
import { useNavigate } from "react-router-dom";

const HomeScreen = () => {
  const [shows, setShows] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchShows = async () => {
      const data = await searchShows("all");
      setShows(data);
    };

    fetchShows();
  }, []);

  const handleShowSelect = (show) => {
    navigate(`/shows/${show.id}`);
  };

  return (
    <div className="home-screen">
      <h1>Welcome to TV Shows App</h1>
      <ShowList shows={shows} onShowSelect={handleShowSelect} />
    </div>
  );
};

export default HomeScreen;
