import React from 'react';
import './TopHeadlines.css'
const TopHeadlines = (props) => {
    const { title, author, urlToImage, publishedAt } = props.article;
    const handleNewInfo = props.handleNewInfo;
    console.log("handleNewInfo ", handleNewInfo);
    return (
        <div className="col">
            <div className="card">
                <div className="card-img-top">
                    <img src={urlToImage} className="news-img img-thumbnail " alt="news photos" />
                </div>
                <div className="card-body">
                    <h5 className="card-title">Title: {title}</h5>
                    <h6 className="card-text">Author: {author}</h6>  
                    <h6 className="card-text">PublishedAt: {publishedAt}</h6> 
                    <button className="btn btn-success add-btn" onClick={()=> handleNewInfo(props.article)}>More Details</button>
                </div>
            </div>
        </div>
    );
};

export default TopHeadlines;