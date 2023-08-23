import styled from "@emotion/styled";
import Board from "./components/Board";
import "./app.css";

function App() {
  const Title = styled.h1({
    textAlign: "center",
    fontSize: 60,
    marginBottom: 50,
  });
  const Spangreen = styled.span({
    color: "yellow",
  });
  const Spanwhite = styled.span({
    color: "white",
  });

  const Centered = styled.div(
    { display: "flex", justifyContent: "center" },
    (props) => ({
      fontSize: props.fontSize,
    })
  );

  return (
    <>
      <Title className="glow">
        <Spangreen>LIGHTS</Spangreen> <Spanwhite>OUT</Spanwhite>
      </Title>
      <Centered>
        <Board size={5} chanceLightStartsOn={0.25} />
      </Centered>
    </>
  );
}

export default App;
