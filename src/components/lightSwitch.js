import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

class LightSwitch extends React.Component {
  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => {
          console.log(theme)
          return (
            <label>
              <input
                style={{
                  border: `0`,
                  clip: `rect(0 0 0 0)`,
                  height: `1px`,
                  margin: `-1px`,
                  overflow: `hidden`,
                  padding: `0`,
                  position: `absolute`,
                  width: `1px`,
                }}
                type="checkbox"
                onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
                checked={theme === "dark"}
              />{" "}
              <div
                style={{
                  cursor: "pointer",
                  border: "2px solid var(--textLink)",
                  width: "50px",
                  borderRadius: 3,
                  position: "relative",
                  height: "26px",
                  background: "#211e26",
                  transition: "all 0.5s ease 0s",
                  padding: "1px",
                  display: "flex",
                  justifyContent: `${
                    theme === "dark" ? "flex-end" : "flex-start"
                  }`,
                  transition: "all .2sec ease",
                }}
              >
                <div
                  className="switch"
                  style={{
                    position: "absolute",
                    background: `${theme === "dark" ? "#3a3442" : "#fff"}`,
                    borderRadius: 3,
                    width: "20px",
                    display: "flex",
                    height: "20px",
                    transition: "all .2sec ease",
                  }}
                >
                  <p
                    style={{
                      marginBottom: "0",
                      textAlign: "right",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      transform: "translateX(2px)",
                    }}
                  >
                    {theme === "dark" ? "🌙" : "☀️"}
                  </p>
                </div>
              </div>
            </label>
          )
        }}
      </ThemeToggler>
    )
  }
}

export default LightSwitch
