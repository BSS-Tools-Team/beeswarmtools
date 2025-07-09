import { useState, useEffect } from "react";
import { planterRecipes, planters } from "libs/data";
import Recipe from "../RecipeDisplays/Recipe";
import ItemSelection from "../ItemSelection";
import { recipeMaterial } from "libs/types";

function Boots() {
  const [planterSelection, setPlanterSelection] = useState(0);
  const [recipeData, setRecipeData] = useState<recipeMaterial[]>(
    planterRecipes[0].blue
  );

  useEffect(() => {
    switch (planterSelection) {
      case 0:
        return setRecipeData(planterRecipes[0].blue);

      case 1:
        return setRecipeData(planterRecipes[1].red);

      case 2:
        return setRecipeData(planterRecipes[2].tacky);

      case 3:
        return setRecipeData(planterRecipes[3].pesticide);

      case 4:
        return setRecipeData(planterRecipes[4].hydroponic);

      case 5:
        return setRecipeData(planterRecipes[5].heattreated);
      case 6:
        return setRecipeData(planterRecipes[6].petal);
      case 7:
        return setRecipeData(planterRecipes[7].plenty);
    }
  }, [planterSelection]);

  const changePlanterSelection = (selection: number) => {
    setPlanterSelection(selection);
  };

  return (
    <div className="items-container">
      <ItemSelection
        itemData={planters}
        itemSelection={planterSelection}
        changeItemSelection={changePlanterSelection}
      />
      <Recipe recipeData={recipeData} />
    </div>
  );
}

export default Boots;
