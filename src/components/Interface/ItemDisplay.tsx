import { useContext } from "react";
import { ThemeContext } from "components/Interface/CalcMain";
import Inventory from "../Inventory/Inventory";
import Bags from "../Items/Bags/Bags";
import Belts from "../Items/Belts/Belts";
import Boots from "../Items/Boots/Boots";
import Guards from "../Items/Guards/Guards";
import Masks from "../Items/Masks/Masks";
import Planters from "../Items/Planters/Planters";
import Tools from "../Items/Tools/Tools";

type Props = {
  displaySelection: number;
};

function ItemDisplay({ displaySelection }: Props) {
  const theme = useContext(ThemeContext);

  return (
    <div
      className={
        theme ? "display-container dark-background" : "display-container"
      }
    >
      {displaySelection === 0 && <Inventory />}
      {displaySelection === 1 && <Tools />}
      {displaySelection === 2 && <Bags />}
      {displaySelection === 3 && <Masks />}
      {displaySelection === 4 && <Guards />}
      {displaySelection === 5 && <Belts />}
      {displaySelection === 6 && <Boots />}
      {displaySelection === 7 && <Planters />}
    </div>
  );
}

export default ItemDisplay;
