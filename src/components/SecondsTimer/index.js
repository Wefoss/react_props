import React, { Component } from "react";

class SecondsTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(0, 0, 0, 0, 0, 0, 0),
    };
    this.timeoutId = null;
  }

  tick = () => {
    this.setState((state) => {
      const { time } = state;
      const updateTime = new Date(time.getTime() + 1000);
      return { time: updateTime };
    });
    
  };

  start = () => {
    if (!this.timeoutId) {
      this.timeoutId = setTimeout(this.tick, 1000);
    }
  };

  stop = () => {
    clearTimeout(this.timeoutId);
    this.timeoutId = null;
  };

  reset = () => {
    this.stop();
    this.setState({ time: new Date(0, 0, 0, 0, 0, 0, 0) });
  };

  componentDidUpdate() {
    if(this.timeoutId) {
      setTimeout(this.tick, 1000);
    }
    
  }

   componentWillUnmount() {
    this.stop();
  }

  render() {
    const { time } = this.state;
    return (
      <div>
        <h2>{time.toLocaleTimeString("en-GB")}</h2>
        <button className="btn" onClick={this.start}>
          start
        </button>
        <button className="btn" onClick={this.stop}>
          stop
        </button>
        <button className="btn" onClick={this.reset}>
          reset
        </button>
      </div>
    );
  }
}

export default SecondsTimer;
