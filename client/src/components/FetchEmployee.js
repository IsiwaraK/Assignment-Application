import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import MenuTableRow from "./MenuTableRow";

export default class FetchEmployee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      entries: [],
    };
  }

  componentDidMount() {
    this.retrieveEntries();
  }

  retrieveEntries() {
    axios.get("http://localhost:5000/employee/display").then((res) => {
      this.setState({
        entries: res.data,
      });

      console.log(this.state.entries);
    });
  }

  DataTable() {
    return this.state.entries.map((entries, i) => {
      return <MenuTableRow obj={entries} key={i} />;
    });
  }

  render() {
    return (
      <div className="container">
        <div className="retrdisplay">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>ID</th>
                <th>Designation</th>
                <th>Type</th>
                <th>Experience</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>{this.DataTable()}</tbody>
          </table>
          <div className="repocontainer">
            <Link to={"/add"}>
              <Button size="m" variant="warning">
                Add
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
