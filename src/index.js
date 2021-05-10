// これまでは下記を書くことが必要だったけど、今はアップデートにより要らなくなったぽい
// import React from 'react'

import ReactDom from "react-dom";

// render させる関数のなかみはreturnで返す。
// return の中にhtmlを返す場合は、タグで囲めばOK
// 複数行のhtmlタグを返したりするのであれば、一番親の要素が1つになるようにしないとエラーになる。
// 例えば、<h1></h1><p></p>というように、兄弟タグがトップだとNG
// <div><h1></h1><p></p></div>のように、トップ要素が1つにならないとだめ
// とはいえ、無駄にエラー回避のためだけにdivタグ入れるのは無駄なので、
// ＜React.Fragment＞タグで囲むと要素も反映されないし、エラーも処理できる。
// ＜React.Fragment>は、<>と書くだけで省略できる。
// const App = () => {
//   return (
//     <>
//       <h1>こんにちは～</h1>
//       <p>いい天気ですね～</p>
//     </>
//   );
// };

// コンポーネントとは…
// 下記のようにhtmlを書いていくと、行数とんでもないことになる…
// しかも、使いまわし巣hるようなhtmlの行もあると思うので、そうなっていくと面倒にもなる…
// =>このAppのような関数を複数作ってコンポーネント化していく。
// コンポーネントはわかりやすいように拡張子jsxで書いていく。
// コンポーネントは必ず先頭大文字から書くようにする。
// コンポーネントをインポートするのは下記の手順で行う。
import App from "./App";

// JSX記法
// ReactDom.render(第1引数, 第2引数);
// 第1引数 は、renderしたい関数をhtml形式で返すよ、という意味を込めてタグっぽく括る。
// Appの関数を返したい場合は、Appを< />でくくる
// 第2引数 は、renderしたい場所を指定する。基本的にはindex.htmlの<div id="root"></div>に返すので、
// JSのgetElementByIdで場所を取得する
ReactDom.render(<App />, document.getElementById("root"));
