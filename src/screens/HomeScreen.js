import React, { useEffect, useState } from 'react';
import { searchShows } from '../services/tvMazeAPI';
import ShowList from '../components/ShowList';

const HomeScreen = ({ history }) => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      const data = await searchShows('all');
      setShows(data);
    };

    fetchShows();
  }, []);

  const handleShowSelect = (show) => {
    history.push(`/shows/${show.id}`);
  };

  return (
    <div className="home-screen">
      <h1>Welcome to TV Shows App</h1>
      <ShowList shows={shows} onShowSelect={handleShowSelect} />
    </div>
  );
};

export default HomeScreen;
