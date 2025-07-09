import { PlannerThemeContext } from "components/Interface/BondMain";
import abbreviateNumbers from "custom/AbbreviateNumbers";
import { bondExp } from "libs/data";
import { useContext, useEffect, useState } from "react";

function Bond() {
  const theme = useContext(PlannerThemeContext);
  const [hiveSlots, setHiveSlots] = useState(
    localStorage.getItem("hive-slots") || ""
  );
  const [bondBonus, setBondBonus] = useState(
    localStorage.getItem("bonus") || ""
  );
  const [bondData, setBondData] = useState<
    {
      level: number;
      next: string;
      single: string;
      total: string;
    }[]
  >();

  useEffect(() => {
    const newBondData = bondExp.map((item) => {
      let bonus = Number("0." + (100 - Number(bondBonus)));
      if (bondBonus === "" || bondBonus === "0") bonus = 1;
      const abbreviatedNext = abbreviateNumbers(item.next);
      const abbreviatedSingle = abbreviateNumbers(
        Math.round((item.next / 10) * 10000 * bonus)
      );
      const abbreviatedTotal = abbreviateNumbers(
        Math.round((item.next / 10) * 10000 * Number(hiveSlots) * bonus)
      );

      return {
        level: item.level,
        next: abbreviatedNext,
        single: abbreviatedSingle,
        total: abbreviatedTotal,
      };
    });

    setBondData(newBondData);
  }, [hiveSlots, bondBonus]);

  const userSlotsInput = (value: string) => {
    const num = Number(value);

    if (value === "") {
      setHiveSlots("");
      return localStorage.setItem("hive-slots", "");
    }

    if (num > 50) {
      setHiveSlots("50");
      return localStorage.setItem("hive-slots", "50");
    }

    if (num <= 50 && num > 0) {
      setHiveSlots(value.slice(0, 2));
      localStorage.setItem("hive-slots", value.slice(0, 2));
    }
  };

  const userBonusInput = (value: string) => {
    const num = Number(value.slice(0, 2));

    if (value === "") {
      localStorage.setItem("bonus", "");
      return setBondBonus("");
    }

    if (num <= 99 && num >= 0) {
      setBondBonus(value.slice(0, 2));
      localStorage.setItem("bonus", value.slice(0, 2));
    }
  };

  return (
    <div className="bond-container">
      <div
        className={
          theme ? "bond-input-container" : "bond-input-container light-table"
        }
      >
        <div>Unlocked hive slots: </div>
        <input
          className="bond-input"
          type="number"
          maxLength={2}
          value={hiveSlots}
          placeholder="0"
          onChange={(e) => {
            userSlotsInput(e.target.value);
          }}
        />
        <div style={{ marginLeft: 20 }}>Bond Bonus %: </div>
        <input
          className="bond-input"
          value={bondBonus}
          placeholder="0"
          onChange={(e) => {
            userBonusInput(e.target.value);
          }}
        />
      </div>
      <div
        className={
          theme ? "bond-table-container" : "bond-table-container light-table"
        }
      >
        <div
          className={
            theme ? "bond-table-titles" : "bond-table-titles light-table-title"
          }
        >
          <div />
          <div />
          <div />
          <div />
        </div>
        {bondData?.map((item) => {
          return (
            <div
              key={item.level}
              className={
                theme
                  ? "bond-table-value-container"
                  : "bond-table-value-container light-table-title"
              }
            >
              <div>{item.level}</div>
              <div>{item.next}</div>
              <div>{item.single}</div>
              <div>{item.total}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Bond;
