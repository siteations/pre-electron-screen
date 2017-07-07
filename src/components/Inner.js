import React, { Component } from 'react';

class InnerSVG extends Component {
	constructor(props) {
    super(props);
    this.state = {
        style1: {'fillOpacity': .25, 'blendMode': 'multiply' },
        style0: {'fillOpacity': .02 },
        idCurr: '',

    };
    this.styleUpdate = this.styleUpdate.bind(this);
    this.styleOld = this.styleOld.bind(this);
  }

  styleUpdate(e){
    let id = e.target.id;
    this.setState({idCurr: id});
  }

  styleOld(e){
    this.setState({idCurr: ''});
  }

  render() {
    let dots = this.props.overlays;
    let key = this.props.select;
    let placeholder;

    (key==='london'|| key ==='antwerp')? placeholder= true : placeholder= false;

    let ratio = +this.props.w / 3000; //for size sonversions... adjust after zoom.

    console.log('sites to add ', dots, ratio);

	return (
	     <g>
        {key ==='antwerp' &&
          <g>
	      	<image width={this.props.w} height={this.props.h} x={0} y={0} xlinkHref="./London-Header.jpg" />
          <text x="50" y="50"> placeholder image </text>
          <text x="50" y="75"> placeholder annotation position </text>
          <text x="50" y="100"> modal window positon randomized </text>
          <g>
          {dots &&
            dots.map((site, i)=>{ //placeholder until identified in text
              return <circle className={site.category} cx="100" cy={i*40+150} r="15" onTouchTap={e=>this.props.on(e)} key={site.id}  id={site.id} label={site.type} value='55%' />
            })
          }
          </g>
          </g>
        }
        {key !== 'antwerp' &&
          <g>
          <image width={this.props.w} height={this.props.h} x={0} y={0} xlinkHref={(key!=='london')? "./computensian_3000.jpg": "./london322_3000.jpg"} />
          <g>
          {dots &&
            dots.map((site, i)=>{ //placeholder until identified in text
              return (
                <g key={site.id} >
                <rect className={site.rect.stroke} x={site.rect.x*ratio} y={site.rect.y*ratio}  width={site.rect.width*ratio} height={site.rect.height*ratio} id={site.id} value={site.pos} label={site.type} onTouchTap={e=>this.props.on(e)} onMouseOver={this.styleUpdate} onMouseOut={this.styleOld} style={(site.id===this.state.idCurr)? this.state.style1 : this.state.style0} />
                <circle className={site.category} cx={site.x*ratio} cy={site.y*ratio} r="8" onTouchTap={e=>this.props.on(e)} id={site.id} value={site.pos} label={site.type} />
                </g>
                )
            })
          }
          </g>
          </g>
        }
	    </g>
	        )
	}
};

export default InnerSVG;
