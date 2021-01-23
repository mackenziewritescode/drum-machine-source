import React from "react";

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.handleTrackClick = this.handleTrackClick.bind(this);
  }

  handleTrackClick(id) {
    this.props.handleTrack(id);
  }

  render() {
    const item = this.props.item;
    const toggleColor =
      item.id === this.props.activeTrack ? { background: "#ceff73" } : null;

    return (
      <div className="track" onClick={() => this.handleTrackClick(item.id)}>
        <div className="trackToggle" style={toggleColor} />
        <p className="trackName">{this.props.item.name}</p>
      </div>
    );
  }
}

export default Track;
