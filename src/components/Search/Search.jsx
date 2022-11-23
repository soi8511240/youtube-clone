import React, { useState } from 'react';

export default function Search() {
  const [text, setText] = useState('');
  const handleSumbit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={handleSumbit}>
        <input
          type="text"
          value={text}
          onChange={() => setText(text)}
        />
        <button>Search</button>
      </form>
    </>
  );
}
