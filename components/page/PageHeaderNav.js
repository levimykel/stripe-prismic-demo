import React from 'react'
import { default as NextLink } from 'next/link'

const PageHeaderNav = ({ footer }) => {
  return (
    <header className="globalNav no-nav noDropdownTransition initialized">
      <div className="container-lg">
        <nav>
          <ul className="navRoot">
            <li className="navSection logo">
              <a className="rootLink item-home colorize" href="/" aria-label="Stripe homepage">
                <h1><svg width="62" height="25">
                    <title>Stripe</title>
                    <path
                      d="M5 10.1c0-.6.6-.9 1.4-.9 1.2 0 2.8.4 4 1.1V6.5c-1.3-.5-2.7-.8-4-.8C3.2 5.7 1 7.4 1 10.3c0 4.4 6 3.6 6 5.6 0 .7-.6 1-1.5 1-1.3 0-3-.6-4.3-1.3v3.8c1.5.6 2.9.9 4.3.9 3.3 0 5.5-1.6 5.5-4.5.1-4.8-6-3.9-6-5.7zM29.9 20h4V6h-4v14zM16.3 2.7l-3.9.8v12.6c0 2.4 1.8 4.1 4.1 4.1 1.3 0 2.3-.2 2.8-.5v-3.2c-.5.2-3 .9-3-1.4V9.4h3V6h-3V2.7zm8.4 4.5L24.6 6H21v14h4v-9.5c1-1.2 2.7-1 3.2-.8V6c-.5-.2-2.5-.5-3.5 1.2zm5.2-2.3l4-.8V.8l-4 .8v3.3zM61.1 13c0-4.1-2-7.3-5.8-7.3s-6.1 3.2-6.1 7.3c0 4.8 2.7 7.2 6.6 7.2 1.9 0 3.3-.4 4.4-1.1V16c-1.1.6-2.3.9-3.9.9s-2.9-.6-3.1-2.5H61c.1-.2.1-1 .1-1.4zm-7.9-1.5c0-1.8 1.1-2.5 2.1-2.5s2 .7 2 2.5h-4.1zM42.7 5.7c-1.6 0-2.5.7-3.1 1.3l-.1-1h-3.6v18.5l4-.7v-4.5c.6.4 1.4 1 2.8 1 2.9 0 5.5-2.3 5.5-7.4-.1-4.6-2.7-7.2-5.5-7.2zm-1 11c-.9 0-1.5-.3-1.9-.8V10c.4-.5 1-.8 1.9-.8 1.5 0 2.5 1.6 2.5 3.7 0 2.2-1 3.8-2.5 3.8z">
                    </path>
                  </svg></h1>
              </a>
            </li>
            <li className="navSection primary">
              <button className="rootLink item-products hasDropdown colorize" data-dropdown="products" aria-haspopup="true"
                aria-expanded="false">
                <span>Produits</span>
              </button>
              <button className="rootLink item-developers hasDropdown colorize" data-dropdown="developers" aria-haspopup="true"
                aria-expanded="false">
                <span>Développeurs</span>
              </button>
              <button className="rootLink item-company hasDropdown colorize" data-dropdown="company" aria-haspopup="true"
                aria-expanded="false">
                <span>Entreprise</span>
              </button>
              <a data-analytics-action="pricing" data-analytics-source="global_nav" className="rootLink item-pricing colorize"
                href="/fr/pricing">
                <span>Tarifs</span>
              </a>
            </li>
            <li className="navSection secondary">
              <a className="rootLink item-support colorize" href="https://support.stripe.com" data-analytics-action="support"
                data-analytics-source="global_nav">
                <span>Aide</span>
              </a>
              <a className="rootLink item-dashboard colorize" data-adroll-segment="submit_two"
                href="https://dashboard.stripe.com/login" data-analytics-source="global_nav" data-analytics-action="sign_in"
                data-convert-cta="dashboard_register">
                <span>Accéder à votre compte</span>
              </a>
            </li>
            <li className="navSection mobile">
              <a className="rootLink item-mobileMenu colorize">
                <h2>Menu</h2>
              </a>
              <div className="popup">
                <div className="popupContainer">
                  <a className="popupCloseButton">Close</a>
                  <div className="mobileProducts">
                    <h4>Produits</h4>
                    <div className="mobileProductsList">
                      <ul>
                        <li>
                          <a className="linkContainer item-payments" href="/fr/payments" data-analytics-action="payments"
                            data-analytics-source="mobile_nav">
                            <svg viewBox="0 0 48 48">
                              <path fill="#87BBFD" className="hover-fillLight"
                                d="M24 48C12.11 48 2.244 39.35.338 28H6.5V9H5.27C9.67 3.515 16.423 0 24 0c13.255 0 24 10.745 24 24S37.255 48 24 48z">
                              </path>
                              <path fill="#555ABF" className="hover-fillDark"
                                d="M25 21v8H.526A24.082 24.082 0 0 1 0 24 23.908 23.908 0 0 1 6.116 8H31.5c.828 0 1.5.67 1.5 1.5V21h-8zm-10.502-8.995a6.497 6.497 0 1 0 0 12.994 6.497 6.497 0 0 0 0-12.996z">
                              </path>
                              <path fill="#FFF"
                                d="M39.823 39.276a2.44 2.44 0 0 1-1.76.724H16.5a1.5 1.5 0 0 1-1.5-1.5v-18c0-.828.67-1.5 1.5-1.5h27.693a1.51 1.51 0 0 1 1.484 1.256c.21 1.217.323 2.467.323 3.744 0 5.936-2.355 11.32-6.177 15.276zM33.5 23.002a6.497 6.497 0 1 0 0 12.995 6.497 6.497 0 0 0 .002-12.994z">
                              </path>
                            </svg>Payments
                          </a>
                        </li>
                        <li>
                          <a className="linkContainer item-subscriptions" href="/fr/billing"
                            data-analytics-action="subscriptions" data-analytics-source="mobile_nav">
                            <svg viewBox="0 0 48 48">
                              <path fill="#74E4A2" className="hover-fillLight"
                                d="M24 0c13.255 0 24 10.745 24 24S37.255 48 24 48 0 37.255 0 24 10.745 0 24 0z"></path>
                              <path fill="#FFF"
                                d="M39.558 30.977c-6.23 6.225-16.304 6.194-22.535-.03l13.975-13.962c-6.232-6.224-16.335-6.224-22.567 0-4.043 4.04-5.456 9.712-4.247 14.896l-.654.174a21.89 21.89 0 0 1-1.536-8.61c.284-11.806 10.003-21.35 21.823-21.446 6.15-.05 11.72 2.42 15.744 6.438 6.23 6.226 6.23 16.318 0 22.542z">
                              </path>
                              <path fill="#159570" className="hover-fillDark"
                                d="M33.653 21.413c1.43 5.336-1.735 10.82-7.068 12.25-5.332 1.43-10.814-1.736-12.242-7.072-1.43-5.334 1.735-10.82 7.068-12.25 5.334-1.43 10.815 1.738 12.244 7.074z">
                              </path>
                            </svg>Billing
                          </a>
                        </li>
                        <li>
                          <a className="linkContainer item-connect" href="/fr/connect" data-analytics-action="connect"
                            data-analytics-source="mobile_nav">
                            <svg viewBox="0 0 48 48">
                              <path fill="#68D4F8" className="hover-fillLight"
                                d="M48 24c0 13.255-10.745 24-24 24S0 37.255 0 24 10.745 0 24 0c1.363 0 2.698.12 4 .338V15h5v5h14.662c.218 1.302.338 2.637.338 4z">
                              </path>
                              <path fill="#FFF"
                                d="M16.99 29.966L17 17l-5.55-.006a1.02 1.02 0 0 0-.725.3L2.65 25.446a1.55 1.55 0 0 0-.44 1.28c1.22 9.944 9.1 17.825 19.042 19.047.472.058.945-.104 1.28-.44l8.172-8.076c.192-.193.3-.453.3-.725L31 31l-12.985-.01a1.023 1.023 0 0 1-1.024-1.024z">
                              </path>
                              <path fill="#217AB7" className="hover-fillDark"
                                d="M47.697 20.195L37.194 30.702a1.03 1.03 0 0 1-.726.3h-5.462V18.03c0-.567-.46-1.025-1.025-1.025H16.994V11.52c0-.274.108-.534.3-.726L27.783.3C38 1.916 46.07 9.98 47.698 20.194z">
                              </path>
                            </svg>Connect
                          </a>
                        </li>
                        <li>
                          <a className="linkContainer item-sigma" href="/fr/sigma" data-analytics-action="sigma"
                            data-analytics-source="mobile_nav">
                            <svg viewBox="0 0 48 48">
                              <path className="hover-fillLight"
                                d="M24 48c-2.6 0-5-.3-7.2-1.1V35.2H4v2.1c-2.6-4-4-8.6-4-13.3C0 12.6 7.8 3.2 18.4.6V4h14.4V1.6C41.8 5.1 48 13.8 48 24c0 13.3-10.7 24-24 24z"
                                fill="#beb0f4"></path>
                              <path className="hover-fillDark"
                                d="M45.6 24H32.8v17.6H17.6v-.2 5.8c-6.4-1.8-11.7-6.1-14.9-12 2.1-6.6 8-10.9 14.9-11.2V.8C19.7.3 21.9 0 24 0c3.4 0 6.7.6 9.6 1.9v8c0 6.1 4.5 10.9 10.2 11.7 1 .2 1.8 1.3 1.8 2.4z"
                                fill="#7356b6"></path>
                              <path
                                d="M45.6 24c0 1.1-.8 2.1-1.8 2.2-5.8 1-10.2 5.8-10.2 11.7v5.3c-3 1.4-6.2 2.2-9.6 2.2-2.2 0-4.3-.3-6.4-1V40c0-7 5.8-13 12.5-13.8C31.2 26 32 25.1 32 24h13.6zM4 15.7C6.6 9.8 11.5 5.3 17.6 3.4V8c0 7 5.8 12.8 12.5 13.8 1.1.2 1.9 1.1 1.9 2.2H17.9C12 24 6.7 20.6 4 15.7z"
                                fill="#FFF"></path>
                            </svg>Sigma
                          </a>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <a className="linkContainer item-atlas" href="/atlas" data-analytics-action="atlas"
                            data-analytics-source="mobile_nav">
                            <svg viewBox="0 0 48 48">
                              <path fill="#FCD669" className="hover-fillLight"
                                d="M24 0c13.255 0 24 10.745 24 24S37.255 48 24 48 0 37.255 0 24 10.745 0 24 0z"></path>
                              <path fill="#CE7C3A" className="hover-fillDark"
                                d="M24.012 1.834c.366.005.73.196.92.575l16.825 33.72c.396.79-.314 1.685-1.175 1.48L24 33.626V1.834h.01z">
                              </path>
                              <path fill="#FFF"
                                d="M24 1.834v31.794l-16.584 3.98A1.043 1.043 0 0 1 6.24 36.13L23.067 2.41c.195-.39.572-.58.947-.576H24z">
                              </path>
                            </svg>Atlas
                          </a>
                        </li>
                        <li>
                          <a className="linkContainer item-radar" href="/fr/radar" data-analytics-action="radar"
                            data-analytics-source="mobile_nav">
                            <svg viewBox="0 0 48 48">
                              <path className="hover-fillLight" fill="#F6A4EB"
                                d="M41.364 21.886h6.538c.06.697.098 1.4.098 2.114 0 13.255-10.745 24-24 24S0 37.255 0 24 10.745 0 24 0c6.833 0 12.993 2.86 17.364 7.442v14.444z">
                              </path>
                              <path fill="#FFF"
                                d="M37.746 37.4a1.3 1.3 0 0 1 .92-.38c.72 0 1.303.444 1.303 1.163 0 .503-.353.982-.708 1.292-3.484 3.122-8.325 5.53-13.783 5.53-11.75 0-19.486-9.538-19.486-18.83 0-8.72 7.195-16.19 15.25-16.19s11.227 5.54 11.227 5.54L37.747 37.4z">
                              </path>
                              <path className="hover-fillDark" fill="#9251AC"
                                d="M47.995 24zm0 0c0-.995-.807-1.974-1.802-1.974-1.15 0-1.8.94-1.8 1.83-.09 3.174-1.228 7.127-3.453 10.182-2.355 3.232-6.91 6.956-13.242 6.956-7.625 0-13.213-5.767-13.213-11.925 0-4.3 2.886-7.17 5.828-7.17 1.588 0 2.48.683 2.965 1.312.362.468 1.063.493 1.482.074L40.968 7.032A23.926 23.926 0 0 1 47.995 24z">
                              </path>
                            </svg>Radar
                          </a>
                        </li>
                        <li>
                          <a className="linkContainer item-issuing" href="/fr/issuing" data-analytics-action="issuing"
                            data-analytics-source="mobile_nav">
                            <svg viewBox="0 0 48 48">
                              <g fill="none">
                                <circle className="hover-fillLight" fill="#87BBFD" cx="24" cy="24" r="24"></circle>
                                <path fill="#FFF"
                                  d="M38.27 8H20a4 4 0 0 0-4 4v3H4.59a1 1 0 0 0-.93.61 22.5 22.5 0 0 0-1.44 5.27 1 1 0 0 0 1 1.12H16v14a4 4 0 0 0 4 4h18.27a2 2 0 0 0 1.41-.58 22 22 0 0 0 0-30.84A2 2 0 0 0 38.27 8z">
                                </path>
                                <path className="hover-fillDark" fill="#555ABF"
                                  d="M46.25 15H16v7h31.91c-.2-2.4-.75-4.76-1.66-7z"></path>
                              </g>
                            </svg>Issuing
                          </a>
                        </li>
                        <li>
                          <a className="linkContainer item-terminal" href="/fr/terminal" data-analytics-action="terminal"
                            data-analytics-source="mobile_nav">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                              <path className="hover-fillLight" d="M38,8H10L.19,27a24,24,0,0,0,47.62,0Z" fill="#87bbfd"></path>
                              <path d="M10,24V39.48A3,3,0,0,0,11.29,42a22,22,0,0,0,25.42,0A3,3,0,0,0,38,39.48V24Z"
                                fill="#fff"></path>
                              <path className="hover-fillDark"
                                d="M24,0A24,24,0,0,0,.19,27H47.81A24,24,0,0,0,24,0ZM38,21H10V14a4,4,0,0,1,4-4H34a4,4,0,0,1,4,4Z"
                                fill="#555abf"></path>
                            </svg>Terminal
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mobileSecondaryNav">
                    <ul>
                      <li>
                        <a className="item-pricing" href="/fr/pricing" data-analytics-action="pricing"
                          data-analytics-source="mobile_nav">
                          Tarifs
                        </a>
                      </li>
                      <li>
                        <a className="item-workswith" href="/partners" data-analytics-action="works-with"
                          data-analytics-source="mobile_nav">
                          Partners
                        </a>
                      </li>
                      <li>
                        <a className="linkContainer item-enterprise" href="/fr/enterprise" data-analytics-action="enterprise"
                          data-analytics-source="mobile_nav">
                          Entreprise
                        </a>
                      </li>
                      <li>
                        <a className="item-partner-program" href="/fr/partner-program" data-analytics-action="partner-program"
                          data-analytics-source="mobile_nav">
                          Programme partenaire
                        </a>
                      </li>
                      <li>
                        <a className="item-documentation" href="/docs" data-analytics-source="mobile_nav"
                          data-analytics-action="documentation">
                          Documentation
                        </a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a className="item-about" href="/fr/about" data-analytics-source="mobile_nav"
                          data-analytics-action="about">
                          À propos de Stripe
                        </a>
                      </li>
                      <li>
                        <a className="item-jobs" href="/fr/jobs" data-analytics-source="mobile_nav"
                          data-analytics-action="jobs">
                          Emplois
                        </a>
                      </li>
                      <li>
                        <a className="item-newsroom" href="/fr/newsroom" data-analytics-action="newsroom"
                          data-analytics-source="mobile_nav">
                          Salle de presse
                        </a>
                      </li>
                      <li>
                        <a className="item-blog" href="/fr/blog" data-analytics-source="mobile_nav"
                          data-analytics-action="blog">
                          Blog
                        </a>
                      </li>
                    </ul>
                  </div>
                  <a className="mobileSignIn" data-adroll-segment="submit_two" href="https://dashboard.stripe.com/login"
                    data-analytics-source="mobile_nav" data-analytics-action="sign_in">
                    Connectez-vous
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </div>
      <div className="dropdownRoot">
        <div className="dropdownBackground">
          <div className="alternateBackground"></div>
        </div>
        <div className="dropdownArrow"></div>
        <div className="dropdownContainer">
          <div className="dropdownSection" data-dropdown="products" aria-hidden="true">
            <div className="dropdownContent">
              <div className="linkGroup">
                <ul className="productsGroupPrimary">
                  <li>
                    <a className="linkContainer item-payments" href="/fr/payments" data-analytics-action="payments"
                      data-analytics-source="nav_dropdown" tabIndex="-1">
                      <svg viewBox="0 0 48 48">
                        <path fill="#87BBFD" className="hover-fillLight"
                          d="M24 48C12.11 48 2.244 39.35.338 28H6.5V9H5.27C9.67 3.515 16.423 0 24 0c13.255 0 24 10.745 24 24S37.255 48 24 48z">
                        </path>
                        <path fill="#555ABF" className="hover-fillDark"
                          d="M25 21v8H.526A24.082 24.082 0 0 1 0 24 23.908 23.908 0 0 1 6.116 8H31.5c.828 0 1.5.67 1.5 1.5V21h-8zm-10.502-8.995a6.497 6.497 0 1 0 0 12.994 6.497 6.497 0 0 0 0-12.996z">
                        </path>
                        <path fill="#FFF"
                          d="M39.823 39.276a2.44 2.44 0 0 1-1.76.724H16.5a1.5 1.5 0 0 1-1.5-1.5v-18c0-.828.67-1.5 1.5-1.5h27.693a1.51 1.51 0 0 1 1.484 1.256c.21 1.217.323 2.467.323 3.744 0 5.936-2.355 11.32-6.177 15.276zM33.5 23.002a6.497 6.497 0 1 0 0 12.995 6.497 6.497 0 0 0 .002-12.994z">
                        </path>
                      </svg>
                      <div className="productLinkContent">
                        <h3 className="linkTitle">Payments</h3>
                        <p className="linkSub">Une boîte à outil complète pour le commerce, construite pour les développeurs.
                        </p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="linkContainer item-subscriptions" href="/fr/billing" data-analytics-action="billing"
                      data-analytics-source="nav_dropdown" tabIndex="-1">
                      <svg viewBox="0 0 48 48">
                        <path fill="#74E4A2" className="hover-fillLight"
                          d="M24 0c13.255 0 24 10.745 24 24S37.255 48 24 48 0 37.255 0 24 10.745 0 24 0z"></path>
                        <path fill="#FFF"
                          d="M39.558 30.977c-6.23 6.225-16.304 6.194-22.535-.03l13.975-13.962c-6.232-6.224-16.335-6.224-22.567 0-4.043 4.04-5.456 9.712-4.247 14.896l-.654.174a21.89 21.89 0 0 1-1.536-8.61c.284-11.806 10.003-21.35 21.823-21.446 6.15-.05 11.72 2.42 15.744 6.438 6.23 6.226 6.23 16.318 0 22.542z">
                        </path>
                        <path fill="#159570" className="hover-fillDark"
                          d="M33.653 21.413c1.43 5.336-1.735 10.82-7.068 12.25-5.332 1.43-10.814-1.736-12.242-7.072-1.43-5.334 1.735-10.82 7.068-12.25 5.334-1.43 10.815 1.738 12.244 7.074z">
                        </path>
                      </svg>
                      <div className="productLinkContent">
                        <h3 className="linkTitle">Billing</h3>
                        <p className="linkSub">Créez et développez votre modèle récurrent.</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="linkContainer item-connect" href="/fr/connect" data-analytics-action="connect"
                      data-analytics-source="nav_dropdown" tabIndex="-1">
                      <svg viewBox="0 0 48 48">
                        <path fill="#68D4F8" className="hover-fillLight"
                          d="M48 24c0 13.255-10.745 24-24 24S0 37.255 0 24 10.745 0 24 0c1.363 0 2.698.12 4 .338V15h5v5h14.662c.218 1.302.338 2.637.338 4z">
                        </path>
                        <path fill="#FFF"
                          d="M16.99 29.966L17 17l-5.55-.006a1.02 1.02 0 0 0-.725.3L2.65 25.446a1.55 1.55 0 0 0-.44 1.28c1.22 9.944 9.1 17.825 19.042 19.047.472.058.945-.104 1.28-.44l8.172-8.076c.192-.193.3-.453.3-.725L31 31l-12.985-.01a1.023 1.023 0 0 1-1.024-1.024z">
                        </path>
                        <path fill="#217AB7" className="hover-fillDark"
                          d="M47.697 20.195L37.194 30.702a1.03 1.03 0 0 1-.726.3h-5.462V18.03c0-.567-.46-1.025-1.025-1.025H16.994V11.52c0-.274.108-.534.3-.726L27.783.3C38 1.916 46.07 9.98 47.698 20.194z">
                        </path>
                      </svg>
                      <div className="productLinkContent">
                        <h3 className="linkTitle">Connect</h3>
                        <p className="linkSub">Tout ce dont les places de marché ont besoin pour payer leurs marchands.</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="linkGroup">
                <ul className="productsGroupSecondary">
                  <li>
                    <a className="linkContainer item-sigma" href="/fr/sigma" data-analytics-action="sigma"
                      data-analytics-source="nav_dropdown" tabIndex="-1">
                      <svg viewBox="0 0 48 48">
                        <path className="hover-fillLight"
                          d="M24 48c-2.6 0-5-.3-7.2-1.1V35.2H4v2.1c-2.6-4-4-8.6-4-13.3C0 12.6 7.8 3.2 18.4.6V4h14.4V1.6C41.8 5.1 48 13.8 48 24c0 13.3-10.7 24-24 24z"
                          fill="#beb0f4"></path>
                        <path className="hover-fillDark"
                          d="M45.6 24H32.8v17.6H17.6v-.2 5.8c-6.4-1.8-11.7-6.1-14.9-12 2.1-6.6 8-10.9 14.9-11.2V.8C19.7.3 21.9 0 24 0c3.4 0 6.7.6 9.6 1.9v8c0 6.1 4.5 10.9 10.2 11.7 1 .2 1.8 1.3 1.8 2.4z"
                          fill="#7356b6"></path>
                        <path
                          d="M45.6 24c0 1.1-.8 2.1-1.8 2.2-5.8 1-10.2 5.8-10.2 11.7v5.3c-3 1.4-6.2 2.2-9.6 2.2-2.2 0-4.3-.3-6.4-1V40c0-7 5.8-13 12.5-13.8C31.2 26 32 25.1 32 24h13.6zM4 15.7C6.6 9.8 11.5 5.3 17.6 3.4V8c0 7 5.8 12.8 12.5 13.8 1.1.2 1.9 1.1 1.9 2.2H17.9C12 24 6.7 20.6 4 15.7z"
                          fill="#FFF"></path>
                      </svg>
                      <div className="productLinkContent">
                        <h3 className="linkTitle">Sigma</h3>
                        <p className="linkSub">Les données de votre entreprise à portée de&nbsp;main.</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="linkContainer item-atlas" href="/atlas" data-analytics-action="atlas"
                      data-analytics-source="nav_dropdown" tabIndex="-1">
                      <svg viewBox="0 0 48 48">
                        <path fill="#FCD669" className="hover-fillLight"
                          d="M24 0c13.255 0 24 10.745 24 24S37.255 48 24 48 0 37.255 0 24 10.745 0 24 0z"></path>
                        <path fill="#CE7C3A" className="hover-fillDark"
                          d="M24.012 1.834c.366.005.73.196.92.575l16.825 33.72c.396.79-.314 1.685-1.175 1.48L24 33.626V1.834h.01z">
                        </path>
                        <path fill="#FFF"
                          d="M24 1.834v31.794l-16.584 3.98A1.043 1.043 0 0 1 6.24 36.13L23.067 2.41c.195-.39.572-.58.947-.576H24z">
                        </path>
                      </svg>
                      <div className="productLinkContent">
                        <h3 className="linkTitle">Atlas</h3>
                        <p className="linkSub">Transformez votre idée en&nbsp;startup.</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="linkContainer item-radar" href="/fr/radar" data-analytics-action="radar"
                      data-analytics-source="nav_dropdown" tabIndex="-1">
                      <svg viewBox="0 0 48 48">
                        <path className="hover-fillLight" fill="#F6A4EB"
                          d="M41.364 21.886h6.538c.06.697.098 1.4.098 2.114 0 13.255-10.745 24-24 24S0 37.255 0 24 10.745 0 24 0c6.833 0 12.993 2.86 17.364 7.442v14.444z">
                        </path>
                        <path fill="#FFF"
                          d="M37.746 37.4a1.3 1.3 0 0 1 .92-.38c.72 0 1.303.444 1.303 1.163 0 .503-.353.982-.708 1.292-3.484 3.122-8.325 5.53-13.783 5.53-11.75 0-19.486-9.538-19.486-18.83 0-8.72 7.195-16.19 15.25-16.19s11.227 5.54 11.227 5.54L37.747 37.4z">
                        </path>
                        <path className="hover-fillDark" fill="#9251AC"
                          d="M47.995 24zm0 0c0-.995-.807-1.974-1.802-1.974-1.15 0-1.8.94-1.8 1.83-.09 3.174-1.228 7.127-3.453 10.182-2.355 3.232-6.91 6.956-13.242 6.956-7.625 0-13.213-5.767-13.213-11.925 0-4.3 2.886-7.17 5.828-7.17 1.588 0 2.48.683 2.965 1.312.362.468 1.063.493 1.482.074L40.968 7.032A23.926 23.926 0 0 1 47.995 24z">
                        </path>
                      </svg>
                      <div className="productLinkContent">
                        <h3 className="linkTitle">Radar</h3>
                        <p className="linkSub">Des outils modernes de prévention de la&nbsp;fraude.</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="linkContainer item-issuing" href="/fr/issuing" data-analytics-action="issuing"
                      data-analytics-source="nav_dropdown" tabIndex="-1">
                      <svg viewBox="0 0 48 48">
                        <g fill="none">
                          <circle className="hover-fillLight" fill="#87BBFD" cx="24" cy="24" r="24"></circle>
                          <path fill="#FFF"
                            d="M38.27 8H20a4 4 0 0 0-4 4v3H4.59a1 1 0 0 0-.93.61 22.5 22.5 0 0 0-1.44 5.27 1 1 0 0 0 1 1.12H16v14a4 4 0 0 0 4 4h18.27a2 2 0 0 0 1.41-.58 22 22 0 0 0 0-30.84A2 2 0 0 0 38.27 8z">
                          </path>
                          <path className="hover-fillDark" fill="#555ABF" d="M46.25 15H16v7h31.91c-.2-2.4-.75-4.76-1.66-7z">
                          </path>
                        </g>
                      </svg>
                      <div className="productLinkContent">
                        <h3 className="linkTitle">Issuing</h3>
                        <p className="linkSub">Créez, distribuez et gérez des cartes de paiement.</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="linkContainer item-terminal" href="/fr/terminal" data-analytics-action="terminal"
                      data-analytics-source="nav_dropdown" tabIndex="-1">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                        <path className="hover-fillLight" d="M38,8H10L.19,27a24,24,0,0,0,47.62,0Z" fill="#87bbfd"></path>
                        <path d="M10,24V39.48A3,3,0,0,0,11.29,42a22,22,0,0,0,25.42,0A3,3,0,0,0,38,39.48V24Z" fill="#fff">
                        </path>
                        <path className="hover-fillDark"
                          d="M24,0A24,24,0,0,0,.19,27H47.81A24,24,0,0,0,24,0ZM38,21H10V14a4,4,0,0,1,4-4H34a4,4,0,0,1,4,4Z"
                          fill="#555abf"></path>
                      </svg>
                      <div className="productLinkContent">
                        <h3 className="linkTitle">Terminal</h3>
                        <p className="linkSub">Créez votre point de vente&nbsp;idéal.</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <ul className="linkGroup linkList prodsubGroup">
                <li>
                  <a className="linkContainer item-workswith" href="/partners" data-analytics-action="works-with"
                    data-analytics-source="nav_dropdown" tabIndex="-1">
                    <h3 className="linkTitle linkIcon"><svg width="17" height="17">
                        <path className="hover-fillLight" fill="#87BBFD"
                          d="M15.998 12.495a1.03 1.03 0 0 1-.595.908L8.93 16.395a1.018 1.018 0 0 1-.86 0l-6.473-2.992a1.03 1.03 0 0 1-.594-.908V4.51c.006-.2.07-.39.18-.55L8.5 7.338l7.32-3.38c.108.16.172.35.178.55v7.984z">
                        </path>
                        <path className="hover-fillDark" fill="#6772E5"
                          d="M15.998 12.495a1.03 1.03 0 0 1-.595.908L8.93 16.395a1.026 1.026 0 0 1-.43.095V7.34l7.32-3.38c.11.16.173.35.18.55v7.984z">
                        </path>
                        <path className="hover-fillLight" fill="#87BBFD"
                          d="M8.5 5C6.567 5 5 4.228 5 3.275v-1.15h.098c.36.768 1.742 1.34 3.402 1.34 1.66.002 3.043-.572 3.402-1.34H12v1.15C12 4.228 10.433 5 8.5 5z">
                        </path>
                      </svg>Partners:</h3>
                    <p className="linkSub">Find apps, extensions, and experts.</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="dropdownSection" data-dropdown="developers" aria-hidden="true">
            <div className="dropdownContent">

              <div className="linkGroup documentationGroup">
                <a className="linkContainer withIcon item-documentation" href="/docs" data-analytics-action="documentation"
                  data-analytics-source="nav_dropdown" tabIndex="-1">
                  <h3 className="linkTitle linkIcon"><svg width="17" height="17">
                      <path fill="#87BBFD" className="hover-fillLight"
                        d="M.945 1.998h3.632C6.744 1.998 8.5 3.005 8.5 4.83v11.583c-.512 0-1.015-.337-1.33-.59-1.03-.828-3.057-.828-5.222-.828H.945A.944.944 0 0 1 0 14.052V2.944C0 2.422.423 2 .945 2z">
                      </path>
                      <path fill="#6772E5" className="hover-fillDark"
                        d="M16.055 1.998h-3.632C10.257 1.998 8.5 3.005 8.5 4.83v11.583c.512 0 1.015-.337 1.33-.59 1.03-.828 3.057-.828 5.222-.828h1.003A.944.944 0 0 0 17 14.05V2.945A.944.944 0 0 0 16.055 2z">
                      </path>
                    </svg>Documentation</h3>
                  <span className="linkSub">Commencez à intégrer les outils et les produits&nbsp;Stripe.</span>
                </a>
                <div className="documentationArticles">
                  <ul>
                    <li>
                      <h4>Débutez</h4>
                    </li>
                    <li>
                      <a href="/docs/stripe-js" data-analytics-action="docs_elements" data-analytics-source="nav_dropdown"
                        tabIndex="-1">
                        Elements
                      </a>
                    </li>
                    <li>
                      <a href="/docs/payments/checkout" data-analytics-action="docs_checkout_tutorial"
                        data-analytics-source="nav_dropdown" tabIndex="-1">
                        Checkout
                      </a>
                    </li>
                    <li>
                      <a href="/docs/mobile" data-analytics-action="docs_mobile" data-analytics-source="nav_dropdown"
                        tabIndex="-1">
                        Applications mobiles
                      </a>
                    </li>
                    <li>
                      <a href="/docs/libraries" data-analytics-action="docs_libraries" data-analytics-source="nav_dropdown"
                        tabIndex="-1">
                        Bibliothèques
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <h4>Sujets populaires</h4>
                    </li>
                    <li>
                      <a href="/docs/apple-pay" data-analytics-action="docs_apple_pay" data-analytics-source="nav_dropdown"
                        tabIndex="-1">
                        Apple Pay
                      </a>
                    </li>
                    <li>
                      <a href="/docs/testing" data-analytics-action="docs_testing" data-analytics-source="nav_dropdown"
                        tabIndex="-1">
                        En test
                      </a>
                    </li>
                    <li>
                      <a href="/docs/checklist" data-analytics-action="docs_launch_checklist"
                        data-analytics-source="nav_dropdown" tabIndex="-1">
                        Liste de contrôle du lancement
                      </a>
                    </li>
                    <li>
                      <a href="/docs/libraries#third-party-plugins" data-analytics-action="docs_plugins"
                        data-analytics-source="nav_dropdown" tabIndex="-1">
                        Plug-ins
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <ul className="linkGroup linkList developersGroup">
                <li>
                  <a className="linkContainer item-apiReference" href="/docs/api" data-analytics-action="api_reference"
                    data-analytics-source="nav_dropdown" tabIndex="-1">
                    <h3 className="linkTitle linkIcon"><svg width="17" height="17">
                        <path d="M2 15h13M2 11h13M2 7h13M2 3h13" fill="none" stroke="#6772e5" className="hover-strokeDark"
                          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>Référence API complète</h3>
                  </a>
                </li>
                <li>
                  <a className="linkContainer item-apiStatus" href="https://status.stripe.com"
                    data-analytics-action="api_status" data-analytics-source="nav_dropdown" tabIndex="-1">
                    <h3 className="linkTitle linkIcon"><svg width="17" height="17">
                        <path d="M1 9h2.95l3-6.5 3 12 3-5.45L16 9" fill="none" stroke="#6772e5" className="hover-strokeDark"
                          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>Statut API</h3>
                  </a>
                </li>
                <li>
                  <a className="linkContainer item-openSource" href="/fr/open-source" data-analytics-action="open_source"
                    data-analytics-source="nav_dropdown" tabIndex="-1">
                    <h3 className="linkTitle linkIcon"><svg width="17" height="17">
                        <path fill="#6772E5" className="hover-fillDark"
                          d="M8.5 17a8.5 8.5 0 1 1 0-17 8.5 8.5 0 0 1 0 17zM6.987 6.078a.684.684 0 0 0-.968-.968L3.116 8.012a.684.684 0 0 0 0 .967l2.9 2.9a.684.684 0 0 0 .97-.967l-2.42-2.418 2.42-2.42zm6.996 1.95L11.08 5.123a.684.684 0 0 0-.966.968l2.418 2.42-2.418 2.417a.684.684 0 0 0 .967.967l2.904-2.902a.684.684 0 0 0 0-.966z">
                        </path>
                      </svg>Open Source</h3>
                  </a></li>
              </ul>

            </div>
          </div>

          <div className="dropdownSection" data-dropdown="company" aria-hidden="true">
            <div className="dropdownContent">

              <ul className="linkGroup linkList companyGroup">
                <li>
                  <a className="linkContainer item-about" href="/fr/about" data-analytics-action="about"
                    data-analytics-source="nav_dropdown" tabIndex="-1">
                    <h3 className="linkTitle linkIcon"><svg width="17" height="17">
                        <path fill="#6772E5" className="hover-fillDark"
                          d="M8.5 17a8.5 8.5 0 1 1 0-17 8.5 8.5 0 0 1 0 17zm.178-10.89c.76 0 1.726.278 2.486.69V4.443c-.828-.33-1.656-.502-2.484-.502-2.028 0-3.41 1.06-3.41 2.83 0 2.77 3.8 2.32 3.8 3.513 0 .462-.37.612-.93.612-.827 0-1.867-.366-2.706-.823v2.388c.93.4 1.843.592 2.705.592 2.077 0 3.48-1.027 3.48-2.827 0-2.98-3.82-2.447-3.82-3.572-.003-.39.352-.542.877-.542z">
                        </path>
                      </svg>À propos de Stripe</h3>
                  </a>
                </li>
                <li>
                  <a className="linkContainer item-customers" href="/fr/customers" data-analytics-action="customers"
                    data-analytics-source="nav_dropdown" tabIndex="-1">
                    <h3 className="linkTitle linkIcon"><svg width="17" height="17">
                        <path fill="#87BBFD" className="hover-fillLight"
                          d="M2 16a1 1 0 0 1-1-1V9a4 4 0 0 1 8 0v7H2zm3-9a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"></path>
                        <path fill="#6772E5" className="hover-fillDark"
                          d="M15 16H9a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h.55a2.5 2.5 0 0 1 4.9 0H15a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1z">
                        </path>
                        <path fill="#87BBFD" className="hover-fillLight" d="M11 12h2v4h-2v-4z"></path>
                      </svg>Clients</h3>
                  </a></li>
                <li>
                  <a className="linkContainer item-enterprise" href="/fr/enterprise" data-analytics-action="enterprise"
                    data-analytics-source="nav_dropdown" tabIndex="-1">
                    <h3 className="linkTitle linkIcon"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17"
                        viewBox="0 0 17 17">
                        <circle cx="8.5" cy="8.5" r="8.5" fill="#6772e5" className="hover-fillDark"></circle>
                        <path
                          d="M8.5,0A8.5,8.5,0,0,0,1.23,4.1l1.09-.39a.2.2,0,0,1,.24.08l.21.31a.21.21,0,0,0,.32,0l.85-1,0,0L4.1,2.8A.19.19,0,0,0,4,2.57l-.18-.12a.18.18,0,0,1,0-.3l.95-.61.33.17-.41.61,1.36-.53a.21.21,0,0,1,.2,0l.41.29-1.58.66A.17.17,0,0,0,5,2.84l-.26.39A.19.19,0,0,0,5,3.51l.59-.21h.09l.67.07a.19.19,0,0,0,.14,0l1.16-.87a.18.18,0,0,0,0-.26l-.64-1A.19.19,0,0,1,7.22.94L9,.65a.22.22,0,0,1,.12,0l1.22.6a.22.22,0,0,1,.1.1l.14.33a.19.19,0,0,1-.15.25l-.85.13.6.39a.19.19,0,0,1,.05.26l-.64.9a.2.2,0,0,1-.2.08l-.9-.13a.22.22,0,0,0-.15,0l-1.16.85a.18.18,0,0,0-.06.22l.18.44a.19.19,0,0,1-.08.22L7,5.49a.2.2,0,0,1-.29-.08L6.52,5a.2.2,0,0,0-.31-.07l-.56.44a.19.19,0,0,0-.07.18l.13.8a.2.2,0,0,1-.19.22H5.22A.2.2,0,0,0,5,6.68L4.75,7.85A.18.18,0,0,1,4.68,8L3.4,9a.17.17,0,0,0-.07.11L3,10.38a.17.17,0,0,0,0,.15l1,1.22a.2.2,0,0,0,.13.07l2,.29a.2.2,0,0,1,.16.12L7,13.85A.19.19,0,0,1,7,14l-.22.54a.19.19,0,0,0,0,.2l1,1a.21.21,0,0,0,.2.06l2-.49a.19.19,0,0,0,.15-.18v-.39a.19.19,0,0,1,.1-.16l.59-.31a.2.2,0,0,0,.1-.17v-1a.18.18,0,0,1,0-.11l1.13-1.48a.19.19,0,0,0-.21-.3l-.51.13a.21.21,0,0,1-.21-.07L9.62,9.42l.29-.17a.21.21,0,0,1,.25,0l1.24,1.26a.21.21,0,0,0,.28,0l.77-.66a.19.19,0,0,0,0-.29l-.87-.72.09-.28,1,.34a.2.2,0,0,0,.13,0l.77-.24a.22.22,0,0,1,.15,0l.61.31a.19.19,0,0,1,.1.11l.36,1a.2.2,0,0,0,.24.12l.3-.07a.19.19,0,0,0,.14-.23l-.26-.92a.15.15,0,0,1,0-.1l.32-1.13a.2.2,0,0,1,.26-.1l.3.1a7.76,7.76,0,0,1,.85.46A8.5,8.5,0,0,0,8.5,0Zm1.63,8.47a.22.22,0,0,1-.25.2L8.43,8.54a.18.18,0,0,0-.16.07l-.16.22a.19.19,0,0,1-.22.05L6.61,8.81a.22.22,0,0,1-.19-.3L6.65,8a.22.22,0,0,0-.19-.3l-.54,0a.21.21,0,0,1-.1-.39l.88-.55A.24.24,0,0,1,7,6.78l.44.61a.2.2,0,0,1,0,.16L7.39,8,7.75,8a.21.21,0,0,0,.17-.3L7.34,6.52h.51A.23.23,0,0,1,8,6.63l.56,1a.24.24,0,0,0,.18.11l1.13.1a.22.22,0,0,1,.2.22Zm.17-1.41-.59.08a.22.22,0,0,1-.25-.27l.1-.32a.23.23,0,0,1,.32-.13l.48.24a.21.21,0,0,1-.07.4Z"
                          transform="translate(0 0)" fill="#87bbfd" className="hover-fillLight"></path>
                      </svg>Entreprise</h3>
                  </a></li>
                <li>
                  <a className="linkContainer item-partner-program" href="/fr/partner-program"
                    data-analytics-action="partner-program" data-analytics-source="nav_dropdown" tabIndex="-1">
                    <h3 className="linkTitle linkIcon"><svg width="17" height="17">
                        <path className="hover-fillLight" fill="#87bbfd"
                          d="M4.67 10.94A1.6 1.6 0 0 1 5.9 9.05l10.92-2.32a8.47 8.47 0 0 0-1.28-2.98l-5.1 1.08a1.6 1.6 0 0 1 .66 3.12L.18 10.27a8.47 8.47 0 0 0 1.28 2.99l7.18-1.53a1.6 1.6 0 0 1 .67 3.12L4.34 15.9a8.49 8.49 0 0 0 12.53-5.92l-10.3 2.2a1.6 1.6 0 0 1-1.9-1.24zM7.5 3.82a1.6 1.6 0 0 1 1.23-1.89l3.93-.83A8.49 8.49 0 0 0 .13 7.02L9.4 5.05a1.6 1.6 0 0 1-1.9-1.23z">
                        </path>
                        <path className="hover-fillDark" fill="#555abf"
                          d="M7.5 3.82a1.6 1.6 0 0 0 1.9 1.23l1.04-.22 5.1-1.08a8.5 8.5 0 0 0-2.88-2.65l-3.93.83a1.6 1.6 0 0 0-1.22 1.9zm9.32 2.91L5.9 9.05a1.6 1.6 0 1 0 .66 3.12l10.3-2.19a8.47 8.47 0 0 0-.04-3.25z">
                        </path>
                        <path fill="#fff"
                          d="M12.33 6.06a1.6 1.6 0 0 0-1.9-1.23l-1.03.22L.13 7.02a8.47 8.47 0 0 0 .05 3.25L11.1 7.95a1.6 1.6 0 0 0 1.23-1.9z">
                        </path>
                        <path fill="#fff"
                          d="M9.4 5.05l1.04-.22-1.04.22zm1.13 7.91a1.6 1.6 0 0 0-1.89-1.23l-7.18 1.53a8.5 8.5 0 0 0 2.88 2.64l4.97-1.05a1.6 1.6 0 0 0 1.22-1.9z">
                        </path>
                      </svg>Programme de partenariat</h3>
                  </a></li>
                <li>
                  <a className="linkContainer item-jobs" href="/fr/jobs" data-analytics-action="jobs"
                    data-analytics-source="nav_dropdown" tabIndex="-1">
                    <h3 className="linkTitle linkIcon"><svg width="17" height="17">
                        <path fill="#6772E5" className="hover-fillDark"
                          d="M1.5 4h14c.828 0 1.5.67 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5h-14A1.5 1.5 0 0 1 0 13.5v-8C0 4.67.67 4 1.5 4z">
                        </path>
                        <path fill="#87BBFD" className="hover-fillLight" d="M13 15V4h2v11h-2zM2 4h2v11H2V4z"></path>
                        <path fill="#6772E5" className="hover-fillDark"
                          d="M11.5 3.5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1V4H4v-.5A2.5 2.5 0 0 1 6.5 1h4A2.5 2.5 0 0 1 13 3.5V4h-1.5v-.5z">
                        </path>
                      </svg>Emplois</h3>
                  </a>
                </li>
                <li>
                  <a className="linkContainer item-environment" href="/fr/environment" data-analytics-action="environment"
                    data-analytics-source="nav_dropdown" tabIndex="-1">
                    <h3 className="linkTitle linkIcon"><svg width="17" height="17">
                        <path className="hover-fillLight" fill="#87BBFD"
                          d="M16.17 1.51c-4.33 6.16-7.92 9.65-12.88 11.91-.32-1.3-1.38-6.55 1.27-9.27 2.76-2.82 6.83-1.68 10.73-2.9a.8.8 0 0 1 .88.26z">
                        </path>
                        <path className="hover-fillDark" fill="#6772E5"
                          d="M1 14.37c.68-.26 1.33-.6 1.92-1.02.11-.05.22-.11.32-.18 4.61-3 8.17-6.06 12.8-11.79.19.15.29.37.28.6-.11 3.38-.57 7.9-3.13 10.52-2.33 2.38-6.84 1.83-8.83 1.45-.89.7-1.88 1.27-2.93 1.67A.66.66 0 0 1 1 14.37z">
                        </path>
                      </svg>Environnement</h3>
                  </a>
                </li>
                <li>
                  <a className="linkContainer item-newsroom" href="/fr/newsroom" data-analytics-action="newsroom"
                    data-analytics-source="nav_dropdown" tabIndex="-1">
                    <h3 className="linkTitle linkIcon"><svg width="17" height="15">
                        <path fill="#87BBFD" className="hover-fillLight"
                          d="M1 2h4.5v11H1.75C.78 13 0 12.22 0 11.25V3a1 1 0 0 1 1-1z"></path>
                        <path fill="#6772E5" className="hover-fillDark"
                          d="M14 13H2v-.03c1.14-.12 2-1.08 2-2.22V1a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v9a3 3 0 0 1-3 3zm1-11h-4v4h4V2zM6 2v1h3V2H6zm0 3v1h3V5H6zm0 3v1h9V8H6z">
                        </path>
                      </svg>Salle de presse</h3>
                  </a>
                </li>
              </ul>
              <div className="linkGroup blogGroup">
                <a className="linkContainer withIcon item-blog" href="/fr/blog" data-analytics-action="blog"
                  data-analytics-source="nav_dropdown" tabIndex="-1">
                  <h3 className="linkTitle linkIcon"><svg width="17" height="17">
                      <path fill="#6772E5" className="hover-fillDark"
                        d="M4.5.8v6.29a1.5 1.5 0 1 0 1 0V.8L10 8l-2 7H2L0 8 4.5.8z"></path>
                      <path fill="#87BBFD" className="hover-fillLight"
                        d="M.5 14h9c.28 0 .5.22.5.5v2a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-2c0-.28.22-.5.5-.5z"></path>
                    </svg>En provenance du blog</h3>
                </a>
                <ul className="blogPosts">
                  <li>
                    <a href="/fr/blog/negative-emissions-commitment" tabIndex="-1">
                      <span className="title ">Decrement carbon: Stripe's negative emissions commitment</span>

                    </a></li>
                  <li>
                    <a href="/fr/blog/mexico-city" tabIndex="-1">
                      <span className="title ">Launching Stripe’s Mexico City office</span>

                    </a></li>
                  <li>
                    <a href="/fr/blog/canonical-log-lines" tabIndex="-1">
                      <span className="title ">Fast and flexible observability with canonical log lines</span>

                    </a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default PageHeaderNav
