const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    color, //プロパティ名と値が同じなら省略できる。本来ならcolor: color
    fontSize: "25px"
  };
  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;

// defaultエクスポート意外にもただのexportというのがある。
// だたのexportの場合、コンポーネントの関数前にexportを入れる。
// この場合は、export const ColorfulMessageという感じ
// 逆にimportの方も書き換えが必要になる。
// 今まではimport 関数名 form "ファイルの場所"だったけど、
// ただのexportを設定したときはimport {関数名} from "ファイルの場所"
// 分割代入をしてあげないといけない。
// デフォルトエクスポートとの違いは色々あるが、名称を補足してくれたりするので、
// 通常のエクスポートの方が安全課も（文字間違いに気づいてくれる）
