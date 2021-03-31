import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import TableRow from "./TableRow";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8000/api/items")
      .then((response) => {
        this.setState({ items: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  tabRow() {
    return this.state.items.map(function (object, i) {
      return <TableRow obj={object} key={i} />;
    });
  }

  render() {
    return (
      <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{this.tabRow()}</tbody>
      </table>
      <Link to={"/create"} className="btn btn-success">Add New</Link>
      </div>
    );
  }
}
