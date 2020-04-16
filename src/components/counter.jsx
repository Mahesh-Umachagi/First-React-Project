import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div className="container">
        <span style={{ fontSize: 35 }} className="badge badge-primary m-2">
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-md"
        >
          Increment
        </button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
