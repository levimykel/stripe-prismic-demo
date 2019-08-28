import React from 'react'
import { RichText, Link as PrismicLink } from 'prismic-reactjs'
import { linkResolver } from 'utils/linkResolver'

const renderRelatedPages = (items, colors) => {
  return items.map((item,index) => {
    const textColor = index%2 == 0 ? colors.secondary_07 : colors.primary_07
    const darkColor = index%2 == 0 ? colors.secondary_14 : colors.primary_14
    const lightColor = index%2 == 0 ? colors.secondary28 : colors.primary28
    const linkUrl = PrismicLink.url(item.link_to_the_relevant_page, linkResolver)
    return (
      <a className={`common-Link globalFooterCard`}
        href={ linkUrl }
        key={"related-page-"+index}
      >
        <svg viewBox="0 0 130 130">
          <path className="hover-fillDark" fill={ darkColor }
            d="M113 112H61.36c-2.224 0-4.466-1.574-5.27-3.277C54.005 104.313 46.457 102 37 102H5a5 5 0 0 1-5-5V25a5 5 0 0 1 5-5h33c11.045 0 20 4.477 20 10v37h60v40a5 5 0 0 1-5 5z">
          </path>
          <path className="hover-fillLight" fill={ lightColor }
            d="M121.993 93c0 6-12.363 10.997-27.384 10.997h-3.464v.01h-23.61c-1.823 0-5.27.637-6.82 1.627-.59.377-1.285.544-1.893.195a1.632 1.632 0 0 1-.817-1.416l.003-74.91c0-4.14 4.815-7.5 10.755-7.5h10.51c.075-.002.148-.008.224-.008h13.17c8.922 0 20.682-2.238 25.62-5.573 1.587-1.072 3.702-.09 3.702 1.82 0 0 .007 67.756 0 74.756z">
          </path>
          <path stroke="#FFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"
            d="M80.5 86.5h26m-26-10h26m-26-17h26m-26-10h26m-26-10h26"></path>
          <path stroke="#FFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"
            d="M68.992 78.007l3.516 3.494-3.516 3.496m0-43.99l3.516 3.495-3.516 3.496"></path>
        </svg>
        <h2
          className="common-UppercaseText common-Link--arrow"
          style={{ color: textColor }}
        >
          { RichText.asText(item.text) }
        </h2>
        <p className="common-BodyText">{ RichText.asText(item.download_text) }</p>
      </a>
    )
  })
}

const RelatedPages = ({ slice, colors }) => {
  return (
    <div>
      <section className="globalFooterCards">
        <div className="container-xl">
          { renderRelatedPages(slice.items, colors) }
        </div>
      </section>
    </div>
  )
}

export default RelatedPages
