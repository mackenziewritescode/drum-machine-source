import React, { Component } from "react";
import Volume from "./Volume";
import PadDisplay from "./PadDisplay";
import PadWrap from "./PadWrap";
import TrackPlayer from "./TrackPlayer";
import "../styles/DrumMachine.scss";
import padsArr from "./padsArr";
import { RiArrowGoBackLine } from "react-icons/ri";

// changes the color of the pad when activated. Duration specifies fade length.
function animatePad(id) {
  document
    .getElementById(id)
    .animate(
      [{ background: "#85f7ff" }, { background: "rgba(255, 255, 255, 0.5)" }],
      {
        duration: 400,
        iterations: 1,
      }
    );
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      activePad: "",
      activeTrack: "track0",
      playing: false,
      volumeVal: 100,
    };
    this.handlePad = this.handlePad.bind(this);
    this.handleKey = this.handleKey.bind(this);
    this.handleTrack = this.handleTrack.bind(this);
    this.handleVolume = this.handleVolume.bind(this);
  }

  componentDidMount() {
    document.title = "Beat Machine";

    // when a key is pressed, run handleKey()
    document.addEventListener("keydown", this.handleKey, false);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKey, false);
  }

  // if the key pressed corresponds to a pad, set state and activate pad
  handleKey(event) {
    for (let i = 0; i < padsArr.length; i++) {
      if (event.key === padsArr[i].letter) {
        let track = new Audio(padsArr[i].audio);
        track.play();
        this.setState({ activePad: padsArr[i].id });
        animatePad(this.state.activePad);
      }
    }
  }

  // if a pad is clicked, set state and activate pad
  handlePad(id) {
    let volumePercent = this.state.volumeVal / 100;
    this.setState({ activePad: id });
    animatePad(id);
    for (let i = 0; i < padsArr.length; i++) {
      if (padsArr[i].id === id) {
        let padAudio = new Audio(padsArr[i].audio);
        padAudio.volume = volumePercent;
        padAudio.play();
      }
    }
  }

  // tells the state if a track is playing or not
  handleTrack(id) {
    this.setState({ activeTrack: id });
    if (id === "track0") {
      this.setState({ playing: false });
    } else {
      this.setState({ playing: true });
    }
  }

  handleVolume(value) {
    this.setState({ volumeVal: value });
  }

  render() {
    return (
      <div id="drum-wrapper">
        <a id="drum-portfolio" href="http://www.sunkenworld.com/">
          <p id="drum-portfolio-text">
            <RiArrowGoBackLine /> Back to portfolio
          </p>
        </a>
        <div id="drumMachine">
          <PadWrap
            handlePad={this.handlePad}
            volumeVal={this.state.volumeVal}
          />
          <div id="controlWrap">
            <h2 id="title" className="drum-header">
              Beat Machine
            </h2>
            <TrackPlayer
              activeTrack={this.state.activeTrack}
              handleTrack={this.handleTrack}
              playing={this.state.playing}
              player={this.player}
              handlePlay={this.handlePlay}
              volumeVal={this.state.volumeVal}
            />
            <PadDisplay activePad={this.state.activePad} />
            <Volume
              volumeVal={this.state.volumeVal}
              handleVolume={this.handleVolume}
            />
            <audio ref={(ref) => (this.player = ref)} />
          </div>
        </div>
        <footer id="drum-footer">
          <p>
            This site was made by{" "}
            <a className="footer-link" href="http://www.sunkenworld.com/">
              Mackenzie Charlton
            </a>{" "}
            in 2020 with{" "}
            <a className="footer-link" href="https://reactjs.org">
              React
            </a>
            .
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
