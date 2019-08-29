import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

import LightSwitch from "./lightSwitch"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <>
          <h1
            style={{
              fontSize: "2.2rem",
              marginTop: 0,
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: "var(--textNormal)",
              }}
              to={`/`}
              title="home page"
            >
              {title}
            </Link>
          </h1>
        </>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `var(--textLink)`,
            }}
            to={`/`}
            title="home page"
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header
          style={{
            display: `flex`,
            justifyContent: `space-between`,
            flexWrap: `wrap`,
            marginBottom: rhythm(1.5),
          }}
        >
          {header}
          <LightSwitch />
        </header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org" title="Gatsby">
            Gatsby
          </a>{" "}
          By Tanner Hoffman
        </footer>
      </div>
    )
  }
}

export default Layout
