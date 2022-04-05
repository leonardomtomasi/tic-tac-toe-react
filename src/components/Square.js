import React from "react";
import "../App.css";

function Square({val, chooseSquare}) {
    return <div className="square" onClick={chooseSquare}></div>
}

export default Square;