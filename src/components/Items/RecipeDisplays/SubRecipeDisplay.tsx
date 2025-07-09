import { useEffect, useContext } from "react";
import { ThemeContext } from "components/Interface/CalcMain";
import { recipeMaterial } from "libs/types";

type Props = {
  item: recipeMaterial;
  subIndex: number;
  materialValueCheck: {
    check: boolean;
    value: string | number;
    subValues: { displayValue: string; actualValue: string }[];
  }[];
  subValueCraftableCheck: (check: boolean) => void;
};

function SubRecipeDisplay({
  item,
  subIndex,
  materialValueCheck,
  subValueCraftableCheck,
}: Props) {
  const theme = useContext(ThemeContext);

  useEffect(() => {
    let finalSubCheck: string[] = [];
    let subCheck = materialValueCheck.filter((item) => {
      return item.check !== true;
    });

    if (subCheck.filter((item) => item.subValues.length === 0).length > 0) {
      return subValueCraftableCheck(false);
    }

    subCheck.forEach((item) => {
      if (item.subValues.length > 0) {
        item.subValues.forEach((subItem) => {
          finalSubCheck.push(subItem.actualValue);
        });
      }
    });

    return finalSubCheck.filter((item) => {
      return Number(item.split(" /")[0]) < Number(item.split("/ ")[1]);
    }).length > 0
      ? subValueCraftableCheck(false)
      : subValueCraftableCheck(true);
  }, [materialValueCheck, subValueCraftableCheck]);

  return (
    <div
      className={
        theme
          ? "item-display-subrecipe dark-description"
          : "item-display-subrecipe"
      }
    >
      {item.subRecipe?.map((item, index) => {
        return (
          <div key={index} className="item-display-subrecipe-content">
            <img
              className="item-display-content"
              src={require(`images/${item.image}`)}
              alt={item.material}
              style={{ width: 30 }}
            />
            <div className="item-display-subcontent">
              <span>{item.material}:</span>
            </div>
            <div className="item-display-content">
              {materialValueCheck[subIndex].subValues[index]?.displayValue}
            </div>
            {Number(
              materialValueCheck[subIndex].subValues[index]?.actualValue.split(
                " /"
              )[0]
            ) >=
            Number(
              materialValueCheck[subIndex].subValues[index]?.actualValue.split(
                "/ "
              )[1]
            ) ? (
              <div>✅</div>
            ) : (
              ""
            )}
          </div>
        );
      })}
    </div>
  );
}

export default SubRecipeDisplay;
