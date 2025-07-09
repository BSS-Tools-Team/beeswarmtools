import { useContext, useState } from "react";
import { PlannerThemeContext } from "components/Interface/PlannerMain";

function HiveCount({
  hiveCount,
}: {
  hiveCount: {
    name: string;
    count: number;
  }[];
}) {
  const [showHiveCount, setShowHiveCount] = useState(false);
  const theme = useContext(PlannerThemeContext);

  return (
    <div>
      <div
        className={
          theme
            ? "planner-hive-show dark-display dark-font"
            : "planner-hive-show"
        }
        onClick={() => setShowHiveCount(!showHiveCount)}
      >
        {showHiveCount ? "Hide hive count" : "Show hive count"}
      </div>
      {showHiveCount && (
        <div
          className={
            theme
              ? "planner-hive-count dark-display dark-font"
              : "planner-hive-count"
          }
        >
          {hiveCount.map((slot, index) => {
            return (
              <div key={index} className="planner-hive-count-content">
                {slot.name}: {slot.count}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default HiveCount;
