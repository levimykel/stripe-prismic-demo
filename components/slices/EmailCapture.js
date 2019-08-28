import React from 'react'
import { RichText } from 'prismic-reactjs'

const EmailCapture = ({ slice }) => {
  const backgroundStyle = 
    slice.primary.background_color == 'White' ?
    { background: 'none' } :
    {}

  return (
    <aside className="Helm-EmailCapture js-email-capture-form" style={ backgroundStyle }>
      <div className="Helm-EmailCapture__intro">
        <div className="Helm-EmailCapture__header">
          <h1 className="common-UppercaseTitle Helm__text--slate2 Helm-EmailCapture__title">
            { RichText.asText(slice.primary.title) }
          </h1>
        </div>
        <form className="Helm-EmailCapture__form">
          <div className="Helm-EmailCapture__inputWrapper">
            <input className="Helm-EmailCapture__input js-email-input"
              required="required"
              type="email"
              placeholder={ RichText.asText(slice.primary.default_input_text)
            }/>
            <input type="hidden" name="csrf-token" value="1"/>
            <button
              className="common-Button Helm-Button common-Button--default Helm__background--slate1 Helm__hoverBackground--slate2 Helm__activeBackground--slate1 Helm-EmailCapture__submit js-submit-button">
              { RichText.asText(slice.primary.submit_button_text) }
            </button>
            <figure className="Helm-EmailCapture__spinner">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="spinner-svg">
                <ellipse cx="12" cy="12" rx="10" ry="10" className="spinner-ellipse"></ellipse>
              </svg>
            </figure>
          </div>
          <p className="Helm-EmailCapture__error js-email-error">
            Please enter a valid email address.
          </p>
          <p className="Helm-EmailCapture__error js-generic-error">
            You might have had an internet hiccup. Try again?
          </p>
        </form>
      </div>
      <div className="Helm-EmailCapture__success">
        <img className="Helm-EmailCapture__successIcon"
          src="https://b.stripecdn.com/site-srv/assets/img/v3/common/success-76ead878a619eac070cc45dbe3558f2c93595c49.svg"
          alt="Green checkmark"/>
        <h3 className="common-BodyTitle Helm-EmailCapture__successTitle">Thank you!</h3>
      </div>
    </aside>
  )
}

export default EmailCapture
