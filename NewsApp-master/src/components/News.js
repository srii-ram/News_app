import React, { Component } from 'react'
import Loading from './Loading';
import NewsItems from './NewsItems'
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


export class news extends Component {

    static defaultProps = {
        country: "us",
        pageSize: 12,
        category: "general",
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }
    
    constructor(){
        super();
        this.state={
            articles:[],
            page: 1
        }
    }

    async updateNews(){
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=87f87d15d8c846b6b84523068338db72&page=${this.state.page}&pageSize=12`;
          const data = await fetch(url);
          const parsedData = await data.json();
          console.log(parsedData);
          this.setState({articles: parsedData.articles,
            totalResults: parsedData.totalResults
        });
      }
    
      async componentDidMount(){
          this.updateNews();
      }
    
      fetchMoreData = async () =>{
          this.setState({page: this.state.page + 1});
          const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=87f87d15d8c846b6b84523068338db72&page=${this.state.page}&pageSize=12`;
          const data = await fetch(url);
          const parsedData = await data.json();
          console.log(parsedData);
          this.setState({articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults
        });
      }

    // async componentDidMount(){
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=87f87d15d8c846b6b84523068338db72`;
    //     let data= await fetch(url);
    //     let parsedData= await data.json();
    //     this.setState({articles: parsedData.articles,
    //     totalResults: parsedData.totalResults
    //     })
    // }

    // prePage = async ()=>{
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=87f87d15d8c846b6b84523068338db72&page=${this.state.page-1}&pageSize=12`;
    //     this.setState({loading: true})
    //     let data= await fetch(url);
    //     let parsedData= await data.json();
    //     this.setState({
    //         page: this.state.page-1,
    //         articles: parsedData.articles,
    //         loading:false
    //     });
    // }

    // nxtPage = async ()=>{
    //     if (this.state.page+1 > Math.ceil(this.state.totalResults/12)) {
            
    //     } else {
    //         let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=87f87d15d8c846b6b84523068338db72&page=${this.state.page+1}&pageSize=12`;
    //         this.setState({loading: true})
    //         let data= await fetch(url);
    //         let parsedData= await data.json();
    //         this.setState({
    //             page: this.state.page+1,
    //             articles: parsedData.articles,
    //             loading:false
    //         });
    //     }
       
    // }


        // prevPg = async ()=>{
  //   this.setState({page: this.state.page - 1});
  //   this.updateNews();
  // } 

  // nxtPg = async ()=>{
  //   // console.log("Next");
  //   if (this.state.page + 1 > Math.ceil(this.state.totalResults/12)) {
        
  //   } else {
  //     this.setState({page: this.state.page + 1});
  //     this.updateNews();
  //   }
  // } 

  render() {
    
    return (
      <>
          
        <div className='container my-3'>
          <h2>Headlines</h2>
          {this.state.loading && <Loading/>}
          <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Loading/>}
        >
          
          <div className='container'>
          <div className='row'>
            {this.state.articles.map((element)=>{
              return <div className='col-md-4' key={element.url}>
              <NewsItems title={element.title?element.title.slice(0,50):""} description={element.description?element.description.slice(0,50):""} imgUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
            })}
            
          </div>
          </div>
          </InfiniteScroll>
          {/* <div className="container d-flex justify-content-between">   
          <button type="button" disabled={this.state.page<=1} onClick={this.prevPg} className="btn btn-dark">&larr; Previous</button>
          <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/12)} onClick={this.nxtPg} className="btn btn-dark">Next &rarr;</button>
            </div>          */}
        </div>
        
      </>
    )
  }
}

export default news