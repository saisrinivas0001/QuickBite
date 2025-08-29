import React, { useContext } from "react";
import { useFetchMeals } from "../hooks/useFetchMeals";
import { IngredientContext } from "../hooks/IngredientContext";

function IngredientSearch() {
  const { ingredientList } = useContext(IngredientContext);

  const { data, loading, error } = useFetchMeals(ingredientList);

  if (ingredientList.length === 0) {
    return (
      <div>
        <h2>Ingredient List Empty..!</h2>
        <p style={{ color: "gray" }}>Add ingredients to search recipes.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Recipies Suggested: </h2>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {data && data.meals && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "1rem",
          }}
        >
          {data.meals.map((meal) => (
            <div
              key={meal.idMeal}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "10px",
                textAlign: "center",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <h3 style={{ marginTop: "10px", fontSize: "1rem" }}>
                {meal.strMeal}
              </h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default IngredientSearch;
