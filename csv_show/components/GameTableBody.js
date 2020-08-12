import React, { Component } from "react";

const GameTableBody = props => {
  return (
    <tbody>
      {props.userData.map((data, index) => {
        return (
          <tr key={index}>
            <td>{data.Name}</td>
            <td>{data.Designation}</td>
            <td>{data.Country}</td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default GameTableBody;
