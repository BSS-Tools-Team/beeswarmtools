import { useState, useEffect } from "react";
import { maskRecipes, masks } from "libs/data";
import Recipe from "../RecipeDisplays/Recipe";
import ItemSelection from "../ItemSelection";
import { recipeMaterial } from "libs/types";

function Masks() {
  const [maskSelection, setMaskSelection] = useState(0);
  const [recipeData, setRecipeData] = useState<recipeMaterial[]>(
    maskRecipes[0].honey
  );

  useEffect(() => {
    switch (maskSelection) {
      case 0:
        return setRecipeData(maskRecipes[0].honey);

      case 1:
        return setRecipeData(maskRecipes[1].bubble);

      case 2:
        return setRecipeData(maskRecipes[2].fire);

      case 3:
        return setRecipeData(maskRecipes[3].gummy);

      case 4:
        return setRecipeData(maskRecipes[4].diamond);

      case 5:
        return setRecipeData(maskRecipes[5].demon);
    }
  }, [maskSelection]);

  const changeMaskSelection = (selection: number) => {
    setMaskSelection(selection);
  };

  return (
    <div className="masks-container">
      <ItemSelection
        itemData={masks}
        itemSelection={maskSelection}
        changeItemSelection={changeMaskSelection}
      />
      <Recipe recipeData={recipeData} />
    </div>
  );
}

export default Masks;
