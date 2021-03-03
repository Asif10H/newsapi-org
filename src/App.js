import './App.css';
import Header from './component/Header/Header';
import { useState, useEffect } from 'react';
import TopHeadlines from './component/TopHeadlines/TopHeadlines';
import News from './component/News/News';
function App() {

  const [articles, setArticles] = useState([]);
  const [articlesDetail, setArticlesDetail] = useState([ ])
  console.log(articles);
  useEffect(() => {
    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=7b1a7fc3203c463a873e6946ad4729d3'
    fetch(url)
      .then(res => res.json())
      .then(data => setArticles(data.articles))
  }, [])

  const handleNewInfo = (article) =>{
    const newNewsInfo = [article];
    setArticlesDetail(newNewsInfo)
  }
  return (
    <>
      <Header></Header>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-8">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {
                articles.map(article => <TopHeadlines article={article} handleNewInfo={handleNewInfo}></TopHeadlines>)
              }
            </div>
          </div>
          <div className="col-4">
              <News article={articlesDetail}></News>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
