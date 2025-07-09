import { useEffect, useState, createContext } from "react";
import Hive from "components/Planner/Hive/Hive";
import { Link } from "react-router-dom";

export const PlannerThemeContext = createContext(true);

function PlannerMain() {
  const [bssDescriptionCheck, setBssDescriptionCheck] = useState(true);
  const [theme, setTheme] = useState(
    localStorage.getItem("BSS-Theme") === "dark" ? true : false
  );
  const [dropdownCheck, setDropdownCheck] = useState(false);

  const changeTheme = (selection: boolean) => {
    if (selection) {
      localStorage.setItem("BSS-Theme", "dark");
    } else {
      localStorage.setItem("BSS-Theme", "light");
    }
    setTheme((current) => !current);
  };

  useEffect(() => {
    if (!localStorage.getItem("BSS-Theme")) {
      localStorage.setItem("BSS-Theme", "light");
    }
  }, []);

  const descriptionCheck = () => {
    setBssDescriptionCheck(false);
  };

  return (
    <PlannerThemeContext.Provider value={theme}>
      <div
        className="main-parent-container"
        style={{
          backgroundColor: theme ? "rgb(29, 54, 62)" : "rgb(152, 203, 223)",
        }}
      >
        <div
          className={
            dropdownCheck
              ? theme
                ? "dropdown-menu visible dark-info"
                : "dropdown-menu visible"
              : theme
              ? "dropdown-menu dark-info"
              : "dropdown-menu"
          }
        >
          <Link to="/">
            <span />
          </Link>
          <Link to="/hive-planner">
            <span />
          </Link>
          <Link to="/recipe-calculator">
            <span />
          </Link>
          <Link to="/bond-calculator">
            <span />
          </Link>
          <div
            className={
              dropdownCheck
                ? theme
                  ? "dropdown-menu-close dark-font"
                  : "dropdown-menu-close"
                : "hidden"
            }
            onClick={() => setDropdownCheck(false)}
          >
            ✕
          </div>
        </div>
        <div
          className={dropdownCheck ? "dropdown-menu-blur" : ""}
          onClick={() => setDropdownCheck(false)}
        />
        <div
          className={
            theme ? "main-container dark-background" : "main-container"
          }
        >
          <div className="main-title-container">
            <div
              className={theme ? "dark-menu" : "light-menu"}
              onClick={() => setDropdownCheck(true)}
            />
            <div className={theme ? "main-title dark-font" : "main-title"} />
            <div
              onClick={() => changeTheme(!theme)}
              className={theme ? "dark" : "light"}
            />
          </div>
          <div className={theme ? "main-subtitle dark-font" : "main-subtitle"}>
            A tool to help plan your future hive ideas.
          </div>
          <div
            className={theme ? "main-items-container" : "main-items-container"}
          >
            {bssDescriptionCheck && (
              <div
                className={
                  theme ? "main-description dark-info" : "main-description"
                }
                style={{ cursor: "pointer" }}
                onClick={descriptionCheck}
              >
                To use the Hive Planner, select which rarity of bee you want and
                drag the icon into your{" "}
                <span style={{ fontWeight: "bold", color: "rgb(53, 151, 97)" }}>
                  hive.
                </span>{" "}
                <br />
                <br />
                To Delete a bee from your hive, simply click it.
                <br />
                <br /> After you're happy with your hive setup, you can save it
                for later or export it to share with others. <br />
                <br />
                (Hive data only saves on your current device and is deleted if
                you clear your browser cache.)
                <br />
                Warning: 
                <br />
                Putting a beequip on an empty hive slot will cause the load function to break. To fix this, drag and drop the bin icon to empty hive slots to clear out the invisible beequips
                <br />
                Newer beequips (Lei onwards) will not be able to save
              </div>
            )}
            <Hive descriptionCheck={descriptionCheck} />
          </div>
        </div>
      </div>
    </PlannerThemeContext.Provider>
  );
}

export default PlannerMain;
