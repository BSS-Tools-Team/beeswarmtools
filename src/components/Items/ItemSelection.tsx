import { itemTypes } from "libs/types";

type Props = {
  itemData: itemTypes;
  itemSelection: number;
  changeItemSelection: (selection: number) => void;
};

function ItemSelection({
  itemData,
  itemSelection,
  changeItemSelection,
}: Props) {
  return (
    <div className="items-titles-container">
      {itemData.map((item, index) => {
        return (
          <div
            key={index}
            className={
              itemSelection === index
                ? "items-titles items-selected"
                : "items-titles "
            }
            onClick={() => changeItemSelection(index)}
          >
            <div className="items-content">
              <span>{item.name}</span>
            </div>
            <img
              src={require(`images/${item.image}`)}
              alt={item.name}
              style={{ width: 50 }}
            />
          </div>
        );
      })}
    </div>
  );
}

export default ItemSelection;
