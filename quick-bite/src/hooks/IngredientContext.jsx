import React, { createContext, useState, useEffect } from "react";

export const IngredientContext = createContext();

export const IngredientProvider = ({ children }) => {
  const [ingredientList, setIngredientList] = useState([]);

  
  useEffect(() => {
    const storedList = localStorage.getItem("ingredientList");
    if (storedList) {
      setIngredientList(JSON.parse(storedList));
    }
  }, []);

  
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
