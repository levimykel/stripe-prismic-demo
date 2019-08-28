import React from 'react'

const HomeNav = ({ footer }) => {
  return (
    <nav className="productNav">
      <div className="container-lg colorize">
        <div className="separator colorize"></div>
        <a className="home colorize" href="/fr/radar">
          <figure className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" viewBox="0 0 48 48" >
              <path
                d="M40 39c-9.37 9.37-21.6 9.4-31 0S-.37 18.37 9 9 31.6-2.34 41 7a23.94 23.94 0 0 1 6.9 19.17c-.48 5.4-3.8 8.67-7.9 12.83z"
                fill="#9251ac"></path>
              <path
                d="M46.77 24a1.18 1.18 0 0 0-1.18 1.07 20 20 0 0 1-7.42 13.1c-.25.21-.51.4-.77.59l.6 1.53C34.34 43.22 30.29 44 24.75 44 14 44 7 36.78 7 26c0-9.68 5.44-15 14.52-15 6 0 10.2 1.48 11 4.51L41 7a24 24 0 1 0 7 18.2 1.19 1.19 0 0 0-1.23-1.2z"
                fill="#f6a4eb"></path>
              <path
                d="M26.89 42.14c-9.75 0-14.56-7.38-14.56-13.22s3.6-8.91 7-8.91a4.38 4.38 0 0 1 3.65 1.75A2 2 0 0 0 26 22l6.51-6.51c-.77-3-4.93-6.87-11-6.87C12.44 8.64 5.26 16.28 5.26 26a19.17 19.17 0 0 0 19.49 19.1 22 22 0 0 0 13.94-4.81 1 1 0 0 0 .1-1.5 1 1 0 0 0-1.31-.09 17.78 17.78 0 0 1-10.59 3.44z"
                fill="#fff"></path>
            </svg>
          </figure>
          <span>Radar</span>
        </a>
        <div className="mask-container">
          <ul>
            <li><a className="colorize " href="/fr/radar">Overview</a></li>
            <li><a className="colorize " href="/fr/radar/fraud-teams">Radar for Fraud Teams</a></li>

            <li><a className="colorize smoothlink" href="/fr/pricing#radar-pricing">Pricing</a></li>
            <li><a className="colorize external" href="/docs/radar">Docs</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default HomeNav
