import React from 'react'
import Footer from '../shared/Footer'

const PageFooter = ({ footer }) => {
  return (
    <footer className="globalFooter withCards">
      <article className="globalFooterCTA">
        <div className="container-lg">
          <div className="content">
            <h1 className="title">
              <span className="subtitle">Looking for more information?</span>
              Download the report or contact us.
            </h1>
          </div>
          <ul className="common-ButtonGroup buttons" role="presentation">
            <li>
              <a href="#"
                className="common-Button common-Button--default">
                Download Forrester report
              </a>
            </li>
            <li>
              <a href="#" className="common-Button">Get in touch</a>
            </li>
          </ul>
        </div>
      </article>
      <Footer/>
    </footer>
  )
}

export default PageFooter
