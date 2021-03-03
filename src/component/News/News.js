import React from 'react';

const News = (props) => {
 const article = props.article;
    return (
        <div className="row row-cols-1 row-cols-md-1 g-4">
        {
            article.map(article =>
                <div className="col">
                    <div className="card">
                        <img src={article.urlToImage} className="card-img-top" alt="news photos" />
                        <div className="card-body">
                            <h6 className="card-title"><b>Title:</b> {article.title}</h6>
                            <p className="card-text"><b>Description:</b> {article.description}</p>
                            <p><b>Content:</b> {article.content}</p>
                            <p><b>PublishedAt: </b> {article.publishedAt}</p>
                        </div>
                    </div>
                </div>
            )
        }
    </div>
    );
};

export default News;