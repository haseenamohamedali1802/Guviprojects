import React, { Component } from "react";
import NewsItems from "./NewsItems";
import PropTypes from "prop-types";
import Spinner from "./Spinner";

export default class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 8,
    category: "sports",
  };

  static propTypes = {
    country: PropTypes.string.isRequired,
    pageSize: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 0,
      totalResults: 0,

    };
  }

  //  Fetch data when component mounts
  async componentDidMount() {
    this.fetchNews();
  }

  // Reusable function to fetch news (used by both Prev & Next)
  fetchNews = async () => {


  try {
    this.setState({ loading: true });

   
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cbaee42a771d497790155f7dbbb1c6f1&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    let data = await fetch(url);
    let parsedData = await data.json();

    if (parsedData.articles) {
      this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false,
      });
    } else {
      console.error("No articles found", parsedData);
      this.setState({ articles: [], loading: false });
    }
  } catch (error) {
    console.error("Error fetching news:", error);
    this.setState({ articles: [], loading: false });
  }
};


  //  Handle next page
  handleNext = async () => {
    {
      this.setState({
        loading:true
      })}
    this.setState(
      { page: this.state.page + 1, loading: false },
      this.fetchNews
    );
  };

  // Handle previous page
  handlePrev = async () => {
    {
      this.setState({
        loading:true
      })}
    if (this.state.page > 1) {
      this.setState(
        { page: this.state.page - 1, loading: false },
        this.fetchNews
      );
    }
  };

  render() {
    return (
      <>
        <h1 className="text-center text-danger mt-3">Live News</h1>

        {this.state.loading && <Spinner/>}
        <div className="container my-4">
          <div className="row">
            {this.state.articles && this.state.articles.length > 0 ? (
              this.state.articles.map((element) => (
                <div className="col-md-4" key={element.url}>
                  <NewsItems
                    title={element.title}
                    description={element.description}
                    url={element.urlToImage}
                    linkUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source?.name}
                  />
                </div>
              ))
            ) : (
              !this.state.loading && (
                <h4 className="text-center text-secondary">No articles found.</h4>
              )
            )}
          </div>

          {/* Buttons */}
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button
              className="btn btn-danger"
              type="button"
              onClick={this.handlePrev}
              disabled={this.state.page <= 1}
            >
              Prev
            </button>
            <button
              className="btn btn-danger"
              type="button"
              onClick={this.handleNext}
            >
              Next
            </button>
          </div>
          <br />
        </div>
      </>
    );
  }
}
