import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.counter.value
  };

  handleIncrement = product => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div className="container">
        <span style={{ fontSize: 35 }} className="badge badge-primary m-2">
          {this.formatCount()}
        </span>
        <button
          onClick={product => this.handleIncrement(product)}
          className="btn btn-secondary btn-md"
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
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
