import React, { useState } from 'react'
import { RichText } from 'prismic-reactjs'
import { linkResolver } from 'utils/linkResolver'
import { customList } from 'utils/htmlSerializer'

const renderQuotes = (items, colors) => {
  return items.map((item,index) => {
    return (
      <li key={"big-stat-"+index}>
        <p className="common-BodyTitle">{ RichText.asText(item.quote) }</p>
        <p className="common-UppercaseText" style={{ color: colors.secondary_07 }}>{ RichText.asText(item.position) }</p>
        <p className="common-BodyText">{ RichText.asText(item.sector) }</p>
      </li>
    )
  })
}

const Overview = ({ slice, colors }) => {
  // Slide the quote left or right
  const maxIndex = slice.items.length-1
  const [quoteIndex, setQuoteIndex] = useState(0);
  const slideRight = () => {
    setQuoteIndex(quoteIndex === maxIndex ? 0 : quoteIndex+1)
  }
  const slideLeft = () => {
    setQuoteIndex(quoteIndex === 0 ? maxIndex : quoteIndex-1)
  }

  return (
    <div className="overview">
      <div className="common-StripeGrid">
        {/* <!-- Background --> */}
        <div className="backgroundContainer">
          <div className="grid">
            <div className="background"></div>
          </div>
        </div>
        {/* <!-- Stripes --> */}
        <div className="stripeContainer">
          <div className="grid">
            <div className="stripe"></div>
            <div className="stripe" style={{ backgroundColor: colors.secondary53 }}></div>
            <div className="stripe" style={{ backgroundColor: colors.secondary_42 }}></div>
            <div className="stripe"></div>
            <div className="stripe" style={{ backgroundColor: colors.primary47 }}></div>
            <div className="stripe" style={{ backgroundColor: colors.primary13 }}></div>
            <div className="stripe"></div>
          </div>
        </div>
      </div>
      <div className="content container-xl">
        <div className="intro">
          <h3 className="common-UppercaseTitle">{ RichText.asText(slice.primary.title) }</h3>
          { RichText.render(slice.primary.text, linkResolver, customList(colors)) }
        </div>
        <div className="common-Card quotes" data-visible-quote={quoteIndex}>
          <ul>
            { renderQuotes(slice.items, colors) }
          </ul>
          <div className="common-Button nav previous" onClick={ slideLeft }>
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15"
              viewBox="0 0 17 15">
              <path fill="#525F7F" fillRule="evenodd"
                d="M11.3268469,6 L1.50049595,6 C0.665550661,6 0,6.67157288 0,7.5 C0,8.33420277 0.671794918,9 1.50049595,9 L11.3268469,9 L7.89289404,12.4393398 C7.3105345,13.0251263 7.3105345,13.9748737 7.89289404,14.5606602 C8.47525358,15.1464466 9.41944494,15.1464466 10.0018045,14.5606602 L17,7.5 L10.0018045,0.439339828 C9.41944494,-0.146446609 8.47525358,-0.146446609 7.89289404,0.439339828 C7.3105345,1.02512627 7.3105345,1.97487373 7.89289404,2.56066017 L11.3268469,6 Z">
              </path>
            </svg>
          </div>
          <div className="common-Button nav next" onClick={ slideRight }>
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15"
              viewBox="0 0 17 15">
              <path fill="#525F7F" fillRule="evenodd"
                d="M11.3268469,6 L1.50049595,6 C0.665550661,6 0,6.67157288 0,7.5 C0,8.33420277 0.671794918,9 1.50049595,9 L11.3268469,9 L7.89289404,12.4393398 C7.3105345,13.0251263 7.3105345,13.9748737 7.89289404,14.5606602 C8.47525358,15.1464466 9.41944494,15.1464466 10.0018045,14.5606602 L17,7.5 L10.0018045,0.439339828 C9.41944494,-0.146446609 8.47525358,-0.146446609 7.89289404,0.439339828 C7.3105345,1.02512627 7.3105345,1.97487373 7.89289404,2.56066017 L11.3268469,6 Z">
              </path>
            </svg>
          </div>
        </div>
      </div>
      <style jsx global>{`
        .overview .intro li {
          color: ${colors.primary_07};
        }
      `}</style>
    </div>
  )
}

export default Overview
