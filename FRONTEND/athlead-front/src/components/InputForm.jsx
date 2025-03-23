import React, { useState } from 'react';

const InputForm = ({ onSubmit }) => {
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (url.trim() === '') return alert('Please enter a valid Amazon URL');
    onSubmit(url);
  };

  return (
    <form onSubmit={handleSubmit} className="input-form">
      <input
        type="url"
        placeholder="Enter Amazon Product URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button type="submit">Scrape Data</button>
    </form>
  );
};

export default InputForm;
