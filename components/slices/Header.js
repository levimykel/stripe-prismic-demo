import React from 'react'
import css from 'styled-jsx/css'
import { RichText, Link as PrismicLink } from 'prismic-reactjs'
import { linkResolver } from 'utils/linkResolver'

const renderLinks = (items) => {
  return items.map((item, index) => {
    const link = PrismicLink.url(item.content_relationship, linkResolver)
    return (
      <li key={'link-'+index}>
        <a href={ link } className="common-Button common-Button--default">
          { RichText.asText(item.text_on_the_button) }
        </a>
      </li>
    )
  })
}

const renderImage = (image) => {
  if (image.url) return( <img src={ image.url } /> ) 
  return null
}

const Header = ({ slice, colors }) => {
  const backgroundStyle = 
    slice.primary.background_color == 'White' ?
    { background: 'none' } :
    {}
  return (
    <section id="header" className="header">
      <div className="container-lg">
        <div className="header-layout">
          <div className="header-content">
            { RichText.render(slice.primary.title, linkResolver) }
            { RichText.render(slice.primary.text, linkResolver) }
            <ul className="header-ctas" role="presentation">
              { renderLinks(slice.items) }
            </ul>
          </div>
          <div className="header-graphic">
            { renderImage(slice.primary.image) }
          </div>
        </div>
      </div>
      <div className="common-StripeGrid anchorBottom">
        <div className="backgroundContainer">
          <div className="grid">
            <div className="background" style={ backgroundStyle }></div>
          </div>
        </div>
        <div className="stripeContainer">
          <div className="grid">
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe" style={{ backgroundColor: colors.secondary_42 }}></div>
            <div className="stripe" style={{ backgroundColor: colors.primary13 }}></div>
            <div className="stripe" style={{ backgroundColor: colors.secondary28 }}></div>
            <div className="stripe" style={{ backgroundColor: colors.primary_50 }}></div>
            <div className="stripe" style={{ backgroundColor: colors.secondary53 }}></div>
            <div className="stripe" style={{ backgroundColor: colors.secondary_42 }}></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        .header-content h1 span.highlight {
          color: ${colors.primary};
        }
      `}</style>
    </section>
  )
}

export default Header
