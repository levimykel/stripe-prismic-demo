import React from 'react'
import Footer from '../shared/Footer'

const HomeFooter = ({ footer }) => {
  return (
    <footer className="globalFooter">
      <article className="globalFooterCTA">
        <div className="container-lg">
          <div className="content">
            <h1 className="title">
              <span className="subtitle">Ready to get started?</span>
              Request access to Chargeback Protection
            </h1>
          </div>
          <ul className="common-ButtonGroup buttons" role="presentation">
            <li>
              <a data-analytics-action="fpg/register/chargeback-protection" data-analytics-source="footer_cta"
                data-convert-cta="dashboard_register"
                href="https://dashboard.stripe.com/radar/chargeback-protection-settings"
                className="common-Button Helm-Button common-Link common-Button--default Helm__background--violet4 Helm__hoverBackground--violet5 Helm__activeBackground--violet3 Helm__keyboardFocusBackground--violet5 Helm__text--white">Get
                Started</a>
            </li>
            <li>
              <a href="/contact/sales" data-analytics-action="fpg/contact_sales/chargeback-protection"
                data-analytics-source="footer_cta" className="common-Button">
                Contact Sales
              </a>
            </li>
          </ul>
        </div>

        <div className="container-lg">
          <div className="fine-print">
            <p className="common-BodyText "></p>
            <p className="common-BodyText">Chargeback Protection is available for businesses in the US and Europe using the <a
                href="/checkout" className="common-Link">new Checkout</a>, for an additional 0.4% per transaction. Request
              access for details or contact sales if you’re on a custom pricing plan. See <a
                href="/legal/chargeback-protection" className="common-Link">Terms of Service</a> and <a
                href="https://support.stripe.com/questions/chargeback-protection-details" className="common-Link">additional
                information</a>.</p>
            <p></p>
          </div>
        </div>
      </article>
      <Footer/>
    </footer>
  )
}

export default HomeFooter
