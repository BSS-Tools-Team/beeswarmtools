import { useState, useEffect } from "react";
import { beltRecipes, belts } from "libs/data";
import Recipe from "../RecipeDisplays/Recipe";
import ItemSelection from "../ItemSelection";
import { recipeMaterial } from "libs/types";

function Belts() {
  const [beltSelection, setBeltSelection] = useState(0);
  const [recipeData, setRecipeData] = useState<recipeMaterial[]>(
    beltRecipes[0].mondo
  );

  useEffect(() => {
    switch (beltSelection) {
      case 0:
        return setRecipeData(beltRecipes[0].mondo);

      case 1:
        return setRecipeData(beltRecipes[1].honeycomb);

      case 2:
        return setRecipeData(beltRecipes[2].petal);

      case 3:
        return setRecipeData(beltRecipes[3].coconut);

    }
  }, [beltSelection]);

  const changeBeltSelection = (selection: number) => {
    setBeltSelection(selection);
  };

  return (
    <div className="masks-container">
      <ItemSelection
        itemData={belts}
        itemSelection={beltSelection}
        changeItemSelection={changeBeltSelection}
      />
      <Recipe recipeData={recipeData} />
    </div>
  );
}

export default Belts;
