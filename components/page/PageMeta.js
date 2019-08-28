import React, { Fragment } from 'react'
import Head from 'next/head'

export default () => (
  <Fragment>
    <Head>
      <title>Stripe Prismic Demo</title>
      <meta name="description" content="Demo page for Stripe."/>
      <link rel="image_src" type="image/png" href="https://stripe.com/img/v3/reports/forrester/social.png"/>
      <meta property="og:title" content="Forrester report: The business impact of Stripe Connect"/>
      <meta property="og:url" content="https://stripe.com/reports/forrester-tei-2018"/>
      <meta property="og:description"
        content="Analyst firm IDC found that businesses increase their revenues by 6.7% with Stripe."/>
      <meta property="og:image" content="https://stripe.com/img/v3/reports/forrester/social.png"/>

      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:image" content="https://stripe.com/img/v3/reports/forrester/social.png"/>
      <meta name="twitter:site" content="@stripe"/>
      <meta name="twitter:title" content="Forrester report: The business impact of Stripe Connect"/>
      <meta name="twitter:description"
        content="Analyst firm IDC found that businesses increase their revenues by 6.7% with Stripe."/>
      <script defer=""
        src="https://b.stripecdn.com/site-srv/assets/compiled/js/sprockets-js-v3/default-5bd3c1a6c991eedee3b7.min.js">
      </script>
      {/* <script defer=""
        src="https://b.stripecdn.com/site-srv/assets/compiled/js/reports/forrester-25388e833acca5e92016.min.js"></script> */}
    </Head>
  </Fragment>
)
