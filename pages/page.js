import React, { Fragment } from 'react'
import { Client } from 'prismic-configuration'
import { linkResolver } from 'utils/linkResolver'

import PageMeta from 'components/page/PageMeta'
import PageHeaderNav from 'components/page/PageHeaderNav'
import PageFooter from 'components/page/PageFooter'
import { SliceZone } from 'components/slices'
import Error from './_error'

const Page = (props) => {
  if (props.doc) {
    const { doc } = props
    return (
      <Fragment>
        <PageMeta/>
        <PageHeaderNav/>
        <div className="globalContent report">
          <section id="content" className="section">
            <SliceZone sliceZone={ doc.data.body } />
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
    console.log(page)

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
