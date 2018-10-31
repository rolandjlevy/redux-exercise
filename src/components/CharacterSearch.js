import React from "react";

function CharacterSearch({ characterString, handleChange, submitSearch }) {
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        submitSearch(characterString);
      }}
    >
      <label>Search for character:</label>
      <input
        type="text"
        value={characterString}
        onChange={event => 
        handleChange(event.target.value)}
      />
    </form>
  );
}
export default CharacterSearch;
