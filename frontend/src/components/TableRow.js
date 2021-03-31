import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class TableRow extends Component{
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }
  delete() {
    axios
      .delete("http://localhost:8000/api/items/" + this.props.obj.id)
      .then((response) => {
        window.location = "/";
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <tr>
        <td>{this.props.obj.id}</td>
        <td>{this.props.obj.title}</td>
        <td>{this.props.obj.description}</td>
        <td>
          <Link
            to={"/edit/" + this.props.obj.id}
            className="btn btn-primary"
          >Edit</Link>
        </td>
        <td>
          <button onClick={this.delete} className="btn btn-danger">Delete</button>
        </td>
      </tr>
    );
  }
}
