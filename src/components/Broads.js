import React, { Component } from 'react';

//import body from '../broadsides/Broadsides-Intro.js'

class Broads extends Component {
	constructor(props) {
        super(props);
        this.state = {
          height: '700px',
        }
  }

  onComponentDidMount(){

  }

  render() {

    // let obj = {
    //   __html: body
    // };

    return (
      <div>
      <iFrame src="./broad/Broadsides-Index.html" width='110%' height={this.state.height} style={{margin: '-5vw', padding: '0', position: 'fixed', top:'4.95vw'}}/>
      really?
      </div>
    );
  }
}

export default Broads;
