type Props = {
  displaySelection: number;
  changeUserDisplaySelection: (selection: number) => void;
};

function ItemSelection({
  displaySelection,
  changeUserDisplaySelection,
}: Props) {
  const items = [
    "Inventory",
    "Tools",
    "Bags",
    "Masks",
    "Guards",
    "Belts",
    "Boots",
    "Planters",
  ];
  return (
    <div className="item-select-container">
      {items.map((item, index) => {
        return (
          <div
            key={index}
            className={
              displaySelection === index
                ? "item-select-text items-selected"
                : "item-select-text"
            }
            onClick={() => changeUserDisplaySelection(index)}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
}

export default ItemSelection;
