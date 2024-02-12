import React from 'react';
import {  useParams } from 'react-router-dom';

const News = () => {
    const {paperName} = useParams()
    console.log(paperName)
    const paperNews = [
        {
            name:"আনন্দবাজার",
            content: "aaaaaaaaaaa"
        },
        {
            name:"ai somoy",
            content: "aiiiiiiii"
        },
        {
            name:"আনন্দবাজার",
            content: "a2222222",
        },
        {
            name:"আনন্দবাজার",
            content: "a33"
        },
    ]
    const news = paperNews.filter(item=>item.name === `${paperName}`)
    return (
        <div>
            {news.map(item=><>
                <div>
                    <h2>{item.name}</h2>
                    <p>{item.content}</p>
                </div>
            </>)}
        </div>
    );
};

export default News;