import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "components/Interface/CalcMain";
import { inventoryMaterials } from "libs/data";

function Materials() {
  const [itemQuantity, setItemQuantity] = useState<string[]>([]);
  const theme = useContext(ThemeContext);

  const changeItemQuantity = (name: string, value: string) => {
    if (!/^[A-Za-z0-9.]*$/.test(value)) {
      return;
    }

    let numberAbbreviation = value.toLocaleLowerCase().match(/\d+/g)?.join();
    let letterAbbreviation = value
      .toLocaleLowerCase()
      .match(/[k, m, b, t, q]+/g)
      ?.join()
      .slice(0, 1);
    let finalValue = "";

    if (
      numberAbbreviation?.includes(",") &&
      letterAbbreviation &&
      numberAbbreviation.length < 5
    ) {
      finalValue =
        numberAbbreviation?.slice(0, 4) + letterAbbreviation?.slice(0, 1);

      return localStorage.setItem(name, JSON.stringify(finalValue));
    }

    if (numberAbbreviation && letterAbbreviation) {
      finalValue =
        numberAbbreviation?.slice(0, 3) + letterAbbreviation?.slice(0, 1);

      return localStorage.setItem(name, JSON.stringify(finalValue));
    }

    if (/^\d+$/.test(value)) {
      return localStorage.setItem(name, JSON.stringify(value));
    }
  };

  useEffect(() => {
    const initialItemQuantity = () => {
      let quantity: string[] = [];
      inventoryMaterials.forEach((item) => {
        if (localStorage.getItem(item.name)) {
          quantity?.push(JSON.parse(localStorage.getItem(item.name) || ""));
        } else {
          quantity?.push("0");
        }
      });
      setItemQuantity(quantity);
    };
    initialItemQuantity();
  }, []);

  const resetItemValues = () => {
    inventoryMaterials.forEach((item) => {
      localStorage.setItem(item.name, JSON.stringify("0"));
    });
    setItemQuantity([]);
  };

  return (
    <div
      className={
        theme
          ? "inventory-items-container dark-display"
          : "inventory-items-container"
      }
    >
      <div
        className={theme ? "inventory-desc dark-description" : "inventory-desc"}
      >
        Enter either a full or abbreviated value. <br />
        <span style={{ fontWeight: "bold" }}>
          Example: 1000 or 1k, 100000000 or 100m etc.
        </span>
      </div>
      <div className="inventory-items-content-container">
        {inventoryMaterials.map((item, index) => {
          return (
            <div key={index} className="inventory-items-content">
              <img
                src={require(`images/${item.image}`)}
                alt={item.name}
                style={{ width: 50 }}
              />
              <div className="inventory-items-input-container">
                <input
                  placeholder={
                    itemQuantity.length > 0 ? String(itemQuantity[index]) : "0"
                  }
                  className="inventory-items-input"
                  onChange={(event) =>
                    changeItemQuantity(item.name, event.target.value)
                  }
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="inventory-reset-button" onClick={resetItemValues}>
        Reset
      </div>
    </div>
  );
}

export default Materials;
