import { useState, useEffect } from "react";
import { guardRecipes, guards } from "libs/data";
import Recipe from "../RecipeDisplays/Recipe";
import ItemSelection from "../ItemSelection";
import { recipeMaterial } from "libs/types";

function Guards() {
  const [guardSelections, setGuardSelections] = useState(0);
  const [recipeData, setRecipeData] = useState<recipeMaterial[]>(
    guardRecipes[0].bucko
  );

  useEffect(() => {
    switch (guardSelections) {
      case 0:
        return setRecipeData(guardRecipes[0].bucko);

      case 1:
        return setRecipeData(guardRecipes[1].riley);

      case 2:
        return setRecipeData(guardRecipes[2].cobalt);

      case 3:
        return setRecipeData(guardRecipes[3].crimson);
    }
  }, [guardSelections]);

  const changeGuardSelections = (selection: number) => {
    setGuardSelections(selection);
  };

  return (
    <div className="masks-container">
      <ItemSelection
        itemData={guards}
        itemSelection={guardSelections}
        changeItemSelection={changeGuardSelections}
      />
      <Recipe recipeData={recipeData} />
    </div>
  );
}

export default Guards;
