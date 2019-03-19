import React, {Component} from 'react';
import Articles from '../components/Article';
import FormInput from '../components/FormInput';
import axios from 'axios';


class ArticleListView extends Component {

    state = {
      articles: []
    }

    componentDidMount(){
      axios.get('http://127.0.0.1:8000/api/')
        .then(res =>{
          this.setState({
            articles: res.data
          });
          console.log(res.data);
      })
    }
  render() {
    return (
      <div>
        <Articles data = {this.state.articles} />
        <br />
        <FormInput 
          requestType = "post" 
          articleId = {null}
          btnText = "Create"
          headline = "Create a new article" 
          message = "Submitted Successfully" />
      </div>
    )
  }
}

export default ArticleListView;