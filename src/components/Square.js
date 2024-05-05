import React from "react";
import "./Square.css";

// export default class Square extends React.Component {
const Square = ({ onClick, value }) => {
  // render() {
  return (
    // 내장된 DOM button 컴포넌트에 있는. onClick prop은 react에게 클릭 이벤트 리스너를 설정하라고 알려줍니다.

    // onClick prop은 react에게 클릭 이벤트 리스너를 설정하라고 알려줌

    // this.props.onClick() square의 onClick prop은 Board에서 정의되었음
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
  // }
};

export default Square;
