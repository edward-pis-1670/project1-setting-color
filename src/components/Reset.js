import React, { Component } from "react";
class Reset extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onReset = this.onReset.bind(this);
  }
  onReset() {
    this.props.onSettingDefault(true);
  }
  render() {
    return (
      <button type="button" className="btn btn-primary" onClick={this.onReset}>
        reset
      </button>
    );
  }
}

export default Reset;
