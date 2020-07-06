// Title.js

// Componentをインポートする必要はない
import React from 'react';
import './Title.css';

// JSXやメソッドを定義する実質上の中身
//const Title = () => {
// return(
//   <div>
//     <h1>Squarebox</h1>
//   </div>
// );
//}

// functional component
// functional componentがclass componentの親要素になることはできない
// stateやその他メソッドの管理が難しくなるため、class よりも積極利用することを推奨
// 少数のclass componentがstateを管理していて、その情報が必要な時だけpropsでfunctional componentに渡すのがよさそう
const Title = (props) => {
 return(
   <div className="titleSection">
     <h2 id="versionStatement">{props.title}</h2>
     <p onClick={props.onClick} id="upgradeButton" className="upgrade-button">Upgrade</p>
   </div>
 );
}

// 外部のファイルがこのcomponentを利用できるようにするエクスポートの部分
export default Title;
