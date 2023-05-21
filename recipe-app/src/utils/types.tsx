export type RecipeType = {
  id: number;
  title: string;
  mealType: string;
  numberOfPeople: number;
  difficultyLevel: string;
  listOfIngredients: Array<string>;
  preparationSteps: Array<string>;
};
