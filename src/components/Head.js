import React from "react"
import Helmet from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

const Head = () => {
  const {
    site: {
      siteMetadata: {
        title,
        description,
        keywords,
        url,
        language,
        ogLanguage,
        image,
        imageWidth,
        imageHeight,
        twitter,
      },
    },
  } = useStaticQuery(query)

  return (
    <Helmet>
      <html lang={language} />
      <link itemProp="url" href={url} />
      <title itemProp="name">{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={image} />
      {/* Facebook */}
      <meta property="og:language" content={ogLanguage} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${url}${image}`} />
      <meta property="og:image:width" content={imageWidth} />
      <meta property="og:image:height" content={imageHeight} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:alt" content={title} />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:creator" content={twitter} />
      <meta name="twitter:site" content={twitter} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={title} />
    </Helmet>
  )
}

const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        keywords
        url
        language
        ogLanguage
        image
        imageWidth
        imageHeight
        twitter
      }
    }
  }
`

export default Head
