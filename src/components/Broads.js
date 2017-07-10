import React, { Component } from 'react';
import {indexMenu, indexSubpages} from '../copy/menu';

//import body from '../broadsides/Broadsides-Intro.js'

class Frame extends Component {
	constructor(props) {
        super(props);
        this.state = {
          height: '700',
          paths: indexSubpages[this.props.info.location.pathname], // list based on page
        }
        this.handleResize=this.handleResize.bind(this);
  }

    componentDidMount() {
          this.setState({height: window.innerHeight-55});
          window.addEventListener('resize', this.handleResize);
    }

    handleResize(e) {
        this.setState({
        height: window.innerHeight-55,
        });
    }

    getCurrent(e){

      var browser = document.querySelector('iframe').contentWindow.location.pathname;
      var location = this.state.paths.filter(path=>{
            return path.src.substring(1) === browser;
            })[0];

      console.log(this.props.info.location.hash);

      //not actually necessary here...

      //this.setState({src: browser});

    }

  render() {

    if (this.props.info.location.hash){
            var location = this.state.paths.filter(path=>{
            return path.hash === this.props.info.location.hash;
            })[0];
            console.log(this.props.info.location.hash, location.src);
          } else {
            var location = this.state.paths.filter(path=>{
            return path.push === this.props.info.location.pathname;
            })[0];
          }
    let src = location.src;

    return (
      <div>
      <iFrame src={src} width='102%' className="text-center" onLoad={e=>this.getCurrent(e)} height={`${this.state.height}px`} style={{margin: '-18px', padding: '0', position: 'fixed', top:'16px'}}/>
      really?
      </div>
    );
  }
}

export default Frame;
