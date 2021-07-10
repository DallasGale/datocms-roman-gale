import React from "react";
import Image from "gatsby-image";
import cn from 'classnames'
import { Link } from 'gatsby'

export default function CoverImage({ title, fluid, slug }) {
  const image = (
    <Image
      fluid={{
        ...fluid,
        alt: `Cover Image for ${title}`,
      }}
      style={{height: "50vh"}}
    />
  )
  return (
    <div className="-mx-5 sm:mx-0">
      {slug ? (
        <Link to={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
