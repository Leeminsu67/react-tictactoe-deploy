// import React, { Component, useState } from "react";
import React, { useState } from "react";
import Square from "./Square";
import "./Board.css";

// class Board extends Component {
const Board = ({ squares, onClick }) => {
  // 첫번째 인수 변수 이름 getter
  // 두번째 인수 state를 정하는 함수
  // useState(초기값)
  // const [squares, setSquares] = useState(Array(9).fill(null));
  // const [xIsNext, setXIsNext] = useState(true);

  const renderSqueare = (i) => {
    // return (
    //   // Board에서 Square로 onClick() => this.handleClick(i)를 전달했기
    //   // 때문에 Square를 클릭하면 Board의 handleClick(i)를 호출합니다.
    //   <Square
    //     value={this.state.squares[i]}
    //     onClick={() => this.handleClick(i)}
    //   />
    // );
    return <Square value={squares[i]} onClick={() => onClick(i)} />;
  };

  // render() {
  // const status = "Next player: X";
  return (
    <div className="board-wrapper">
      <div className="board-row">
        {renderSqueare(0)}
        {renderSqueare(1)}
        {renderSqueare(2)}
      </div>
      <div className="board-row">
        {renderSqueare(3)}
        {renderSqueare(4)}
        {renderSqueare(5)}
      </div>
      <div className="board-row">
        {renderSqueare(6)}
        {renderSqueare(7)}
        {renderSqueare(8)}
      </div>
    </div>
  );
  // }
};

export default Board;
