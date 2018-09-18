import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;

const Article = ({ article, openPopup }) => {
    return(
        <article onClick={() => openPopup()}>
            <Card cover={<img src={article.urlToImage} alt={article.title} />} >
                <Meta title={article.title} />
                <p>{`by ${article.author}`}</p>
            </Card>
        </article>
    )
}

export default Article;