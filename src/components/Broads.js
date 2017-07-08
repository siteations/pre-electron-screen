import React, { Component } from 'react';

//import body from '../broadsides/Broadsides-Intro.js'

class Frame extends Component {
	constructor(props) {
        super(props);
        this.state = {
          height: '700',
        }
  }

    componentDidMount() {
          this.setState({height: window.innerHeight-58});

    }

  render() {

    // let obj = {
    //   __html: body
    // };

    return (
      <div>
      <iFrame src="./broad/Broadsides-Index.html" width='110%' height={`${this.state.height}px`} style={{margin: '-5vw', padding: '0', position: 'fixed', top:'4.95vw'}}/>
      really?
      </div>
    );
  }
}

export default Frame;
