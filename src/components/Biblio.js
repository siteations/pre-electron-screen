import React, { Component } from 'react';
import Summary from'./Summary';
import scrollToElement from 'scroll-to-element';
import {eachPanel, sourceList, fullSourcePrimary, fullSourceSecondary, sourceListBib} from '../copy/panels.js';

import {bib} from '../copy/content.js';


class Biblio extends Component {
	constructor(props) {
        super(props);
				this.state = {
					open: false,
				};
				this.showInfo=this.showInfo.bind(this);
				this.hideInfo=this.hideInfo.bind(this);
		}

	showInfo(){

  	this.setState({open: true});
  }

  hideInfo(){
  	this.setState({open: false});
  }

  render() {
  	var list=this.props.list

	return (
	    <div className="row hidden-print">
			<div className="col-xs-10 col-xs-offset-1" id="biblio">
				<div className="page bshadowed layer1" >

					<div className="row">
						<div className="col-md-3 text-center">
							<button className={`btn btn-default texta `} href="" role="button" onTouchTap="">Print Collected Texts</button>
						</div>
						<div className="col-md-5 text-center">
							<h2 className="underline">Bibliography for Polyglot Resource</h2>
						</div>
						<div className="col-md-3 text-center">
							<button className={`btn btn-default texta `} href="" role="button" onTouchTap="">Print Bibliography</button>
						</div>
					</div>
					<div className="row ">
						<div className="col-md-8 col-md-offset-2">
						<h4 className="m20 "><span style={{fontSize:'1.25em',lineHeight: '1.5em'}}>This resource is meant to be illustrative, not comprehensive. The resources shown here represent only the tip of the iceberg of the historical and cultural significance of the great polyglot Bibles. The works listed here will serve as a starting point for a deeper investigation of these great books and their impact.</span></h4>
						</div>
					</div>

					<div className="row ">
						<div className="col-md-8 col-md-offset-2">
						<ul>
						{bib &&
							bib.map(entry=> <li className="plarge "><span className="bold">{entry.author}</span>{entry.article}<em>{entry.title}</em>{entry.location}<br/><br/></li>)
						}
						</ul>
						</div>
					</div>

					<div className="row ">
						<div className="col-md-8 col-md-offset-2">
							<h2 className="m20 text-center underline">Primary Sources at the Newberry</h2>
			        <ul>
							{sourceList &&
								sourceList.map(item => {
									if (item.link !== null){
                		return <li className="plarge" ><span className="bold">{item.creator}</span><em> {item.textTitle}</em> {item.place} {item.year} <br/><ul><li><a href={item.link} target="_blank" className="notBold">catalog link</a></li><li><a href={item.link} target="_blank" className="notBold">internet archive image</a></li></ul><br/></li>
                	} else {
                		return <li className="plarge" > <span className="bold">{item.creator}</span><em> {item.textTitle}</em> {item.place} {item.year}<br/></li>
                	}
                })
							}
							</ul>
							<br/>
						</div>
					</div>
			  </div>
		  </div>
		  </div>
	        )
	}
};

export default Biblio;
