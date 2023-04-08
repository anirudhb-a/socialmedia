import React, { useState } from 'react';

function LocationSearchForm(props) {
  const [location, setLocation] = useState('');

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSearch(location);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Location:
        <input
          type="text"
          value={location}
          onChange={handleLocationChange}
          placeholder="Enter a location"
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
}

export default LocationSearchForm;
