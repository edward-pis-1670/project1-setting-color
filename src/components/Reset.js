import React, { Component } from "react";
class Reset extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <button type="button" className="btn btn-primary">
        reset
      </button>
    );
  }
}

export default Reset;
