const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    color, //プロパティ名と値が同じなら省略できる。本来ならcolor: color
    fontSize: "25px"
  };
  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
