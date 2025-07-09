import { useState, useEffect } from "react";
import { bagRecipes, bags } from "libs/data";
import Recipe from "../RecipeDisplays/Recipe";
import ItemSelection from "../ItemSelection";
import { recipeMaterial } from "libs/types";

function Bags() {
  const [bagSelection, setBagSelection] = useState(0);
  const [recipeData, setRecipeData] = useState<recipeMaterial[]>(
    bagRecipes[0].coconut
  );

  useEffect(() => {
    switch (bagSelection) {
      case 0:
        return setRecipeData(bagRecipes[0].coconut);
    }
  }, [bagSelection]);

  const changeBagSelection = (selection: number) => {
    setBagSelection(selection);
  };

  return (
    <div className="masks-container">
      <ItemSelection
        itemData={bags}
        itemSelection={bagSelection}
        changeItemSelection={changeBagSelection}
      />
      <Recipe recipeData={recipeData} />
    </div>
  );
}

export default Bags;
