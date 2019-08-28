import React, { Fragment } from 'react'
import { Client } from 'prismic-configuration'
import { linkResolver } from 'utils/linkResolver'
import Color from 'color'

import PageMeta from 'components/page/PageMeta'
import PageHeaderNav from 'components/page/PageHeaderNav'
import PageFooter from 'components/page/PageFooter'
import { SliceZone } from 'components/slices'
import Error from './_error'


const Page = (props) => {
  if (props.doc) {
    const { doc } = props

    // Set the color scheme
    const primary = Color(doc.data.primary_color || '#45B2E8')
    const secondary = Color(doc.data.secondary_color || '#31D598')
    const colors = {
      primary: doc.data.primary_color,
      primary13: primary.lighten(0.13).hex(),
      primary28: primary.lighten(0.28).hex(),
      primary47: primary.lighten(0.47).hex(),
      primary53: primary.lighten(0.53).hex(),
      primary_07: primary.lighten(-0.07).hex(),
      primary_14: primary.lighten(-0.14).hex(),
      primary_50: primary.lighten(-0.50).hex(),
      secondary: doc.data.secondary_color,
      secondary28: secondary.lighten(0.28).hex(),
      secondary53: secondary.lighten(0.53).hex(),
      secondary_07: secondary.lighten(-0.07).hex(),
      secondary_14: secondary.lighten(-0.14).hex(),
      secondary_42: secondary.lighten(-0.42).hex(),
    }
    
    return (
      <Fragment>
        <PageMeta/>
        <PageHeaderNav/>
        <div className="globalContent report">
          <section id="content" className="section">
            <SliceZone sliceZone={ doc.data.body } colors={ colors }/>
          </section>
        </div>
        <PageFooter/>
      </Fragment>
    )
  }

  // Call the standard error page if the document was not found
  return (
    <Error statusCode='404'/>
  )
}

Page.getInitialProps = async function ({ req, res, query }) {
  // Retrieve the url params
  const { uid } = query

  // Retrieve the page content 
  const doc = await this.getPage(uid, req, res)
  return { doc }
}

Page.getPage = async function (uid, req, res) {
  try {
    // Query the page
    const page = await Client(req).getByUID('pages', uid)

    // If old url, redirect to current one 
    if (page && uid != page.uid) {
      const currentUrl = linkResolver(page)
      if (res) {
        res.writeHead(302, {
          Location: currentUrl
        })
        res.end()
      } else {
        Router.push(currentUrl)
      }
    }
    // Otherwise return the article
    return page
  } catch (error) {
    console.error(error)
    return null
  }
}

export default Page
