import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

class LightSwitch extends React.Component {
  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label style={{}}>
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
                width: `50px`,
                height: `50px`,
                background: `black`,
              }}
            ></div>
          </label>
        )}
      </ThemeToggler>
    )
  }
}

export default LightSwitch
