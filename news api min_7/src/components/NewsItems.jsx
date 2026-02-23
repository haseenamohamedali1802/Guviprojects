import React, { Component } from "react";

export default class NewsItems extends Component {
  render() {
    let { title, description, url, linkUrl, author, date, source } = this.props;

    return (
      <div className="container mt-4">
        <div className="card position-relative">
          <img
            src={url ? url : "https://via.placeholder.com/300x150?text=No+Image"}
            alt="news"
            className="card-img-top"
          />

          <div className="card-body">
            <span
              className="badge rounded-pill bg-danger text-light"
              style={{
                position: "absolute",
                right: "10px",
                top: "10px",
              }}
            >
              {source}
            </span>

            <h5 className="card-title text-success">
              {title ? title.slice(0, 50) : "No title"}...
            </h5>
            <p className="card-text">
              {description ? description.slice(0, 200) : "No description"}
            </p>
            <p>By {author ? author : "Anonymous"}</p>
            <hr />
            <p>Published At: {date}</p>
            <a href={linkUrl} className="btn btn-danger" target="_blank" rel="noreferrer">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
