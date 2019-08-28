import React, { Fragment } from 'react'
import Head from 'next/head'

const Error = (props) => (
  <Fragment>
    <Head>
      <title>Page Not Found</title>
      <meta name="description" content="The page wasn't found, oops." />
    </Head>
    <div id="notFound">
      <h2>This is not the page you are looking for</h2>
      <p>
        Sorry, the page you were looking for could not be located on this site.
      </p>
      <a href="/">Go back to homepage</a>
    </div>
  </Fragment>
)

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : null
  return { statusCode }
}

export default Error
