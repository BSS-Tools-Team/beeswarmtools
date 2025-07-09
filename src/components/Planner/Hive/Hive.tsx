import { useEffect, useState } from "react";
import { HiveSlots } from "libs/data";
import Slots from "../Slots";
import Bees from "../Bees";
import { giftedBeeTypeDisplay, beeTypeDisplay } from "libs/data";
import { DragDropContext } from "react-beautiful-dnd";
import HiveSave from "components/Planner/Hive/HiveSave";
import HiveLoad from "./HiveLoad";
import HiveCount from "./HiveCount";

function Hive({ descriptionCheck }: { descriptionCheck: () => void }) {
  const [hiveSlots, setHiveSlots] = useState(HiveSlots);
  const [giftedCheck, setGiftedCheck] = useState(false);
  const [hiveCount, setHiveCount] = useState<{ name: string; count: number }[]>(
    []
  );
  const [hiveLevel, setHiveLevel] = useState<number | undefined>(
    Number(localStorage.getItem("hiveLevel")) || undefined
  );

  useEffect(() => {
    let hive: string[] = [];
    let finalHiveCount: { name: string; count: number }[] = [];

    hiveSlots.forEach((item) => {
      if (!hive.includes(item.name) && item.name !== "") {
        hive.push(item.name);
        finalHiveCount.push({ name: item.name, count: 0 });
      }
    });

    finalHiveCount.forEach((item, index) => {
      finalHiveCount[index].count = hiveSlots.filter(
        (slot) => slot.name === item.name
      ).length;
    });

    setHiveCount(finalHiveCount);
  }, [hiveSlots]);

  const onBeforeCapture = () => {};
  const onBeforeDragStart = () => {};
  const onDragStart = () => {};
  const onDragUpdate = () => {};

  const onDragEnd = (result: any) => {
    if (result.destination.droppableId.includes("hive")) {
      let beeSelection: {
        name: string;
        id: string;
        image: string;
        mutation?: string;
        beequip?: string;
      }[] = [];

      if (
        Number(result.draggableId) >= 47 &&
        Number(result.draggableId) <= 54
      ) {
        Object.values(beeTypeDisplay).forEach((item) => {
          item.forEach((bee) => {
            if (bee.id === result.draggableId)
              beeSelection.push({
                name: bee.name,
                id: bee.id,
                image: bee.image,
                mutation: bee.name,
              });
          });
        });
      }

      if (Number(result.draggableId) >= 55) {
        Object.values(beeTypeDisplay).forEach((item) => {
          item.forEach((bee) => {
            if (bee.id === result.draggableId)
              beeSelection.push({
                name: bee.name,
                id: bee.id,
                image: bee.image,
                mutation: "",
                beequip: bee.name,
              });
          });
        });
      }

      if (giftedCheck) {
        Object.values(giftedBeeTypeDisplay).forEach((item) => {
          item.forEach((bee) => {
            if (bee.id === result.draggableId)
              beeSelection.push({
                name: bee.name,
                id: bee.id,
                image: bee.image,
                mutation: "",
              });
          });
        });
      } else {
        Object.values(beeTypeDisplay).forEach((item) => {
          item.forEach((bee) => {
            if (bee.id === result.draggableId)
              beeSelection.push({
                name: bee.name,
                id: bee.id,
                image: bee.image,
                mutation: "",
              });
          });
        });
      }

      addToList(
        beeSelection[0],
        result.destination.droppableId.split("hive")[1]
      );
    }
    return;
  };

  const addToList = (
    bee: {
      name: string;
      id: string;
      image: string;
      mutation?: string;
      beequip?: string;
    },
    index: number
  ) => {
    const newBees = hiveSlots.map((hive, hiveIndex) => {
      if (
        Number(bee.id) >= 47 &&
        Number(bee.id) <= 54 &&
        hiveIndex === Number(index)
      ) {
        return {
          ...hiveSlots[hiveIndex],
          mutation: bee.mutation,
        };
      }

      if (Number(bee.id) >= 55 && hiveIndex === Number(index)) {
        return {
          ...hiveSlots[hiveIndex],
          beequip: bee.beequip + ".png",
        };
      }

      if (hiveIndex === Number(index)) {
        return { ...bee };
      }

      return hive;
    });

    setHiveSlots(newBees);
  };

  const removeFromList = (index: number) => {
    const newHive = hiveSlots.map((hive, hiveIndex) => {
      if (hiveIndex === Number(index)) {
        return { name: "", id: "0", image: "EmptyHive.png" };
      }
      return hive;
    });

    setHiveSlots(newHive);
  };

  const selectGifted = () => {
    setGiftedCheck((current) => !current);
  };

  const clearHive = () => {
    setHiveSlots(HiveSlots);
  };

  const changeHiveSlots = (
    hiveData: {
      name: string;
      id: string;
      image: string;
      mutation?: string;
      beequip?: string;
    }[]
  ) => {
    setHiveSlots(hiveData);
  };

  const changeHiveLevel = (hiveLevelInput: number) => {
    if (!hiveLevelInput || hiveLevelInput < 0) {
      localStorage.setItem("hiveLevel", "");
      return setHiveLevel(undefined);
    }
    if (hiveLevelInput > 25) {
      localStorage.setItem("hiveLevel", "25");
      return setHiveLevel(25);
    }
    localStorage.setItem("hiveLevel", hiveLevelInput + "");
    setHiveLevel(hiveLevelInput);
  };

  return (
    <div className="hive-container">
      <DragDropContext
        onBeforeCapture={onBeforeCapture}
        onBeforeDragStart={onBeforeDragStart}
        onDragStart={onDragStart}
        onDragUpdate={onDragUpdate}
        onDragEnd={onDragEnd}
      >
        <Bees
          descriptionCheck={descriptionCheck}
          giftedCheck={giftedCheck}
          selectGifted={selectGifted}
          changeHiveLevel={changeHiveLevel}
        />
        <Slots
          hiveSlots={hiveSlots}
          removeFromList={removeFromList}
          hiveLevel={hiveLevel}
        />
      </DragDropContext>
      {hiveCount.length > 0 && <HiveCount hiveCount={hiveCount} />}
      <div className="hive-btn-container">
        <HiveSave hiveSlots={hiveSlots} />
        <HiveLoad changeHiveSlots={changeHiveSlots} />
        <div className="inventory-reset-button" onClick={clearHive}>
          Clear
        </div>
      </div>
    </div>
  );
}

export default Hive;
