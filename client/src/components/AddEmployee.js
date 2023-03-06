import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Swal from "sweetalert2";

export default class AddEmployee extends Component {
  constructor(props) {
    super(props);

    this.onChangeEmployeeName = this.onChangeEmployeeName.bind(this);
    this.onChangeEmployeeID = this.onChangeEmployeeID.bind(this);
    this.onChangeEmployeeDes = this.onChangeEmployeeDes.bind(this);
    this.onChangeEmployeeType = this.onChangeEmployeeType.bind(this);
    this.onChangeEmployeeExp = this.onChangeEmployeeExp.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      nameError: "",
      empid: "",
      empidError: "",
      designation: "",
      designationError: "",
      emptype: "",
      emptypeError: "",
      exp: "",
      expError: "",
    };
  }

  onChangeEmployeeName(e) {
    this.setState({ name: e.target.value });
  }

  onChangeEmployeeID(e) {
    this.setState({ empid: e.target.value });
  }

  onChangeEmployeeDes(e) {
    this.setState({ designation: e.target.value });
  }

  onChangeEmployeeType(e) {
    this.setState({ emptype: e.target.value });
  }

  onChangeEmployeeExp(e) {
    this.setState({ experience: e.target.value });
  }

  validate = () => {
    let isError = false;
    const errors = {
      nameError: "",
      empidError: "",
      designationError: "",
      emptypeError: "",
      expError: "",
    };

    if (this.state.name.length < 1) {
      isError = true;
      errors.itemError = "This is a required field !";
    }

    if (this.state.empid.length < 1) {
      isError = true;
      errors.empidError = "This is a required field !";
    }

    if (this.state.designation.length < 1) {
      isError = true;
      errors.designationError = "This is a required field !";
    }

    if (this.state.emptype.length < 1) {
      isError = true;
      errors.emptypeError = "Thisis a required field !";
    }

    if (this.state.experience.length < 1) {
      isError = true;
      errors.expError = "This is a required field !";
    }

    this.setState({
      ...this.state,
      ...errors,
    });
    return isError;
  };

  onSubmit(e) {
    e.preventDefault();
    const err = this.validate();
    if (!err) {
      const empObject = {
        name: this.state.name,
        empid: this.state.empid,
        designation: this.state.designation,
        emptype: this.state.emptype,
        experience: this.state.experience,
      };

      axios
        .post("http://localhost:5000/employee/add", empObject)
        .then((res) => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Entry Added Successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        });

      this.props.history.push("/fetch");
      setTimeout(function () {
        window.location.reload(1);
      }, 1000);
      this.setState({
        name: "",
        empid: "",
        designation: "",
        emptype: "",
        exp: "",
        expError: "",
      });
    }
  }
  render() {
    return (
      <div className="container mt-5 pt-5">
        <div className="form-wrapper">
          <Form onSubmit={this.onSubmit}>
            <Form.Group controlId="Name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={this.state.name}
                onChange={this.onChangeEmployeeName}
              />
              <div style={{ fontSize: 12, color: "red" }}>
                {this.state.nameError}
              </div>
            </Form.Group>

            <Form.Group controlId="Id">
              <Form.Label>ID</Form.Label>
              <Form.Control
                type="text"
                value={this.state.empid}
                onChange={this.onChangeEmployeeID}
              />
              <div style={{ fontSize: 12, color: "red" }}>
                {this.state.empidError}
              </div>
            </Form.Group>

            <Form.Group controlId="Designation">
              <Form.Label>Designation</Form.Label>
              <Form.Control
                type="text"
                value={this.state.designation}
                onChange={this.onChangeEmployeeDes}
              />
              <div style={{ fontSize: 12, color: "red" }}>
                {this.state.designationError}
              </div>
            </Form.Group>

            <Form.Group controlId="Type">
              <Form.Label>Type</Form.Label>
              <Form.Control
                type="text"
                value={this.state.emptype}
                onChange={this.onChangeEmployeeType}
              />
              <div style={{ fontSize: 12, color: "red" }}>
                {this.state.emptypeError}
              </div>
            </Form.Group>

            <Form.Group controlId="Experience">
              <Form.Label>Experience</Form.Label>
              <Form.Control
                type="text"
                value={this.state.experience}
                onChange={this.onChangeEmployeeExp}
              />
              <div style={{ fontSize: 12, color: "red" }}>
                {this.state.expError}
              </div>
            </Form.Group>
            <div className="addButton">
              <br></br>
              <Button type="submit" size="m" variant="warning" block="block">
                Add
              </Button>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}
