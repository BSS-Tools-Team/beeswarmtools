import { useState } from "react";
import Items from "./Items";
import Materials from "./Materials";

function Inventory() {
  const [userInventorySelection, setUserInventorySelection] = useState(0);

  return (
    <div>
      <div className="inventory-titles-container">
        <div
          className={
            userInventorySelection === 0
              ? "inventory-titles items-selected"
              : "inventory-titles"
          }
          onClick={() => setUserInventorySelection(0)}
        >
          Items
        </div>
        <div
          className={
            userInventorySelection === 1
              ? "inventory-titles items-selected"
              : "inventory-titles"
          }
          onClick={() => setUserInventorySelection(1)}
        >
          Materials
        </div>
      </div>
      {userInventorySelection === 0 && <Items />}
      {userInventorySelection === 1 && <Materials />}
    </div>
  );
}

export default Inventory;
