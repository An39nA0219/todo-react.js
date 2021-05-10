import { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const [num, setNum] = useState(0);
  // numが初期値、setNumが更新値の意味

  return (
    <>
      CountUp
      <h1 style={{ color: "red" }}>こんにちは～</h1>
      <ColorfulMessage color="blue">どんな天気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">いい天気ですよ</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
    </>
  );
};

// ボタン等に、イベントとかスタイルとかを付ける場合は、上のbuttonのような感じで、
// onClick={関数}というように書く。
// {}内はJSだというように認識されるらしいよ。
// スタイルを適応させるときは、style={}の中にスタイルを入れていく。
// このstyleの中に{color: 'red'}というように入れていく。
// スタイルシートの書き方ではなく、JSの書き方なので、やや特殊な書き方です。

// Propsとは、コンポーネントに渡す引数のようなもの

// このページのApp関数は、このままだとこのページでしか使えないまま…
// export することで他でも使えるようにする
export default App;
