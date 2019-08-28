import React, { Fragment } from 'react'
import Prismic from 'prismic-javascript'
import { RichText } from 'prismic-reactjs'
import { Client } from 'prismic-configuration'
import { linkResolver } from 'utils/linkResolver'

import HomeMeta from 'components/homepage/HomeMeta'
import HomeHeaderNav from 'components/homepage/HomeHeaderNav'
import HomeNav from 'components/homepage/HomeNav'
import HomeFooter from 'components/homepage/HomeFooter'
import HomeHeader from 'components/homepage/HomeHeader'
import FeatureList from 'components/slices/FeatureList'
import SplitFeatureMediaList from 'components/slices/SplitFeatureMediaList'

import Head from 'next/head'
import Error from './_error'

const Article = (props) => {
  if (props) {

    return (
      <Fragment>
        <HomeMeta/>
        <Head>
          <title>Stripe Chargeback Protection: Defend your business from the unpredictability of disputes</title>
          <meta name="description"
            content="With Chargeback Protection, Stripe will cover both the disputed amount and any dispute fees—no evidence submission required." />
        </Head>
        <div className="product--radar feature__noCards">
          <HomeHeaderNav/>
          <HomeNav/>
          <div className="globalContent">
            <main>
              <HomeHeader/>
              <FeatureList/>
              <SplitFeatureMediaList/>
            </main>
          </div>
          <HomeFooter/>
        </div>
      </Fragment>
    )
  }

  // Call the standard error page if the document was not found
  return (
    <Error statusCode='404'/>
  )
}

Article.getInitialProps = async function ({ req, res, query }) {

  return {
  }
}

export default Article
