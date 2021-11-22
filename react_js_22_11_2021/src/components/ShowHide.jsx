import React from "react";

class ShowHide extends React.Component {
  constructor() {
    super();
    this.state = { show: "block" };
  }
  change = () => {
    this.setState({ show: this.state.show == "block" ? "none" : "block" });
  };

  render() {
    return (
      <div style={{ textAlign: "center", padding: "10px" }}>
        <button onClick={this.change}>Show & Hide </button>
        <p style={{ display: this.state.show }}>{this.props.text}</p>
      </div>
    );
  }
}
export default ShowHide;
