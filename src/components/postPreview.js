import React from "react"
import { rhythm } from "../utils/typography"
import { Link } from "gatsby"

const PostPreview = ({ node, title }) => (
  <article>
    <header>
      <h3
        style={{
          marginBottom: rhythm(1 / 4),
        }}
      >
        <Link style={{ boxShadow: `none` }} to={node.fields.slug} title={title}>
          {title}
        </Link>
      </h3>
      <small>{node.frontmatter.date}</small>
    </header>
    <section>
      <p
        dangerouslySetInnerHTML={{
          __html: node.frontmatter.description || node.excerpt,
        }}
      />
    </section>
  </article>
)

export default PostPreview
