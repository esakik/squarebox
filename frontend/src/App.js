import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import axios from 'axios';

import Title from './components/Title';
import './App.css';

const PageOne = () => {
  return (
    <div>
      PageOne
      <Link to="/pagetwo">
        <button>
          show PageTwo when you click this!!
        </button>
      </Link>
    </div>
  );
};

const PageTwo = () => {
  return (
    <div>
      PageTwo
      <Link to="/">
        <button>
          show PageOne when you click this!!
        </button>
      </Link>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PageOne} />
          <Route path="/pagetwo"  component={PageTwo} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

//// class component
//class App extends Component {
//    // イベントハンドラー
////    onClickHandler = () => {
////        let title = document.getElementById('versionStatement');
////        let upgradeButton = document.getElementById('upgradeButton');
////
////        let nextVersion = parseInt(this.state.version, 10) + 1;
////        // stateは immutable なので、「this.state =」は使えない
////        this.setState({ version: nextVersion});
////
////        title.textContent = "Squarebox " + nextVersion;
////        // upgradeButtonを非表示にする。
////        // upgradeButton.style.display = "none";
////    }
//
//    onClickHandler = () => {
//        let nextVersion = parseInt(this.state.version, 10) + 1
//        this.setState({ version: nextVersion})
//    }
//
//    state = {
//        version: '1',
//        articles: []
//    };
//
//    // 初めてcomponentが読み込まれた直後に起きて欲しい処理の場合、componentDidMountというメソッドで呼び出す
//    componentDidMount() {
//        this.getArticles();
//    }
//
//    getArticles() {
//        axios
//            .get('http://localhost:8000/article/my_list/')
//            .then(res => {
//                this.setState({ articles: res.data });
//            })
//            .catch(err => {
//                console.log(err);
//            });
//    }
//
//    render() {
//        // upgradeButton初期の要素
//        let upgradeButton = (
//            <p onClick={this.onClickHandler} id="upgradeButton" className="upgrade-button">Upgrade</p>
//        );
//
//        //バージョンが5.0になった時に表示されて欲しいボタン
//        if( this.state.version == '5'){
//            upgradeButton = (
//                <p className="upgraded-button">Already up-to-date</p>
//            );
//        }
//
//        return (
////            <Title title="Squarebox" onClick={this.onClickHandler}/>
////            Version: {this.state.version}
//// <p onClick={this.onClickHandler} id="upgradeButton" className="upgrade-button">Upgrade</p>
//            <div>
//                <Title titleStyle={{color: 'orange'}}>
//                    Hello World <span id="versionCounter" style={{borderBottom: '1px solid orange'}}> {this.state.version}</span>
//                </Title>
//                {upgradeButton}
//
//                {this.state.articles.map(article => (
//                     <div key={article.id}>
//                        <h2>{article.title}</h2>
//                        <p>{article.body}</p>
//                     </div>
//                ))}
//            </div>
//        );
//    }
//}
//
//export default App;
