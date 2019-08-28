import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { repositoryUrl } from 'prismic-configuration'

export default class CustomDocument extends Document {
  render () {
    return (
    <html lang='en-US'>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel='icon' href='/static/favicon.ico' type='image/ico' />
        <link rel="stylesheet" href="./static/css/default.min.css"/>
        <link href="./static/css/requestors.min.css" rel="stylesheet"/>
        <link rel="stylesheet" href="./static/css/report.min.css"/>
        <link rel="stylesheet" href="./static/css/forrester.min.css"/>
        <link rel="stylesheet" href="./static/css/components.min.css"/>
        <link rel="stylesheet" href="./static/css/fixes.css"/>
        <link rel="preload" href="./static/fonts/stripe-icons.woff2" as="font" type="font/woff2" crossorigin=""/>
        <link rel="preload" href="./static/fonts/camphor-ss/300-light.woff2" as="font" type="font/woff2" crossorigin=""/>
        <link rel="preload" href="./static/fonts/camphor-ss/400-regular.woff2" as="font" type="font/woff2" crossorigin=""/>
        <link rel="preload" href="./static/fonts/camphor-ss/500-medium.woff2" as="font" type="font/woff2" crossorigin=""/>
        <link rel="preload" href="./static/fonts/camphor-ss/600-bold.woff2" as="font" type="font/woff2" crossorigin=""/>
        <script defer="" src="https://b.stripecdn.com/site-srv/assets/compiled/js/sprockets-js-v3/default-5bd3c1a6c991eedee3b7.min.js"></script>
        <script async defer src={`//static.cdn.prismic.io/prismic.js?repo=${repositoryUrl}&new=true`}></script>
        <meta content="1" name="csrf-token"/>
      </Head>
      <body>
        <main>
          <Main />
          <NextScript />
        </main>
      </body>
    </html>)
  }
}
