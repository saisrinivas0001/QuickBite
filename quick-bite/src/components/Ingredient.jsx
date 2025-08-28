import React, { useContext, useEffect, useState } from "react";
import { IngredientContext } from "../hooks/IngredientContext";

function Ingredient() {
  const { ingredientList, addIngredient, removeIngredient } = useContext(IngredientContext);

  const [ingredient, setIngredient] = useState("");
  const [error, setError] = useState({});

  const validateText = () => {
    let isValid = true;
    const textBoxError = {};
    const ingredientRegex = /^[A-Za-z]+$/;

    if (!ingredient.trim()) {
      isValid = false;
      textBoxError.textError = "Ingredient should not be empty..!";
    } else if (!ingredientRegex.test(ingredient)) {
      isValid = false;
      textBoxError.textError =
        "Ingredient should only contain alphabets (no numbers, special characters, white spaces)..!";
    }

    setError(textBoxError);
    return isValid;
  };

  const handleIngredient = (e) => {
    e.preventDefault();
    if (validateText()) {
      addIngredient(ingredient.trim());
      setIngredient("");
    }
  };

  const handleRemove = (index) => {
    removeIngredient(index);
  };

  useEffect(() => {
    console.log("Ingredient List:", ingredientList);
  }, [ingredientList]);

  return (
    <div>
      <h1 id="quickbite-h1">Quick Bite</h1>
      <div id="ingredient-input">
        <div
          id="ingredient-list"
          style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "10px" }}
        >
          {ingredientList.map((ingredient, index) => (
            <span
              key={index}
              style={{
                display: "inline-flex",
                alignItems: "center",
                background: "#f0f0f0",
                padding: "5px 10px",
                borderRadius: "20px",
              }}
            >
              {ingredient}
              <button
                onClick={() => handleRemove(index)}
                style={{
                  marginLeft: "8px",
                  border: "none",
                  background: "transparent",
                  color: "red",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                ❌
              </button>
            </span>
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
