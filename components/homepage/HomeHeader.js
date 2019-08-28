import React from 'react'

const HomeHeader = ({ footer }) => {
  return (
    <div className="Header Header--hasImage">
      <div className="Helm-PageIntro Header__pageIntro Helm-PageIntro--hasImage">
        <div className="Helm-PageIntro__content">
          <div className="Helm-PageIntro__title">
            <h1 className="common-PageTitle">Take the guesswork out of&nbsp;disputes</h1>
          </div>
          <div className="Helm-PageIntro__text">
            <p className="common-MediumBodyText">Stripe Chargeback Protection defends your business from the
              unpredictability of disputes. If your business faces a fraudulent dispute, we’ll cover the disputed
              amount and waive any dispute fees—no evidence submission required. Chargeback Protection costs just 0.4%
              per transaction.</p>
          </div>
          <div className="Helm-PageIntro__buttons">
            <a data-analytics-action="fpg/register/chargeback-protection" data-analytics-source="header_cta"
              data-convert-cta="dashboard_register"
              href="https://dashboard.stripe.com/radar/chargeback-protection-settings"
              className="common-Button Helm-Button common-Link common-Button--default Helm__background--violet4 Helm__hoverBackground--violet5 Helm__activeBackground--violet3 Helm__keyboardFocusBackground--violet5 Helm__text--white">Get
              Started</a>
            <a data-analytics-action="fpg/contact_sales/chargeback-protection" data-analytics-source="header_cta"
              href="/fr/contact/sales" className="common-Button Helm-Button">Contact Sales</a>
          </div>
        </div>
        <div className="Helm-PageIntro__image">
          <img
            src="https://b.stripecdn.com/site-srv/assets/img/v3/radar_v2/chargeback_protection/chargeback-protection-383228fc374d58f9566ddfdb48168a8617022cdd.jpg"
            className="image Header__heroImage" style={{objectPosition: 'center', objectFit: 'contain'}} alt="" />

        </div>
      </div>
      <div className="common-StripeGrid anchorBottom  Header__stripes">
        <div className="backgroundContainer">
          <div className="grid">
            <div className="background Helm__background--slate9"></div>
          </div>
        </div>
        <div className="stripeContainer">
          <div className="grid">
            <div className="stripe Helm__background--violet4"></div>
            <div className="stripe Helm__background--slate8"></div>
            <div className="stripe Helm__background--purple5"></div>
            <div className="stripe Helm__background--orange7"></div>
            <div className="stripe Helm__background--purple5"></div>
            <div className="stripe Helm__background--violet2"></div>
            <div className="stripe Helm__background--orange7"></div>
            <div className="stripe Helm__background--transparent"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeHeader
