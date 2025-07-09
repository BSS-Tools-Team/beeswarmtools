import { Droppable } from "react-beautiful-dnd";

function Slots({
  hiveSlots,
  removeFromList,
  hiveLevel,
}: {
  hiveSlots: {
    name: string;
    id: string;
    image: string;
    mutation?: string;
    beequip?: string;
  }[];
  removeFromList: (index: number) => void;
  hiveLevel: number | undefined;
}) {
  return (
    <div className="hive-slot-container-bg">
      <div className="hive-slot-container">
        {hiveSlots.map((hive, index) => {
          return (
            <Droppable droppableId={"hive" + index} key={index}>
              {(provided, snapshot) => (
                <div
                  className="hive-slot"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  onClick={() => removeFromList(index)}
                >
                  {hive.beequip &&
                    hive.id !== "0" &&
                    hive.beequip.slice(1) !== "Remove.png" && (
                      <img
                        className="beequip-image"
                        src={require(`images/Hive/Beequips/${hive.beequip.slice(
                          1
                        )}`)}
                        alt={hive.name}
                      />
                    )}
                  <img
                    src={
                      snapshot.isDraggingOver
                        ? require(`images/Hive/Hover/${hive.image}`)
                        : require(`images/Hive/${hive.image}`)
                    }
                    alt={hive.name}
                  />
                  <div style={{ display: "none" }}>{provided.placeholder}</div>
                  {hive.id !== "0" && (
                    <div
                      className={
                        hive.mutation
                          ? `hive-slot-levels ${hive.mutation}`
                          : "hive-slot-levels"
                      }
                    >
                      {hiveLevel}
                    </div>
                  )}
                </div>
              )}
            </Droppable>
          );
        })}
      </div>
    </div>
  );
}

export default Slots;
