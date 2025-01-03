import * as React from "react"

const seoData = {
  "title": "Nachiket Erlekar",
  "description": "Nachiket Erlekar is a passionate Software Developer, with a focus on backend systems, cloud and data-driven technologies.",
  "author": "Nachiket Erlekar",
  "siteUrl": "https://amoddhopavkar.me",
}

const Seo = () => (
  <>
    <title>{seoData.title}</title>
    <meta name="description" content={seoData.description} />
    <meta property="og:title" content={seoData.title} />
    <meta property="og:description" content={seoData.description} />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:creator" content={seoData.author} />
    <meta name="twitter:title" content={seoData.title} />
    <meta name="twitter:description" content={seoData.description} />
  </>
)

export default Seo
