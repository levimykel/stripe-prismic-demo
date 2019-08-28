import React from 'react'

const PageHeader = () => {
  return (
    <section id="header" className="header">
      <div className="container-lg">
        <div className="header-layout">
          <div className="header-content">
            <h1 className="common-PageTitle">The business impact of <span className="highlight">Stripe Connect</span></h1>
            <p className="common-MediumBodyText">
              Analyst firm Forrester interviewed Stripe customers with years of experience using Connect—a solution that
              helps marketplaces and platforms accept payments from anywhere in the world and easily pay out third
              parties—to better understand the potential benefits and financial impact of&nbsp;Connect.
            </p>
            <ul className="header-ctas" role="presentation">
              <li>
                <a href="/files/reports/forrester-tei-stripe-connect.pdf" target="_blank"
                  data-analytics-action="download_report" data-analytics-source="header_cta"
                  className="common-Button common-Button--default">
                  Download Forrester report
                </a>
              </li>
            </ul>
          </div>
          <div className="header-graphic">
            <div className="header-illustration js-illustration" aria-hidden="true" style={{opacity: 1, transform: 'scale(1)'}}>
              <div className="shadow shadow-left"></div>
              <div className="shadow shadow-right"></div>
              <div className="back" style={{transform: 'translate(-24px, -24px)'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="124px" height="20px" viewBox="0 0 124 20">
                  <path fill="#FFFFFF" fillRule="evenodd"
                    d="M121.67 6.46h-.42v.76h.42a.39.39 0 1 0 0-.76zm.47 1.86l-.53-.87h-.35v.87h-.24v-2.1h.69a.63.63 0 0 1 .66.62.6.6 0 0 1-.49.59l.54.89h-.28zm-.52-2.75a1.73 1.73 0 1 0 1.71 1.75V7.3c0-.95-.76-1.72-1.7-1.73zm0 3.66a1.93 1.93 0 1 1 0-3.86 1.93 1.93 0 0 1 0 3.86zM93.93 5.42c.27 0 .27.18.27.69v2.05c0 .1.02.38-.22.38-.25 0-.29-.1-.7-.92-.24-.55-.75-1.34-3.52-1.42-.65.03-.72.15-.72.73V17.1c0 .91 0 1.51 1.11 1.58.47.02.78.05.78.38s-.29.33-.47.33c-.73 0-1.89-.09-2.63-.09-.38 0-2.18.1-2.6.1-.18 0-.47-.03-.47-.34 0-.31.31-.33.78-.38 1.11-.06 1.11-.67 1.11-1.54V6.78c0-.5-.13-.57-.44-.58-3.03.03-3.56.85-3.82 1.42-.4.83-.47.92-.7.92-.21 0-.21-.27-.21-.38V6.1c0-.51 0-.7.26-.7.07 0 .07.03.67.05.6.03 1.74.05 4.03.05h2.8c2.29 0 3.44-.03 4.03-.05.58-.02.6-.04.66-.04zM69.85 15.84c.2 0 .27.2.28.33 0 .3-.25 1.72-.32 2.54-.02.43-.24.67-.89.67-1.13 0-2.7-.02-3.98-.04l-2.45-.05h-.27c-.91 0-1.47.03-1.83.05-.35.02-.51.04-.69.04-.18 0-.47-.02-.47-.33s.34-.33.8-.38c1.12-.06 1.12-.67 1.12-1.58V7.7c0-.92 0-1.52-1.11-1.58-.5-.03-.8-.07-.8-.38 0-.32.28-.32.44-.32.19.03.37.04.56.05.49.02 1.44.05 3.34.05h1.06c2.3 0 3.45-.03 4.03-.05.58-.02.6-.05.67-.05.27 0 .27.18.27.7v2.05c0 .11.02.38-.22.38-.25 0-.3-.09-.7-.91-.26-.59-.8-1.43-3.96-1.43-1.12 0-1.2.15-1.2 1.27v3.23c0 .71 0 .89 1.29.89 2.47 0 2.67-.49 3.07-1.67.11-.29.2-.33.34-.33.13 0 .24.06.24.3 0 .32-.16 2.61-.16 3.1 0 .16.07.94.07 1.12 0 .13 0 .44-.27.44-.17 0-.3-.11-.42-.53-.46-1.72-1.09-1.74-2.92-1.74-1.07 0-1.24 0-1.24.67v3.83c0 1.58.46 1.82 2.34 1.82.98 0 2.36 0 3.34-1.9.4-.77.43-.86.64-.86zm36.36 0c.2 0 .27.2.27.33 0 .3-.24 1.72-.3 2.54-.03.43-.25.67-.9.67-1.13 0-2.71-.02-3.99-.04l-2.45-.05h-.26a30 30 0 0 0-1.83.05c-.36.02-.52.04-.7.04-.17 0-.46-.02-.46-.33s.33-.33.8-.38c1.12-.06 1.12-.67 1.12-1.58V7.7c0-.92 0-1.52-1.12-1.58-.49-.03-.8-.07-.8-.38 0-.32.29-.32.45-.32.18.03.37.04.55.05.5.02 1.45.05 3.34.05H101c2.3 0 3.45-.03 4.03-.05.58-.02.6-.05.67-.05.27 0 .27.18.27.7v2.05c0 .11.02.38-.22.38-.25 0-.3-.09-.7-.91-.26-.59-.8-1.43-3.96-1.43-1.12 0-1.2.15-1.2 1.27v3.23c0 .71 0 .89 1.29.89 2.47 0 2.67-.49 3.07-1.67.11-.29.2-.33.34-.33.13 0 .24.06.24.3 0 .32-.16 2.61-.16 3.1 0 .16.07.94.07 1.12 0 .13 0 .44-.27.44-.17 0-.3-.11-.42-.53-.46-1.72-1.09-1.74-2.92-1.74-1.07 0-1.24 0-1.24.67v3.83c0 1.58.46 1.82 2.34 1.82.98 0 2.36 0 3.34-1.9.4-.77.43-.86.64-.86zM76.88 10.8c1.27.54 3.65 1.66 3.66 4.23 0 2.53-1.86 4.63-4.89 4.63-1.77 0-2.9-.43-3.3-.73-.25-.18-.34-.64-.4-1.2-.08-.7-.12-1.4-.12-2.1 0-.08.01-.4.29-.4.2 0 .23.23.27.44.44 1.98 2 3.34 3.61 3.34.95 0 2.74-.62 2.74-2.46 0-1.78-1.55-2.64-3.18-3.39-1.84-.82-3.64-1.7-3.64-4.11 0-2.1 1.6-3.9 4.48-3.9 1.32 0 2.66.35 2.98.51.27.16.27.37.27 2.37 0 .5 0 .68-.32.68-.22 0-.32-.14-.54-.84-.28-.9-.68-2.14-2.57-2.16-1.77-.01-2.48 1.27-2.48 2.16 0 1.61 1.32 2.18 3.14 2.93zm-53.45 8.24c3.11 0 4.75-3.5 4.75-6.79 0-2.7-1.59-6.49-5.12-6.49-2.76 0-4.77 2.92-4.77 6.13 0 3.66 2.14 7.15 5.14 7.15zm-.1-13.9c4.2 0 7.5 3.11 7.5 7.02a7.6 7.6 0 0 1-7.58 7.5c-3.93 0-7.59-2.95-7.59-7.3 0-4.08 3.29-7.22 7.66-7.22zM14.22 0c.52 0 .55.16.55.58v3.4c0 .1 0 .62-.35.62s-.48-.37-.6-.64c-.96-2.15-1.38-2.83-6.39-2.83-1.1 0-1.64.06-1.64 1.57v4.5c0 1.75.1 1.78.51 1.84.49.07 2.4.07 2.88.07 2.6 0 3.07-.71 3.48-2.39.06-.25.22-.53.51-.51.3.02.39.23.39.55 0 .45-.1 2.64-.1 3.12 0 .29 0 .83.07 1.57l.13 1.52c0 .22 0 .59-.4.6-.33.03-.45-.34-.5-.5-.08-.23-.3-1.07-.36-1.23-.45-1.73-2.51-1.73-3.32-1.73-.94 0-2.42 0-2.77.09-.52.14-.52.5-.52 1.42v4.94c0 1.12 0 1.87 1.37 1.95.58.02.96.06.96.47 0 .4-.37.4-.58.4-.9 0-2.37-.1-3.28-.1-.46 0-2.74.1-3.26.1-.22 0-.57-.02-.57-.4 0-.39.38-.42.96-.47 1.37-.08 1.37-.83 1.37-1.9V3.28c0-1.32 0-2.19-1.61-2.28C.48.93 0 .9 0 .45 0 0 .42 0 .64 0c.3.04.6.06.9.07.84.02 2 .06 5.2.06h.7c3.34 0 5.02-.03 5.87-.06.3 0 .62-.03.93-.07zm22.51 12.01c.8 0 3.01 0 3.02-2.78 0-.8-.32-3.19-3.08-3.19-1.03 0-1.05.53-1.05 1.4v3.75c0 .78 0 .82 1.11.82zm7.09 6.7c.46.08.57.18.57.4 0 .24-.22.28-.38.28H41.1c-.4 0-.5-.2-.74-.67l-2.7-5.07c-.49-.96-.6-1.05-1.6-1.05-.37 0-.42.13-.42.51v4c0 .94 0 1.54 1.11 1.6.5.03.8.08.8.39 0 .3-.29.29-.46.29-.43 0-2.59-.1-2.68-.1-.37 0-2.18.1-2.58.1-.18 0-.47 0-.47-.32 0-.31.34-.33.8-.35 1.1-.1 1.1-.67 1.1-1.6V7.66c0-.91 0-1.52-1.1-1.58-.48-.03-.8-.05-.8-.36s.1-.31.83-.31c.22 0 1.31.09 1.58.09.6 0 3.56-.1 4.23-.1 3.94 0 4.28 2.72 4.28 3.5 0 2.61-2.3 3.15-3.06 3.3.3.18.56.31 1.08 1.25l2.16 3.83c.44.78.74 1.33 1.38 1.43zm6.89-6.7c.8 0 3 0 3.01-2.78 0-.8-.31-3.19-3.07-3.19-1.03 0-1.06.53-1.06 1.4v3.75c0 .78 0 .82 1.12.82zm7.08 6.7c.47.08.57.18.57.4 0 .24-.22.28-.37.28h-2.94c-.4 0-.49-.2-.73-.67l-2.7-5.07c-.5-.96-.6-1.05-1.6-1.05-.38 0-.43.13-.43.51v4c0 .94 0 1.54 1.12 1.6.49.03.8.08.8.39 0 .3-.29.29-.47.29-.42 0-2.58-.1-2.67-.1-.38 0-2.18.1-2.59.1-.17 0-.46 0-.46-.32 0-.31.33-.33.8-.35 1.09-.1 1.09-.67 1.09-1.6V7.66c0-.91 0-1.52-1.1-1.58-.48-.03-.8-.05-.8-.36s.1-.31.83-.31c.22 0 1.32.09 1.58.09.6 0 3.57-.1 4.24-.1 3.94 0 4.27 2.72 4.27 3.5 0 2.61-2.3 3.15-3.05 3.3.29.18.56.31 1.07 1.25l2.16 3.83c.45.78.75 1.33 1.38 1.43zm55.32-6.7c.8 0 3.01 0 3.02-2.78 0-.8-.31-3.19-3.08-3.19-1.03 0-1.05.53-1.05 1.4v3.75c0 .78 0 .82 1.11.82zm7.1 6.7c.45.08.56.18.56.4 0 .24-.22.28-.38.28h-2.93c-.4 0-.5-.2-.74-.67l-2.7-5.07c-.5-.96-.6-1.05-1.6-1.05-.38 0-.43.13-.43.51v4c0 .94 0 1.54 1.13 1.6.49.03.8.08.8.39 0 .3-.29.29-.47.29-.42 0-2.58-.1-2.67-.1-.38 0-2.18.1-2.59.1-.17 0-.46 0-.46-.32 0-.31.33-.33.8-.35 1.09-.1 1.09-.67 1.09-1.6V7.66c0-.91 0-1.52-1.1-1.58-.48-.03-.8-.05-.8-.36s.1-.31.83-.31c.23 0 1.32.09 1.58.09.6 0 3.57-.1 4.24-.1 3.94 0 4.27 2.72 4.27 3.5 0 2.61-2.3 3.15-3.05 3.3.3.18.56.31 1.07 1.25l2.16 3.83c.45.78.75 1.33 1.38 1.43z">
                  </path>
                </svg>
              </div>
              <div className="front" style={{transform: 'translate(24px, 24px)'}}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 276 364">
                  <g fill="none" fillRule="evenodd">
                    <path fill="#F0F3F7" fillRule="nonzero"
                      d="M159.5 303h65c.83 0 1.5.67 1.5 1.5v2c0 .83-.67 1.5-1.5 1.5h-65a1.5 1.5 0 0 1-1.5-1.5v-2c0-.83.67-1.5 1.5-1.5zm0 15h47c.83 0 1.5.67 1.5 1.5v2c0 .83-.67 1.5-1.5 1.5h-47a1.5 1.5 0 0 1-1.5-1.5v-2c0-.83.67-1.5 1.5-1.5zm0-30h47c.83 0 1.5.67 1.5 1.5v2c0 .83-.67 1.5-1.5 1.5h-47a1.5 1.5 0 0 1-1.5-1.5v-2c0-.83.67-1.5 1.5-1.5zm0-15h65c.83 0 1.5.67 1.5 1.5v2c0 .83-.67 1.5-1.5 1.5h-65a1.5 1.5 0 0 1-1.5-1.5v-2c0-.83.67-1.5 1.5-1.5zm-14 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm0 15a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm0 15a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm0 15a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm-112-45h82c.83 0 1.5.67 1.5 1.5v2c0 .83-.67 1.5-1.5 1.5h-82a1.5 1.5 0 0 1-1.5-1.5v-2c0-.83.67-1.5 1.5-1.5zm0 30h60c.83 0 1.5.67 1.5 1.5v2c0 .83-.67 1.5-1.5 1.5h-60a1.5 1.5 0 0 1-1.5-1.5v-2c0-.83.67-1.5 1.5-1.5zm0-15h82c.83 0 1.5.67 1.5 1.5v2c0 .83-.67 1.5-1.5 1.5h-82a1.5 1.5 0 0 1-1.5-1.5v-2c0-.83.67-1.5 1.5-1.5z">
                    </path>
                    <path fill="#C1CBD7" fillRule="nonzero"
                      d="M144.5 258h31c.83 0 1.5.67 1.5 1.5v2c0 .83-.67 1.5-1.5 1.5h-31a1.5 1.5 0 0 1-1.5-1.5v-2c0-.83.67-1.5 1.5-1.5zm-111 0h69c.83 0 1.5.67 1.5 1.5v2c0 .83-.67 1.5-1.5 1.5h-69a1.5 1.5 0 0 1-1.5-1.5v-2c0-.83.67-1.5 1.5-1.5z">
                    </path>
                    <path fill="#F2FEEF" fillRule="nonzero"
                      d="M127 126H37a6 6 0 0 0-6 6v90a6 6 0 0 0 6 6h90a6 6 0 0 0 6-6v-90a6 6 0 0 0-6-6z"></path>
                    <path fill="#0A7261"
                      d="M82 207a30 30 0 1 1 0-60 30 30 0 0 1 0 60zm0-15a15 15 0 1 0 0-30 15 15 0 0 0 0 30z"></path>
                    <path fill="#3ECF8E" d="M82 147a30 30 0 0 1 30 30H97a15 15 0 0 0-15-15v-15z"></path>
                    <path fill="#74E4A2" d="M82 147c8.73 0 16.6 3.73 22.08 9.69l-11.04 10.15A14.96 14.96 0 0 0 82 162v-15z">
                    </path>
                    <path fill="#24B47E"
                      d="M112 177c0 10.53-5.43 19.8-13.64 25.15l-8.18-12.57A15.01 15.01 0 0 0 97 177h15z"></path>
                    <path fill="#F2FEEF" fillRule="nonzero"
                      d="M239 126h-90a6 6 0 0 0-6 6v90a6 6 0 0 0 6 6h90a6 6 0 0 0 6-6v-90a6 6 0 0 0-6-6z"></path>
                    <path fill="#3ECF8E" d="M163 179h10a2 2 0 0 1 2 2v47h-14v-47c0-1.1.9-2 2-2z"></path>
                    <path fill="#24B47E" d="M189 155h10a2 2 0 0 1 2 2v71h-14v-71c0-1.1.9-2 2-2z"></path>
                    <path fill="#159570" d="M215 201h10a2 2 0 0 1 2 2v25h-14v-25c0-1.1.9-2 2-2z"></path><text fill="#424770"
                      fontFamily="Camphor, 'Open Sans', 'Segoe UI', sans-serif" fontSize="17" letterSpacing=".05">
                      <tspan x="31" y="38">Forrester Total </tspan>
                      <tspan x="31" y="64">Economic Impact™ of </tspan>
                      <tspan x="31" y="90">Stripe Connect 2018</tspan>
                    </text>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="common-StripeGrid anchorBottom">
        <div className="backgroundContainer">
          <div className="grid">
            <div className="background"></div>
          </div>
        </div>
        <div className="stripeContainer">
          <div className="grid">
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>a
          </div>
        </div>
      </div>
    </section>
  )
}

export default PageHeader
