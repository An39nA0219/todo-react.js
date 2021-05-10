/* eslint react-hooks/exhaustive-deps: off */

import { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  console.log("さいしょ");
  // numが初期値、setNumが更新値の意味
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      CountUp
      <h1 style={{ color: "red" }}>こんにちは～</h1>
      <ColorfulMessage color="blue">どんな天気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">いい天気ですよ</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>( ;∀;)</p>}
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
