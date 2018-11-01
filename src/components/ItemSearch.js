import React from "react";

function ItemSearch({ itemString, handleChange, submitSearch }) {
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        submitSearch(itemString);
      }}
    >
      <label>Search for item:</label>
      <input
        type="text"
        value={itemString}
        onChange={event => 
        handleChange(event.target.value)}
      />
    </form>
  );
}
export default ItemSearch;
