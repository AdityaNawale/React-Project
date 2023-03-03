import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, newsurl, author, date , source} = this.props;
    //imageurl
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src="https://static.files.bbci.co.uk/ws/simorgh-assets/public/news/images/metadata/poster-1024x576.png"
            className="card-img-top"
            alt="NoImage.jpg"/>
          <div className="card-body">
            <h5 className="card-title">
              {title}
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {source}
             
              </span>
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-test">
              <small className="test-muted">
                {" "}
                By bbc-news {author} on {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={newsurl} className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
