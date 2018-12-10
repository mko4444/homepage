import React from 'react';
import './index.scss';
var classNames = require('classnames');

let SITE_LINKS = ["about", "writings", "newsletter", "projects", "bookshelf", "social"],
    SOCIAL_LINKS = [
      {
        "text": "twitter",
        "url": "https://www.twitter.com/kochakian",
      }
    ]

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      titleText: 'Matthew Kochakian'
    }
  }
  populateSiteLinks(linkList) {
    return linkList.map((link, index) =>
      <div className="link">{link}</div>
    )
  }
  populateSocialLinks() {
    return SOCIAL_LINKS.map((link, index) =>
      <div className={classNames({
        "lk-con": true,
        "hide": !this.state.social
      })}>{link["text"]}</div>
    )
  }
  render() {
    return(
      <div className="con">
        <span className="title-text">
          {this.state.titleText}
        </span>
        <div>
        <div className="dvd"></div>
        <div className="lk-con">{this.populateSiteLinks(SITE_LINKS)}</div>
        <div className="dvd"></div>
        {this.populateSocialLinks()}
        </div>
      </div>
    )
  }
}
