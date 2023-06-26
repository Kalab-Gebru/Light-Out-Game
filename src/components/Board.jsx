import React, { useState } from "react";
import styled from "@emotion/styled";
import Light from "./light";

function Board({ size, chanceLightStartsOn }) {
  /** randomLight: returns random boolean */
  function randomLight() {
    return Math.random() < chanceLightStartsOn;
  }

  //create size*size matrix state, randomly setting isOn to true/false
  const lightsGrid = Array.from({ length: size }).map(
    (row) =>
      (row = Array.from({ length: size }).map((cell) => (cell = randomLight())))
  );

  const [board, setBoard] = useState(lightsGrid);

  function toggleSinglelight(row, col) {
    setBoard((gg) =>
      gg.map((r, i) => r.map((c, j) => (i == row && j == col ? !c : c)))
    );
  }

  function toggleAllLights(cellRowIndex, cellColIndex) {
    toggleSinglelight(cellRowIndex, cellColIndex); //toggle clicked on cell
    toggleSinglelight(cellRowIndex, cellColIndex + 1); //toggle right
    toggleSinglelight(cellRowIndex, cellColIndex - 1); //toggle left
    toggleSinglelight(cellRowIndex + 1, cellColIndex); //toggle down
    toggleSinglelight(cellRowIndex - 1, cellColIndex); //toggle up
  }

  function hasWon() {
    // return true;
    return board.every((row) => row.every((cell) => !cell));
  }

  const Container = styled.div({
    width: 600,
    aspectRatio: 1 / 1,
    borderRadius: 30,
    overflow: "hidden",
    borderStyle: "solid",
    borderColor: "white",
    "@media(max-width: 720px)": {
      width: "100%",
    },
  });
  const Grid = styled.div({
    color: "red",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    width: "100%",
    height: "100%",
  });
  const Rowcell = styled.div({
    color: "white",
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
    height: "100%",
  });
  const Cellblock = styled.div({
    background: "rgb(241, 179, 62)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  });

  const Winmessage = styled.h1({
    color: "green",
    fontSize: 60,
  });

  const Centermessage = styled.div({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 600,
  });

  return (
    <>
      {hasWon() ? (
        <Centermessage>
          <Winmessage>Congratulation!</Winmessage>
        </Centermessage>
      ) : (
        <Container className="neonborder">
          <Grid>
            {board.map((row, i) => (
              <Rowcell key={i}>
                {row.map((cell, j) => (
                  <Cellblock key={j}>
                    <Light cell={cell} toggle={() => toggleAllLights(i, j)} />
                  </Cellblock>
                ))}
              </Rowcell>
            ))}
          </Grid>
        </Container>
      )}
    </>
  );
}

export default Board;
