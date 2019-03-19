import React, {Component} from 'react';
import axios from 'axios';
import { Card, Button } from 'antd';
import FormInput from '../components/FormInput';

class ArticleDetail extends Component {

    state = {
      article: {}
    }

// For get data from api
    componentDidMount(){
        const articleID = this.props.match.params.articleID;
        axios.get(`http://127.0.0.1:8000/api/${articleID}`)
            .then(res =>{
                this.setState({
                    article: res.data
                });
            }
            ) 
             
    }
// delete any article from api
    handleDelete = (event) => {
        const articleID = this.props.match.params.articleID;
        axios.delete(`http://127.0.0.1:8000/api/${articleID}`);
        this.props.history.push('/');
    }
  render() {
    return (
      <div>
          <Card title = {this.state.article.title} >
            <p> {this.state.article.content} </p>
          </Card>
          <FormInput 
            requestType = "put" 
            articleID = {this.props.match.params.articleID}
            btnText = "Update"
            headline = "Edit and Update article"
            message = "Update Successfull" /> 
           <span> 
          <form onSubmit = {this.handleDelete}>
            <Button type="danger" htmlType="submit" >
            Delete
            </Button>
          </form>
          </span>
      </div>
    )
  }
}

export default ArticleDetail;