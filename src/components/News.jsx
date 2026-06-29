import { useState, useEffect } from "react";
import "./News.css";

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchNews();
  }, []);
  async function fetchNews() {
    const News_Url =import.meta.env.VITE_NEWS_API_URL;
    const response = await fetch(News_Url);
    const data = await response.json();
    console.log(data);
    setNews(data.news);
    setLoading(false);
  }
  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }
  return (
    <div className="news-container">
      {news.map((item, index) => (
        <div className="card" key={index}>
          <img src={item.image} alt={item.title} />

          <h2>{item.title}</h2>

          <p>{item.description}</p>

          <a href={item.url} target="_blank" rel="noopener noreferrer">
            Read More
          </a>
        </div>
      ))}
    </div>
  );
};

export default News;
