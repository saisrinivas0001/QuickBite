import React from "react";
import { IngredientProvider } from "./hooks/IngredientContext";
import HomePage from "./components/HomePage";

function App() {
  return (
    <IngredientProvider>
      <HomePage />
    </IngredientProvider>
  );
}

export default App;
