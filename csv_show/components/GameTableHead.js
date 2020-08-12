import React, { Component } from "react";

const GameTableHead = props => {
  return (
    <thead>
      <tr>
        {props.headElements.map((el, index) => {
          return (
            <th scope="col" key={index}>
              {el}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default GameTableHead;
