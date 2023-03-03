import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
    static defaultProps =
    {
        country : 'us',
        pageSize : 8,
        category : 'sport',

    }

    static propType=
    {
        country : PropTypes.string,
        pageSize : PropTypes.number,
        category : PropTypes.string,
    }

    capitalFirstLtter=(string)=>
    {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props) {
        super(props);
        this.state =
        {
            articles: [],
            loading: true,
            page:1

        }
        document.title = `NewsApp-${this.capitalFirstLtter(this.props.category)}`;
    }

   async componentDidMount()
    {
        
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=ba719088c4404d81877427eebdeb47f1&page=1&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parseData = await data.json()
        console.log(parseData);
        this.setState({articles:parseData.articles,
            totalArtical:parseData.totalResult})
    }

    handlePreviousClick = async() =>
    {
        console.log("next")
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=ba719088c4404d81877427eebdeb47f1&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parseData = await data.json()
        console.log(parseData);
        this.setState({articles:parseData.articles})

        this.setState({
            page:this.state.page - 1,

        })
                          

    }

    handleNextClick = async() =>
    {
        console.log("next");
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=ba719088c4404d81877427eebdeb47f1&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parseData = await data.json()
        console.log(parseData);
        this.setState({articles:parseData.articles})

        this.setState({
            page:this.state.page + 1,

        })
  
    }


    render() {
        return (
            <div className="container my-3">
                <h1 className="text-center">NewsApp - Top Headlines From {this.capitalFirstLtter(this.props.category)}</h1>
              {this.state.loading && <Spinner/>}
                <div className="row">
                    {this.state.loading && this.state.articles.map((element) => {

                        return <div className="col-md-4" key={element.url}>
                            <NewsItem  title= {element.title?element.title:""} description={element.description?element.description:""} imageurl={element.urlToImage} newsurl={element.url} auther={element.auther} date={element.publishedAt}/>

                        </div>
                    })}


                    <div className="container d-flex justify-content-between">

                    <button disabled={this.state.page<=1}  type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
                    <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>

                    </div>

                </div>

            </div>
        )
    }
}

export default News