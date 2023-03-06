import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";

export default class MenuTableRow extends Component {
  constructor(props) {
    super(props);
    this.deleteEntry = this.deleteEntry.bind(this);
  }

  deleteEntry() {
    axios
      .delete("http://localhost:5000/employee/delete/" + this.props.obj._id)
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Entry deleted Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(function () {
          window.location.reload(1);
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <tr>
        <td>{this.props.obj.name}</td>
        <td>{this.props.obj.empid}</td>
        <td>{this.props.obj.designation}</td>
        <td>{this.props.obj.emptype}</td>
        <td>{this.props.obj.experience}</td>
        <td>
          <Link to={"/editentry/" + this.props.obj._id}>
            <Button size="sm" variant="warning">
              Edit
            </Button>
            {""}
          </Link>
        </td>
        <td>
          <Button onClick={this.deleteEntry} size="sm" variant="danger">
            Delete
          </Button>
        </td>
      </tr>
    );
  }
}
