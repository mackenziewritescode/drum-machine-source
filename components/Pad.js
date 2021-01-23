import React from "react";

class Pad extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    this.props.handlePad(id);
  }

  render() {
    const item = this.props.item;

    return (
      <div
        className="pad"
        id={item.id}
        onMouseDown={() => this.handleClick(item.id)}
      >
        <p className="letter">{item.letter}</p>
        <p>{item.name}</p>
      </div>
    );
  }
}

export default Pad;
