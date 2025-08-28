import React, { createContext, useState } from "react";

export const IngredientContext = createContext();

export const IngredientProvider = ({ children }) => {
  const [ingredientList, setIngredientList] = useState([]);

  const addIngredient = (ingredient) => {
    const trimmed = ingredient.trim();
    if (trimmed && !ingredientList.includes(trimmed)) {
      setIngredientList((prev) => [...prev, trimmed]);
    }
  };

  const removeIngredient = (index) => {
    setIngredientList((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <IngredientContext.Provider
      value={{ ingredientList, addIngredient, removeIngredient }}
    >
      {children}
    </IngredientContext.Provider>
  );
};
