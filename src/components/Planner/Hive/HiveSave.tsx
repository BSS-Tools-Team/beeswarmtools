import { useContext, useEffect, useState } from "react";
import { PlannerThemeContext } from "components/Interface/PlannerMain";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";

function HiveSave({
  hiveSlots,
}: {
  hiveSlots: {
    name: string;
    id: string;
    image: string;
    mutation?: string;
    beequip?: string;
  }[];
}) {
  const theme = useContext(PlannerThemeContext);
  const [saveDisplayCheck, setSaveDisplayCheck] = useState(false);
  const [copyCheck, setCopyCheck] = useState(false);
  const [hiveNameInput, setHiveNameInput] = useState("");
  const [hiveSlotNames, setHiveSlotNames] = useState<string[]>([]);
  const [hiveSlotSelection, setHiveSlotSelection] = useState(0);
  const [hiveExportCode, setHiveExportCode] = useState("");

  useEffect(() => {
    setHiveSlotNames([]);

    for (let i = 0; i < 3; i++) {
      let saveSlot = localStorage.getItem(`HiveSlot-${i + 1}`);
      if (saveSlot) {
        if (saveSlot?.split("-")[0] === "") {
          setHiveSlotNames((current) => [...current, `Save Slot ${i + 1}`]);
        } else {
          setHiveSlotNames((current) => [
            ...current,
            saveSlot?.split("-")[0] || "",
          ]);
        }
      } else {
        setHiveSlotNames((current) => [...current, "Empty"]);
      }
    }
  }, [saveDisplayCheck]);

  useEffect(() => {
    const hiveArrayToString = hiveSlots
      .map((item) => {
        if (item.name.includes("★")) {
          if (item.mutation && item.beequip) {
            return (
              item.beequip.slice(0, 2).toLocaleUpperCase() +
              "★" +
              item.id +
              item.mutation.slice(0, 2).toLocaleUpperCase()
            );
          }

          if (item.beequip) {
            return item.beequip.slice(0, 2).toLocaleUpperCase() + "★" + item.id;
          }

          if (item.mutation) {
            return (
              "★" + item.id + item.mutation?.slice(0, 2).toLocaleUpperCase()
            );
          }

          return "★" + item.id;
        }

        if (item.mutation && item.beequip) {
          return (
            item.beequip.slice(0, 2).toLocaleUpperCase() +
            "/" +
            item.id +
            item.mutation.slice(0, 2).toLocaleUpperCase()
          );
        }

        if (item.beequip) {
          return item.beequip.slice(0, 2).toLocaleUpperCase() + "/" + item.id;
        }

        if (item.mutation) {
          return "/" + item.id + item.mutation?.slice(0, 2).toLocaleUpperCase();
        }
        return "/" + item.id;
      })
      .join("-");

    setHiveExportCode(hiveArrayToString);
  }, [hiveSlots]);

  const changeCopyCheck = () => {
    setCopyCheck(true);

    setTimeout(() => setCopyCheck(false), 1000);
  };

  const userHiveInput = (event: string) => {
    if (event.length > 10) return;

    setHiveNameInput(event);
  };

  const saveHiveSlot = () => {
    localStorage.setItem(
      `HiveSlot-${hiveSlotSelection}`,
      hiveNameInput + "-" + hiveExportCode
    );

    setHiveNameInput("");
    setSaveDisplayCheck(false);
    setHiveSlotSelection(0);
  };

  const closeSave = () => {
    setSaveDisplayCheck(false);
    setHiveNameInput("");
    setHiveSlotSelection(0);
  };

  return (
    <div className="planner-btn-container">
      {saveDisplayCheck && (
        <div
          className={
            saveDisplayCheck ? "planner-blur planner-visible" : "planner-blur"
          }
          onClick={closeSave}
        />
      )}
      {saveDisplayCheck && (
        <div
          className={
            saveDisplayCheck
              ? theme
                ? "planner-save-display planner-visible dark-info"
                : "planner-save-display planner-visible planner-light"
              : "planner-save-display"
          }
        >
          <div className="planner-save-name-container">
            <div className="planner-save-title">Hive name</div>
            <div className="planner-save-desc">
              Enter a name for your hive, leave this empty for a default name.
            </div>
            <input
              className="planner-save-input"
              placeholder="Max 10 Characters"
              onChange={(event) => userHiveInput(event.target.value)}
            />
          </div>
          <div className="planner-save-slot-container">
            <div className="planner-save-title">Hive save slot</div>
            <div className="planner-save-desc">
              Pick an empty slot or overwrite an existing slot to save.
            </div>
            <div className="planner-save-slots">
              {hiveSlotNames.map((name, index) => {
                return (
                  <div
                    key={index}
                    className={
                      name === "Empty"
                        ? "planner-save-slot-content planner-slot-empty"
                        : name.toLocaleLowerCase().includes("blue")
                        ? "planner-save-slot-content planner-slot-blue"
                        : name.toLocaleLowerCase().includes("red")
                        ? "planner-save-slot-content planner-slot-red"
                        : "planner-save-slot-content planner-slot-filled"
                    }
                    style={
                      hiveSlotSelection - 1 === index
                        ? theme
                          ? { border: "2px solid #fff" }
                          : { border: "2px solid #111" }
                        : {}
                    }
                    onClick={() => setHiveSlotSelection(index + 1)}
                  >
                    {name}
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <div className={copyCheck ? "planner-export-title-container" : ""}>
              <div className="planner-save-title">Export code</div>
              {copyCheck && <div>Copied code!</div>}
            </div>
            <div className="planner-save-desc">
              Use this code to import your hive or share with others.
            </div>
            <div className="planner-save-export">
              <FontAwesomeIcon
                icon={faCopy}
                onClick={() => {
                  changeCopyCheck();
                  navigator.clipboard.writeText(
                    hiveNameInput + "-" + hiveExportCode
                  );
                }}
              />
              <div>{hiveNameInput + "-" + hiveExportCode}</div>
            </div>
          </div>

          <div className="planner-btn-container">
            <div
              className={
                hiveSlotSelection > 0
                  ? "planner-btn planner-save-btn planner-load"
                  : "planner-btn planner-save-btn planner-disabled"
              }
              onClick={() => (hiveSlotSelection > 0 ? saveHiveSlot() : "")}
            >
              Save
            </div>
            <div
              className="planner-btn planner-save-btn planner-load"
              onClick={closeSave}
            >
              Close
            </div>
          </div>
        </div>
      )}
      <div
        className="planner-btn planner-save"
        onClick={() => setSaveDisplayCheck(true)}
      >
        Save
      </div>
    </div>
  );
}

export default HiveSave;
