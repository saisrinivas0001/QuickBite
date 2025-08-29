import React, { createContext, useState, useEffect } from "react";

export const IngredientContext = createContext();

export const IngredientProvider = ({ children }) => {
  // Initialize directly from localStorage
  const [ingredientList, setIngredientList] = useState(() => {
    const storedList = localStorage.getItem("ingredientList");
    return storedList ? JSON.parse(storedList) : [];
  });

  // Save to localStorage whenever ingredientList changes
  useEffect(() => {
    localStorage.setItem("ingredientList", JSON.stringify(ingredientList));
  }, [ingredientList]);

  const addIngredient = (ingredient) => {
    const trimmed = ingredient.trim();
    if (trimmed && !ingredientList.includes(trimmed)) {
      setIngredientList((prev) => [...prev, trimmed]);
    }
  };

  const removeIngredient = (index) => {
    setIngredientList((prev) => prev.filter((_, i) => i !== index));
  };

  const emptyIngredientList = () => {
    setIngredientList([]);
  };

  return (
    <IngredientContext.Provider
      value={{
        ingredientList,
        addIngredient,
        removeIngredient,
        emptyIngredientList,
      }}
    >
      {children}
    </IngredientContext.Provider>
  );
};
