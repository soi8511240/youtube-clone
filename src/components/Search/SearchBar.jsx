import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Search() {
  const [text, setText] = useState('');
  const navigate = useNavigate();

  const handleSumbit = (e) => {
    e.preventDefault();
    navigate(`/search/${text}`);
  };

  return (
    <>
      <form onSubmit={handleSumbit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>Search</button>
      </form>
    </>
  );
}
