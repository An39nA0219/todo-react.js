import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => alert();

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは～</h1>
      <ColorfulMessage color="blue">どんな天気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">いい天気ですよ</ColorfulMessage>
      <button onClick={onClickButton}>ボタン</button>
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
