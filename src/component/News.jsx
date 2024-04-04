``
import { useEffect, useState } from "react";
import NewsContent from "./NewsContent";

const News = () => {
    let [news, setNews] = useState([])
    useEffect(()=> {
        fetch("news.json")
        .then(res=> res.json())
        .then(data => setNews(data))
    })
    return (
        <div>
            <h3 className="hidden lg:grid text-xl font-bold text-gray-700">Dragon News Home</h3>
            
           
           {
                news.map((news,index) => <NewsContent
                key={index}
                news={news}
                ></NewsContent>)
            }
          

         
            
        </div>
    );
};

export default News;