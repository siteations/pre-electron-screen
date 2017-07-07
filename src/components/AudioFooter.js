import React, { Component } from 'react';

// basic audio player pieces ...

import ReactAudioPlayer from 'react-audio-player';
import trackTitles from '../sound/tracks.js';
import * as track0 from '../sound/AForest.mp3';
import * as track1 from '../sound/PaleSkin.mp3';
import * as track2 from '../sound/ElevenfeatMohna.mp3';
import * as track3 from '../sound/Ash&snow.mp3';

const soundFiles = [track0, track1, track2, track3];

class AudioFooter extends Component {
	constructor(props) {
        super(props);
        this.state = {
        	trackId : 0,
          trackMax : soundFiles.length-1,
        }
  }

  switchTrack(e){
  	e.preventDefault();
  	let last = this.state.trackId;
  	var next = last + 1;
  	(next>this.state.trackMax)? next=0 : next = last + 1;
		this.setState({trackId : next});
  }


  render() {

    return (
      <div>
      <ReactAudioPlayer
        src={soundFiles[this.state.trackId]}
        autoPlay="true"
        onEnded={e=>this.switchTrack(e)}
      />
      <p style={{marginBottom: '0px'}}><span className="footTitle">Religious Playlist </span> now playing <span className="appareo" style={{fontSize: '1.25rem'}}><em>{trackTitles[this.state.trackId].title}</em></span></p>
      </div>
    );
  }
}

export default AudioFooter;
