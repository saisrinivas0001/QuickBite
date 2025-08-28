import { useEffect, useState } from "react";

export function useFetchMeals(ingredientList) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (ingredientList.length === 0) return;

    // build query string
    let queryString = "";
    for (let i = 0; i < ingredientList.length; i++) {
      queryString += ingredientList[i];
      if (i !== ingredientList.length - 1) {
        queryString += "&"; // add '&' except last item
      }
    }

    // API endpoint
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${queryString}`;

    // fetch data
    setLoading(true);
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch meals");
        return res.json();
      })
      .then((json) => {
        setData(json);
        setError(null);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [ingredientList]);

  return { data, loading, error };
}
