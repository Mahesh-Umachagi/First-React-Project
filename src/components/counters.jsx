import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  state = {
    counters: [{ id: 1, value: 0 }]
  };
  render() {
    return (
      <div>
        <h1>First React Project</h1>
        {this.state.counters.map(counter => (
          <Counter key={counter.id} />
        ))}
      </div>
    );
  }
}

export default Counters;
