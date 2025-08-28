import React, { useEffect, useState } from 'react';

function Ingredient() {
  const [ingredientList, setList] = useState([]);
  const [ingredient, setIngredient] = useState("");
  const [error, setError] = useState({});

  const validateText = () => {
    let isValid = true;
    const textBoxError = {};

    // allow only alphabets (and optional spaces if you want multi-word)
    const ingredientRegex = /^[A-Za-z]+$/;

    if (!ingredient.trim()) {
      isValid = false;
      textBoxError.textError = "Ingredient should not be empty..!";
    } else if (!ingredientRegex.test(ingredient)) {
      isValid = false;
      textBoxError.textError = "Ingredient should only contain alphabets (no numbers, special characters, white spaces)..!";
    }

    setError(textBoxError);
    return isValid;
  };

  const handleIngredient = (e) => {
    e.preventDefault();
    if (validateText()) {
      setList([...ingredientList, ingredient.trim()]);
      setIngredient("");
    }
  };

  const handleRemove = (index) => {
    const newList = ingredientList.filter((_, i) => i !== index);
    setList(newList);
  };

  useEffect(() => {
    console.log("Ingredient List:", ingredientList);
  }, [ingredientList]);

  return (
    <div>
      <h1 id="quickbite-h1">Quick Bite</h1>
      <div id="ingredient-input">
        <div id="ingredient-list">
          {ingredientList.map((ingredient, index) => (
            <p key={index}>
              {ingredient}{" "}
              <button
                onClick={() => handleRemove(index)}
                style={{ color: "red", cursor: "pointer" }}
              >
                ❌
              </button>
            </p>
          ))}
        </div>

        <label htmlFor="ingredient">Ingredient: </label>
        <input
          type="text"
          id="ingredient"
          name="ingredient"
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
          placeholder="Enter your ingredients here.."
        />
        <button id="search-button" onClick={handleIngredient}>
          ➕
        </button>

        <div id="ingredient-error">
          {error.textError && <span id="error-message">{error.textError}</span>}
        </div>
      </div>
    </div>
  );
}

export default Ingredient;
