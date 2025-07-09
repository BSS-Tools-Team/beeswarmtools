import { useState, useEffect } from "react";
import { toolRecipes, tools } from "libs/data";
import Recipe from "../RecipeDisplays/Recipe";
import ItemSelection from "../ItemSelection";
import { recipeMaterial } from "libs/types";

function Tools() {
  const [toolSelection, setToolSelection] = useState(0);
  const [recipeData, setRecipeData] = useState<recipeMaterial[]>(
    toolRecipes[0].petal
  );

  useEffect(() => {
    switch (toolSelection) {
      case 0:
        return setRecipeData(toolRecipes[0].petal);

      case 1:
        return setRecipeData(toolRecipes[1].tide);

      case 2:
        return setRecipeData(toolRecipes[2].scythe);

      case 3:
        return setRecipeData(toolRecipes[3].gummy);
    }
  }, [toolSelection]);

  const changeToolSelection = (selection: number) => {
    setToolSelection(selection);
  };

  return (
    <div className="masks-container">
      <ItemSelection
        itemData={tools}
        itemSelection={toolSelection}
        changeItemSelection={changeToolSelection}
      />
      <Recipe recipeData={recipeData} />
    </div>
  );
}

export default Tools;
