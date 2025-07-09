import Bond from "components/BondCalc/Bond";
import { useEffect, useState, createContext } from "react";
import { Link } from "react-router-dom";

export const PlannerThemeContext = createContext(true);

function BondMain() {
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
      console.log(true);
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
            A tool to calculate required amount of honey and treats for each
            level.
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
                To use the Bond Calculator, enter your current{" "}
                <span style={{ fontWeight: "bold", color: "rgb(53, 151, 97)" }}>
                  bond from treat % bonus
                </span>
                , which includes gifted puppy bee (20%) and moon amulet bonuses
                (example 5%), as well as your current unlocked{" "}
                <span style={{ fontWeight: "bold", color: "rgb(53, 151, 97)" }}>
                  hive slot amount
                </span>
                .
                <br />
                <br />
                The level, bond needed for next level, total honey needed for a
                single bee to next level and the total honey needed for all your
                hive to next level.
              </div>
            )}
          </div>
          <Bond />
        </div>
      </div>
    </PlannerThemeContext.Provider>
  );
}

export default BondMain;
