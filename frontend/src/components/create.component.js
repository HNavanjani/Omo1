import React, { Component } from "react";
import axios from "axios";

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: "",
      description: "",
    };
  }

  

  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }
  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      title: this.state.title,
      description: this.state.description,
    };
    axios
      .post("http://localhost:8000/api/items/", obj)
      .then((response) => {
        console.log(response.data);
        window.location=("/")
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title</label>
            <input
              onChange={this.onChangeTitle}
              value={this.state.title}
            ></input>
            <label>Description</label>
            <input
              onChange={this.onChangeDescription}
              value={this.state.description}
            ></input>
            <input
              type="submit"
              value="Save"
              className="btn btn-primary"
            ></input>
          </div>
        </form>
      </div>
    );
  }
}
