import { useState, useEffect } from "react";
import { bootRecipes, boots } from "libs/data";
import Recipe from "../RecipeDisplays/Recipe";
import ItemSelection from "../ItemSelection";
import { recipeMaterial } from "libs/types";

function Boots() {
  const [bootSelection, setBootSelection] = useState(0);
  const [recipeData, setRecipeData] = useState<recipeMaterial[]>(
    bootRecipes[0].beekeeper
  );

  useEffect(() => {
    switch (bootSelection) {
      case 0:
        return setRecipeData(bootRecipes[0].beekeeper);

      case 1:
        return setRecipeData(bootRecipes[1].coconut);

      case 2:
        return setRecipeData(bootRecipes[2].gummy);
    }
  }, [bootSelection]);

  const changeBootSelection = (selection: number) => {
    setBootSelection(selection);
  };

  return (
    <div className="masks-container">
      <ItemSelection
        itemData={boots}
        itemSelection={bootSelection}
        changeItemSelection={changeBootSelection}
      />
      <Recipe recipeData={recipeData} />
    </div>
  );
}

export default Boots;
