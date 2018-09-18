import React from 'react';
import { Card, Icon } from 'antd';
const { Meta } = Card;


const PopupArticle = ({article, closePopup}) => (
    <div onClick={() => closePopup()} 
    style={{position: 'fixed', top: 0, right: 0, bottom: 0, left: 0, backgroundColor: '#A6A9C3'}}>
        <div onClick={e => e.stopPropagation()} 
        style={{position: 'absolute', top: 84, right: 20, bottom: 20, left: 20, zIndex: 1000, backgroundColor: '#011528', overflow: 'auto', opacity: 1, transition: 'opacity 1s ease-in'}}>
            <article>
            <Icon type="close" theme="outlined" style={{fontSize: '2em', color: 'white'}} onClick={() => closePopup()} />
                <Card cover={<img src={article.urlToImage} alt={article.title} />} >
                    <Meta title={article.title} />
                    <p>{`by ${article.author}`}</p>
                </Card>
            </article>
        </div>
    </div>
);


export default PopupArticle;