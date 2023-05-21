import React, { useEffect, useState } from "react";
import { RecipeType } from "./utils/types";

type RecipeProps = { recipe: RecipeType | undefined };

const Detail: React.FC<RecipeProps> = (props) => {
  const [recipe, setRecipe] = useState<RecipeType>();

  useEffect(() => {
    setRecipe(props.recipe);
  });
  return recipe ? (
    <>
      <h3>{recipe.title}のつくりかた</h3>
      <p>食事の種類: {recipe.mealType}</p>
      <p>難易度: {recipe.difficultyLevel}</p>
      <p>{recipe.numberOfPeople}人分</p>
      <p>材料</p>
      {recipe.listOfIngredients.map((ingredient) => (
        <li style={{ listStyle: "none" }}>{ingredient}</li>
      ))}
      <p>作り方</p>
      {recipe.preparationSteps.map((step, index) => (
        <li style={{ listStyle: "none" }}>
          {index + 1}.{step}
        </li>
      ))}
    </>
  ) : (
    <p>レシピを選択してください</p>
  );
};

export default Detail;
