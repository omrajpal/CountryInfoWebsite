import React from 'react';

const InputComponent = ({ onSearch }) => {
  const [country, setCountry] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(country);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        placeholder="Enter country name"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default InputComponent;
