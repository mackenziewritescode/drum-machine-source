import React from "react";

class Volume extends React.Component {
  constructor(props) {
    super(props);
    this.volumeChange = this.volumeChange.bind(this);
  }

  volumeChange(e) {
    this.props.handleVolume(e.target.value);
  }

  render() {
    return (
      <div id="volume">
        <h3 className="drum-header">Volume</h3>
        <input
          id="volumeSlider"
          type="range"
          min={0}
          max={100}
          value={this.props.volumeVal}
          onChange={this.volumeChange}
        />
      </div>
    );
  }
}

export default Volume;
