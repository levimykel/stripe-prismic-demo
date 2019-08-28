import React from 'react'
import { RichText } from 'prismic-reactjs'

const renderFeatureList = (items) => {
  return items.map((item,index) => {
    return (
      <div className="Helm-FeatureDetail" key={"feature-list-"+index}>
        <div className="Helm-FeatureDetail__content">
          <div className="Helm-FeatureDetail__title">
            <h3 className="common-BodyTitle Helm-FeatureList__featureTitle">
              { RichText.asText(item.title) }
            </h3>
          </div>
          <div className="Helm-FeatureDetail__body">
            <p class-name="Helm-FeatureList__featureBody" className="common-BodyText Helm-FeatureList__featureBody">
              { RichText.asText(item.text) }
            </p>
          </div>
        </div>
      </div>
    )
  })
}

const FeatureList = ({ slice }) => {
  return (
    <div className="Helm-FeatureList FeaturePage__featureList">
      { renderFeatureList(slice.items) }
    </div>
  )
}

export default FeatureList
