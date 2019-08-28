import React from 'react'
import { RichText } from 'prismic-reactjs'
import { linkResolver } from 'utils/linkResolver'

const renderMediaList = (items) => {
  return items.map((item,index) => {
    return (
      <div
        className="Helm-LayoutColumns Helm-LayoutColumns--gapLarge Helm-SplitFeatureMediaList__item Helm-LayoutColumns--2col"
        key={"media-list-"+index}
      >
        <div className="Helm-LayoutColumns__column">
          <div className="Helm-FeatureDetail">
            <div className="Helm-FeatureDetail__content">
              <div className="Helm-FeatureDetail__title">
                <h3 className="common-UppercaseTitle Helm-SplitFeatureMediaList__featureTitle">
                  { RichText.asText(item.title) }
                </h3>
              </div>
              <div className="Helm-FeatureDetail__body">
                { RichText.render(item.text, linkResolver) }
              </div>
            </div>
          </div>
        </div>
        <div className="Helm-LayoutColumns__column">
          <div className="Helm-SplitFeatureMediaList__media Helm-SplitFeatureMediaList__mediaSkewDefault">
            <div className="Helm-Card Helm-Card--xHigh Helm-Card--landscape">
              <img
                src={ item.image.url }
                className="image" style={{objectPosition: 'center', objectFit: 'contain'}}
                alt={ item.image.alt } />
            </div>
          </div>
        </div>
      </div>
    )
  })
}

const SplitFeatureMediaList = ({ slice }) => {
  return (
    <div
      className="Helm-SplitFeatureMediaList FeaturePage__splitFeatureMediaList Helm-SplitFeatureMediaList__hasBackgroundStripe"
    >
      { renderMediaList(slice.items) }
      <div className="common-StripeGrid  Helm-SplitFeatureMediaList__stripes">
        <div className="backgroundContainer">
          <div className="grid">
            <div className="background "></div>
          </div>
        </div>
        <div className="stripeContainer">
          <div className="grid">
          </div>
        </div>
      </div>
    </div>
  )
}

export default SplitFeatureMediaList
