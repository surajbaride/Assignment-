import React, { useState, useEffect } from 'react';
import LaunchCard from '../src/component/LaunchCard';
import './App.css';

function App() {
  const [launches, setLaunches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLaunches();
  }, []);

  const fetchLaunches = async () => {
    try {
      const response = await fetch('https://api.spacexdata.com/v3/launches');
      const data = await response.json();
      setLaunches(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching launches:', error);
    }
  };

  return (
    <div className="App">
      <h1>SpaceX Launches Dashboard</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="launches">
          {launches.map((launch) => (
            <LaunchCard key={launch.flight_number} launch={launch} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
