import React, { Fragment } from 'react'
import Head from 'next/head'

export default () => (
  <Fragment>
    <Head>
      <link rel="image_src" type="image/png"
        href="https://stripe.com/img/v3/radar_v2/chargeback_protection/social_card.png" />
      <meta property="og:title"
        content="Stripe Chargeback Protection: Defend your business from the unpredictability of disputes" />
      <meta property="og:url" content="https://stripe.com/fr/radar/chargeback-protection" />
      <meta property="og:description"
        content="With Chargeback Protection, Stripe will cover both the disputed amount and any dispute fees—no evidence submission required." />
      <meta property="og:image" content="https://stripe.com/img/v3/radar_v2/chargeback_protection/social_card.png" />
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:image" content="https://stripe.com/img/v3/radar_v2/chargeback_protection/social_card.png"/>
      <meta name="twitter:site" content="@stripe"/>
      <meta name="twitter:title"
        content="Stripe Chargeback Protection: Defend your business from the unpredictability of disputes"/>
      <meta name="twitter:description"
        content="With Chargeback Protection, Stripe will cover both the disputed amount and any dispute fees—no evidence submission required."/>
    </Head>
  </Fragment>
)
