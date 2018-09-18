import React, { Component } from 'react';
import Articles from './Articles';
import PopupArticle from './PopupArticle';

class News extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            showPopup: false
        };
        this.openPopup = this.openPopup.bind(this);
        this.closePopup = this.closePopup.bind(this);
    }
    
    openPopup(){
        this.setState({showPopup: true});
        console.log('popup was opened ')
    }
    
    closePopup(){
        this.setState({showPopup: false});
    }
    
    openPopupView(){
        if(this.state.showPopup && this.props.match.params.index) {
            return <PopupArticle article={this.props.articles[this.props.match.params.index]} closePopup={this.closePopup} />;
        }
        return null;
    }
    render(){
        let { articles } = this.props;
        return(
            <div>
                <Articles articles={articles} openPopup={this.openPopup}/>
                {this.openPopupView()}
            </div>
        );
    }
}
export default News;
