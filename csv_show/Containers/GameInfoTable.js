import React, { Component } from "react";
import GameTableHead from "../components/GameTableHead";
import GameTableBody from "../components/GameTableBody";

class GameInfoTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <table className="table table-hover table-dark">
        <GameTableHead headElements={this.props.keys} />
        <GameTableBody userData={this.props.itemList} />
      </table>
    );
  }
}
export default GameInfoTable;
