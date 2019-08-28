import React from 'react'

const Footer = () => {
  return (
    <article className="globalFooterNav">
      <div className="container-lg">
        <ul className="metaNav">
          <li className="select country">
            <a className="rootLink item-country"><svg width="13" height="13">
                <path
                  d="M1.543,7L6,7,5.979,11.462a0.536,0.536,0,0,0,1.016.24l4.941-9.931a0.537,0.537,0,0,0-.72-0.721L1.3,5.985A0.537,0.537,0,0,0,1.543,7Z">
                </path>
              </svg>
              France</a>
            <div className="popup countryPicker">
              <div className="countryList">
                <h4><a href="#">Sign up instantly</a></h4>
                <div className="columns">
                  <ul className="optionList">
                    <li>
                      <a href="#"data-country="AU"
                        className="common-FlagIcon common-FlagIcon--au"><span>Australia</span>
                      </a>
                    </li>
                    <li>
                      <a href="#"data-country="AT"
                        className="common-FlagIcon common-FlagIcon--at"><span>Austria</span>
                      </a>
                    </li>
                    <li>
                      <a href="#"data-country="BE"
                        className="common-FlagIcon common-FlagIcon--be"><span>Belgium</span>
                      </a>
                    </li>
                    <li>
                      <a href="#"data-country="CA"
                        className="common-FlagIcon common-FlagIcon--ca"><span>Canada</span>
                      </a>
                    </li>
                    <li>
                      <a href="#"data-country="DK"
                        className="common-FlagIcon common-FlagIcon--dk"><span>Denmark</span>
                      </a>
                    </li>
                    <li>
                      <a href="#"data-country="EE"
                        className="common-FlagIcon common-FlagIcon--ee"><span>Estonia</span><em className="badge">Preview</em>
                      </a>
                    </li>
                    <li>
                      <a href="#"data-country="FI"
                        className="common-FlagIcon common-FlagIcon--fi"><span>Finland</span>
                      </a>
                    </li>
                    <li>
                      <a href="#"data-country="FR"
                        className="common-FlagIcon common-FlagIcon--fr selected"><span>France</span>
                      </a>
                    </li>
                    <li>
                      <a href="#"data-country="DE"
                        className="common-FlagIcon common-FlagIcon--de"><span>Germany</span>
                      </a>
                    </li>
                    <li>
                      <a href="#"data-country="HK"
                        className="common-FlagIcon common-FlagIcon--hk"><span>Hong Kong</span>
                      </a>
                    </li>
                    <li>
                      <a href="#"data-country="IE"
                        className="common-FlagIcon common-FlagIcon--ie"><span>Ireland</span>
                      </a>
                    </li>
                    <li>
                      <a href="#"data-country="IT"
                        className="common-FlagIcon common-FlagIcon--it"><span>Italy</span>
                      </a>
                    </li>
                    <li>
                      <a href="#"data-country="JP"
                        className="common-FlagIcon common-FlagIcon--jp"><span>Japan</span>
                      </a>
                    </li>
                    <li>
                      <a href="#"data-country="LV"
                        className="common-FlagIcon common-FlagIcon--lv"><span>Latvia</span><em className="badge">Preview</em>
                      </a>
                    </li>
                    <li>
                      <a href="#"data-country="LT"
                        className="common-FlagIcon common-FlagIcon--lt"><span>Lithuania</span><em className="badge">Preview</em>
                      </a>
                    </li>
                  </ul>
                  <ul className="optionList">
                    <li>
                      <a href="#"data-country="LU"
                        className="common-FlagIcon common-FlagIcon--lu"><span>Luxembourg</span>
                      </a>
                    </li>
                    <li>
                      <a href="#"data-country="MY"
                        className="common-FlagIcon common-FlagIcon--my"><span>Malaysia</span><em className="badge">Preview</em>
                      </a>
                    </li>
                    <li>
                      <a href="#"data-country="NL"
                        className="common-FlagIcon common-FlagIcon--nl"><span>Netherlands</span>
                      </a>
                    </li>
                    <li>
                      <a href="#"data-country="NZ"
                        className="common-FlagIcon common-FlagIcon--nz"><span>New Zealand</span>
                      </a>
                    </li>
                    <li>
                      <a href="#"data-country="NO"
                        className="common-FlagIcon common-FlagIcon--no"><span>Norway</span>
                      </a>
                    </li>
                    <li>
                      <a href="#"data-country="PL"
                        className="common-FlagIcon common-FlagIcon--pl"><span>Poland</span><em className="badge">Preview</em>
                      </a>
                    </li>
                    <li>
                      <a href="#"data-country="PT"
                        className="common-FlagIcon common-FlagIcon--pt"><span>Portugal</span><em className="badge">Preview</em>
                      </a>
                    </li>
                    <li>
                      <a href="#"data-country="SG"
                        className="common-FlagIcon common-FlagIcon--sg"><span>Singapore</span>
                      </a>
                    </li>
                    <li>
                      <a href="#"data-country="SK"
                        className="common-FlagIcon common-FlagIcon--sk"><span>Slovakia</span><em className="badge">Preview</em>
                      </a>
                    </li>
                    <li>
                      <a href="#"data-country="SI"
                        className="common-FlagIcon common-FlagIcon--si"><span>Slovenia</span><em className="badge">Preview</em>
                      </a>
                    </li>
                    <li>
                      <a href="#"data-country="ES"
                        className="common-FlagIcon common-FlagIcon--es"><span>Spain</span>
                      </a>
                    </li>
                    <li>
                      <a href="#"data-country="SE"
                        className="common-FlagIcon common-FlagIcon--se"><span>Sweden</span>
                      </a>
                    </li>
                    <li>
                      <a href="#"data-country="CH"
                        className="common-FlagIcon common-FlagIcon--ch"><span>Switzerland</span>
                      </a>
                    </li>
                    <li>
                      <a href="#"data-country="GB"
                        className="common-FlagIcon common-FlagIcon--gb"><span>United Kingdom</span>
                      </a>
                    </li>
                    <li>
                      <a href="#"data-country="US"
                        className="common-FlagIcon common-FlagIcon--us"><span>United States</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="sidebar">
                <div className="countryList">
                  <h4><a href="#">Request an invite</a></h4>
                  <ul className="optionList">
                    <li>
                      <a className="common-FlagIcon common-FlagIcon--br"
                        href="#"><span>Brazil</span><em className="badge">Preview</em>
                      </a>
                    </li>
                    <li>
                      <a className="common-FlagIcon common-FlagIcon--gr"
                        href="#"><span>Greece</span><em className="badge">Preview</em>
                      </a>
                    </li>
                    <li>
                      <a className="common-FlagIcon common-FlagIcon--in"
                        href="#"><span>India</span><em className="badge">Preview</em>
                      </a>
                    </li>
                    <li>
                      <a className="common-FlagIcon common-FlagIcon--mx"
                        href="#"><span>Mexico</span><em className="badge">Preview</em>
                      </a>
                    </li>
                  </ul>
                </div>
                <a className="globalLink" href="#">
                  <span>More countries coming soon.</span>
                  <strong>Sign up to get notified</strong>
                </a>
              </div>
            </div>

          </li>

          <li className="select language">
            <a className="rootLink item-language"><svg width="13" height="13">
                <path
                  d="M8.079,9.837L6.116,12.3A0.654,0.654,0,0,1,5,11.841V9.852C2.488,9.351,1,7.6,1,5.5,1,3.015,3.087,1,6.5,1S12,3.015,12,5.5A4.5,4.5,0,0,1,8.079,9.837Z">
                </path>
              </svg>
              English</a>

            <div className="popup languagePicker">
              <ul className="optionList">
                <li>
                  <a data-language="de" href="#"> className="">
                    <span>Deutsch</span>
                  </a>
                </li>
                <li>
                  <a data-language="en" href="#"> className="">
                    <span>English</span>
                  </a>
                </li>
                <li>
                  <a data-language="es" href="#"> className="">
                    <span>Español</span>
                  </a>
                </li>
                <li>
                  <a data-language="fr" href="#"> className="selected">
                    <span>Français</span>
                  </a>
                </li>
                <li>
                  <a data-language="it" href="#"> className="">
                    <span>Italiano</span>
                  </a>
                </li>
                <li>
                  <a data-language="ja" href="#"> className="">
                    <span>日本語</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="space"></li>
          <li className="copyright">© Stripe</li>
        </ul>

        <div className="siteNav">
          <div className="column">
            <h4>Products</h4>
            <div className="splitColumn">
              <ul>
                <li><a href="#"><strong>Payments</strong></a></li>
                <li><a href="#"><strong>Billing</strong></a></li>
                <li><a href="#"><strong>Connect</strong></a></li>
                <li><a href="#"><strong>Sigma</strong></a></li>
                <li><a href="#"><strong>Atlas</strong></a></li>
                <li><a href="#"><strong>Radar</strong></a></li>
                <li><a href="#"><strong>Issuing</strong></a></li>
                <li><a href="#"><strong>Terminal</strong></a></li>
              </ul>
              <ul>
                <li><a href="#">Platforms</a></li>
                <li><a href="#">Marketplaces</a></li>
                <li><a href="#">Pricing</a></li>
                <li className="long-link"><a href="#">Partners</a></li>
                <li><a href="#">Global</a></li>
                <li><a href="#">Guides</a></li>
              </ul>
            </div>
          </div>
          <div className="column">
            <h4>Developers</h4>
            <ul>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">API reference</a></li>
              <li><a href="#">API status</a></li>
              <li><a href="#">Open source</a></li>
            </ul>
          </div>
          <div className="column">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Enterprise</a></li>
              <li><a href="#">Customers</a></li>
              <li><a href="#">Partner Program</a></li>
              <li><a href="#">Jobs</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Newsroom</a></li>
              <li><a href="#">Environment</a></li>
            </ul>
          </div>
          <div className="column">
            <h4>Resources</h4>
            <ul>
              <li>
                <a href="#">Support</a>
              </li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Privacy &amp; terms</a></li>
              <li><a href="#">Sitemap</a></li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Footer
