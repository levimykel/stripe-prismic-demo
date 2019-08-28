import React, { Fragment } from 'react'
import { RichText } from 'prismic-reactjs'
import { linkResolver } from 'utils/linkResolver'

const renderStats = (items) => {
  return items.map((item,index) => {
    return (
      <div className="big-stat" key={"big-stat-"+index}>
        <div className="big-stat-data">
          <span className="big-stat-number">
            { RichText.asText(item.stat_number) }
          </span>
        </div>
        <span className="big-stat-label common-UppercaseText">
            { RichText.asText(item.stet_text) }
        </span>
      </div>
    )
  })
}

const Stats = ({ slice }) => {
  return (
    <Fragment>
      <div className="container-lg">
        <div className="section-intro">
          <div className="section-intro-icon">
            <svg width="72px" height="72px" viewBox="0 0 72 72" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <g stroke="none" stroe-width="1" fill="none" fillRule="evenodd">
                <g transform="translate(-790.000000, -769.000000)" fillRule="nonzero">
                  <g transform="translate(334.000000, 769.000000)">
                    <g transform="translate(456.000000, 0.000000)">
                      <circle id="Oval" fill="#D4F3FD" cx="36" cy="36" r="36"></circle>
                      <rect id="Rectangle-path" fill="#91DDF6" x="17" y="45" width="5.88" height="12" rx="1.5"></rect>
                      <rect id="Rectangle-path" fill="#91DDF6" x="25.03" y="44" width="5.88" height="13" rx="1.5"></rect>
                      <rect id="Rectangle-path" fill="#91DDF6" x="33.06" y="41" width="5.88" height="16" rx="1.5"></rect>
                      <rect id="Rectangle-path" fill="#91DDF6" x="41.09" y="36" width="5.88" height="21" rx="1.5"></rect>
                      <rect id="Rectangle-path" fill="#91DDF6" x="49.12" y="31" width="5.88" height="26" rx="1.5"></rect>
                      <path
                        d="M18,39.71 C23.8115588,38.0918747 29.2480846,35.3464291 34,31.63 C38.652443,27.9993485 42.6529141,23.6032264 45.83,18.63 C47.0367422,16.7329019 49.5529019,16.1732578 51.45,17.38 C53.3470981,18.5867422 53.9067422,21.1029019 52.7,23 C52.6,23.15 52.49,23.3 52.38,23.44 C48.0386893,28.5322779 42.8612265,32.8473938 37.07,36.2 C31.3808752,39.500943 25.0985078,41.6516939 18.58,42.53 C17.8380389,42.6172465 17.152575,42.122592 17.0015582,41.3909417 C16.8505415,40.6592914 17.2841309,39.9336579 18,39.72 L18,39.71 Z"
                        id="Shape" fill="#45B2E8"></path>
                      <path
                        d="M55.09,27.59 L55.09,16 C55.09,15.4477153 54.6422847,15 54.09,15 L42.5,15 C42.0937349,14.9976374 41.72642,15.2413038 41.570629,15.6165185 C41.4148381,15.9917332 41.5015401,16.4239095 41.79,16.71 L53.38,28.29 C53.6648091,28.5771614 54.094552,28.6644903 54.4688524,28.5112679 C54.8431528,28.3580455 55.0883042,27.9944441 55.09,27.59 Z"
                        id="Shape" fill="#45B2E8"></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <h2 className="common-SectionTitle">
            { RichText.asText(slice.primary.title) }
          </h2>
          { RichText.render(slice.primary.rich_text, linkResolver) }
        </div>
      </div>
      <div className="container-lg">
        <div className="stats">
          { renderStats(slice.items) }
        </div>
      </div>
    </Fragment>
  )
}

export default Stats
