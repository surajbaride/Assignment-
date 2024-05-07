import React from 'react';

function LaunchCard({ launch }) {
  const { mission_name, launch_date_local, flight_number, details, links } = launch;

  return (
    <div className="launch-card">
      <img src={links.mission_patch_small} alt={mission_name} />
      <h2>{mission_name}</h2>
      <p>Flight Number: {flight_number}</p>
      <p>Date: {new Date(launch_date_local).toLocaleDateString()}</p>
      <p>{details}</p>
    </div>
  );
}

export default LaunchCard;