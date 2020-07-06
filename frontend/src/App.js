import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
    state = {
        articles: []
    };

    componentDidMount() {
        this.getArticles();
    }

    getArticles() {
        axios
            .get('http://localhost:8000/article/')
            .then(res => {
                this.setState({ articles: res.data });
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <div>
                {this.state.articles.map(article => (
                     <div key={article.id}>
                        <h1>{article.title}</h1>
                        <p>{article.body}</p>
                     </div>
                ))}
            </div>
        );
    }
}

export default App;
