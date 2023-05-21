import React, { useEffect, useState } from "react";
import Detail from "./Detail";
import RecipeData from "./Data";
import { RecipeType } from "./utils/types";

const App: React.FC = () => {
  const [recipes, setRecipes] = useState<Array<RecipeType>>([]);
  const [recipeToDisplay, setRecipeToDisplay] = useState<RecipeType>();

  useEffect(() => {
    getAndSetRecipeTitles();
  });

  function getAndSetRecipeTitles() {
    setRecipes(RecipeData);
  }
  return (
    <>
      {recipes.map((recipe) => (
        <>
          <button onClick={() => setRecipeToDisplay(recipe)}>{recipe.title}</button>
          <br />
        </>
      ))}
      <Detail recipe={recipeToDisplay} />
    </>
  );
};

export default App;
