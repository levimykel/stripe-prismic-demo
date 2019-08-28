import React from 'react'
import {
  EmailCapture,
  FeatureList,
  Header,
  Overview,
  RelatedPages,
  SplitFeatureMediaList,
  Stats } from './'

const SliceZone = ({ sliceZone }) => {
  return sliceZone.map((slice, index) => {
    switch (slice.slice_type) {
      case ('header'):
        return <Header slice={slice} key={'slice-' + index} />
      case ('section___stat'):
        return <Stats slice={slice} key={'slice-' + index} />
      case ('email_form'):
        return <EmailCapture slice={slice} key={'slice-' + index} />
      case ('quote___feature'):
        return <Overview slice={slice} key={'slice-' + index} />
      case ('related_pages'):
        return <RelatedPages slice={slice} key={'slice-' + index} />
      case ('feature_list'):
        return <FeatureList slice={slice} key={'slice-' + index} />
      case ('alternated_block'):
        return <SplitFeatureMediaList slice={slice} key={'slice-' + index} />
      default:
        return <p style={{color:'tomato'}} key={'slice-' + index}>{ slice.slice_type }</p>
        // return null
    }
  })
}

export default SliceZone
