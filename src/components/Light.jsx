import React from "react";
import styled from "@emotion/styled";

const LightCell = styled.div(
  {
    color: "white",
    // background: "yellow",
    borderRadius: "100%",
    width: 50,
    height: 50,
  },
  (props) => ({
    background: props.light,
  })
);

function Light({ cell, toggle }) {
  return (
    <LightCell
      className={cell ? "neonLight" : ""}
      onClick={toggle}
      light={cell ? "yellow" : "gray"}
    ></LightCell>
  );
}

export default Light;
