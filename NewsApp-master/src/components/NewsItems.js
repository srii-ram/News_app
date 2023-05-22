import React, { Component } from 'react'

export class Newsitems extends Component {

  render() {

    let {title, description, imgUrl, newsUrl} = this.props;

    return (
      <div>
        <div className="card">
            <img src={!imgUrl?"https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/VIE4N2HYFEI6ZAO3VQD2HFFINM.jpg&w=1440":imgUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={newsUrl} target="_blank" className="btn btn-primary">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default Newsitems