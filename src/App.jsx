const App = () => {
  const onClickButton = () => alert();
  const contentStyle = {
    color: "blue",
    fontSize: "25px"
  };
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは～</h1>
      <p style={contentStyle}>いい天気ですね～</p>
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

// このページのApp関数は、このままだとこのページでしか使えないまま…
// export することで他でも使えるようにする
export default App;
