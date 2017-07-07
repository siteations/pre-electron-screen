import React, { Component } from 'react';
import Summary from'./Summary';
import scrollToElement from 'scroll-to-element';

import {summaries, introParagraph} from '../copy/content.js';

class IntroExhib extends Component {
	constructor(props) {
        super(props);
				this.state = {
					open: false,
				};
				this.showInfo=this.showInfo.bind(this);
				this.hideInfo=this.hideInfo.bind(this);
		}

	showInfo(){
  	//console.log(e.target.id);
  	this.setState({open: true});
  }

  hideInfo(){
  	this.setState({open: false});
  }


	jumpToHash = () => {
    const hash = '#introPoly';
    this.props.info.history.push(hash);

    if (hash) {
      scrollToElement(hash, { offset: -120 });
    }
  }

  render() {

	return (
	    <div className="row hidden-print">
			<div className="col-xs-10 col-xs-offset-1 pre-jumbotron" id="introExhib">
				<div className="page bshadowed layer1" >
					<div className="jumbotron">
			      <div className="text-center">
			        <h1 className="white pjheader">Cathedrals of Print</h1>
			        <h3 className="white">Exploring the Great Polyglots, 1502-1657</h3><br/>
			        <p className="white">Discover the sources, innovations, and uses of these monuments<br/> to early modern devotion, scholarship, and technical skill.</p>
			      </div>
			    </div>
			    <div className="row">
			        <div className="col-md-8 col-md-offset-2">
			        {introParagraph &&
			        	introParagraph.map(para => {
			        		let spl = para.indexOf('.')+ 1;
			        		let lead = para.substring(0,spl), body=para.substring(spl);

			        		return (<div>
			        		        <h4 className="m20 "><span style={{fontSize:'1.25em',lineHeight: '1.5em'}}>{lead} {body}</span></h4>
			        		        <p className="plarge"></p>
			        		        <br/>
			        		        </div>
			        		        )
			        	})
			        }
			        </div>
			    </div>
			    <br/>
			    <div className="row">
			    	<Summary content={summaries.sources} />
			    	<Summary content={summaries.translations} />
			    	<Summary content={summaries.tools} />
			     </div>
					  <div className="row center-block text-center m20">
					  	<span className="glyphicon glyphicon-chevron-down down" onTouchTap={this.jumpToHash}></span>
					  </div>
			  </div>
		  </div>
		  </div>
	        )
	}
};

export default IntroExhib;
