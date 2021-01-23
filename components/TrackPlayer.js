import React from "react";
import Track from "./Track";
import tracksArr from "./tracksArr";

class TrackPlayer extends React.Component {
  componentDidUpdate(prevState) {
    let player = this.props.player;
    let volumePercent = this.props.volumeVal / 100;
    // This sets the player's audio to match the state's active track
    if (this.props.activeTrack !== prevState.activeTrack) {
      let track = "";
      switch (this.props.activeTrack) {
        case "track0":
          break;
        case "track1":
          track = tracksArr[1].audio;
          break;
        case "track2":
          track = tracksArr[2].audio;
          break;
        case "track3":
          track = tracksArr[3].audio;
          break;
        // !!!!!! not needed
        default:
          break;
      }
      // this plays the track and loops it
      if (track) {
        player.src = track;
        player.volume = volumePercent;
        player.play();
        player.loop = true;
      }
    }

    // !!!!!!! use && instead of nested if
    // This stops the track if "None" is selected
    if (this.props.playing !== prevState.playing) {
      if (this.props.playing === false) {
        player.pause();
      }
    }
    if (this.props.volumeVal !== prevState.volumeVal) {
      player.volume = volumePercent;
    }
  }

  render() {
    const tracks = tracksArr.map((item) => (
      <Track
        item={item}
        key={item.index}
        id={item.id}
        name={item.name}
        audio={item.audio}
        activeTrack={this.props.activeTrack}
        handleTrack={this.props.handleTrack}
      />
    ));
    return (
      <div id="trackPlayer">
        <h3 className="drum-header" id="trackTitle">
          Background Track
        </h3>
        {tracks}
      </div>
    );
  }
}

export default TrackPlayer;
