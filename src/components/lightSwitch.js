import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

class LightSwitch extends React.Component {
  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
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
                border: "2px solid var(--textLink)",
                width: "50px",
                position: "relative",
                height: "22px",
                background: "black",
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
                  background: "white",
                  width: "15px",
                  display: "flex",
                  height: "16px",
                  transition: "all .2sec ease",
                }}
              ></div>
            </div>
          </label>
        )}
      </ThemeToggler>
    )
  }
}

export default LightSwitch
