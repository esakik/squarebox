import React, { Component } from 'react';
import axios from 'axios';

import Title from './components/Title';

// class component
class App extends Component {
    // イベントハンドラー
    onClickHandler = () => {
        let title = document.getElementById('versionStatement');
        let upgradeButton = document.getElementById('upgradeButton');

        let nextVersion = parseInt(this.state.version, 10) + 1;
        this.setState({ version: nextVersion});

        title.textContent = "Squarebox " + nextVersion;
        // upgradeButtonを非表示にする。
        // upgradeButton.style.display = "none";
    }

    state = {
        version: '1.0',
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
                <Title title="Squarebox" onClick={this.onClickHandler}/>
                Version: {this.state.version}
                {this.state.articles.map(article => (
                     <div key={article.id}>
                        <h2>{article.title}</h2>
                        <p>{article.body}</p>
                     </div>
                ))}
            </div>
        );
    }
}

export default App;
