import React, { Component } from "react";
import CsvParse from "@vtex/react-csv-parse";
import GameInfoTable from "./Containers/GameInfoTable";
import "./App.css";

class CsvShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      name: "",
      filteredData: [],
      filter: 0
    };
  }

  handleData = data => {
    this.setState({ data: data });
    this.setState({ filteredData: data });
    console.log(this.state.data[0]);
  };

  handleError = err => {
    this.setState({ data: err });
  };

  // onSearchChange = data => {
  //   this.setState({ data: data.Name });
  // };

  onSearchChange = event => {
    console.log(event.target.value);
    this.setState({ name: event.target.value });
    if(event.target.value != ""){
    const tableData = this.state.filteredData.filter(
      el => el.Name.includes(event.target.value)
    );
    if (tableData[0]) {
      this.setState({ filteredData: tableData });
      }
    }
    else{
      this.setState({ filteredData: this.state.data });
    }
    
    //console.log(tableData);
  };
 onSearchOut = event => {
    const wholeData = this.state.data;
    this.setState({ name: "" });
    console.log("empt");
    
    console.log(wholeData);
    this.setState({ filteredData: this.state.data });

  };

  onReset = event => {
    const tableData = this.state.data;
    this.setState({ name: ""});
    this.setState({ data: tableData }); 

    console.log(tableData);

  };

  render() {
    const keys = [
      "Name",
      "Designation",
      "Country"
    ];
    
    return (
    <div className="main-container container-fluid mt-4">
        <CsvParse
          keys={keys}
          onDataUploaded={this.handleData}
          onError={this.handleError}
          render={onChange => <input type="file" onChange={onChange} />} />
        <br />
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="Search By Name"
          value={this.state.name}
          onChange={e => this.onSearchChange(e)}
          
        />
        <button className="btn btn-primary mt-4" onClick={e => this.onSearchOut(e)}>Reset</button>
        <br />
        <br />
         <GameInfoTable itemList={this.state.filteredData} keys={keys} />
        
    </div>
      );
    }
  }
export default CsvShow;