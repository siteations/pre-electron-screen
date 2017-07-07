import React, { Component } from 'react';
import {imagePanels} from '../copy/content.js';
import {eachPanel, sourceList, fullSourcePrimary, fullSourceSecondary} from '../copy/panels.js';
import InnerSVG from './Inner.js';
import PanelContents from './PanelContents.js';
import { LayerToggleCol, LayerToggle, LayerListCol } from './LayerToggle.js';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class Poly extends Component {
		constructor(props) {
        super(props);
				this.state = {
					size:[0,0],
					open: false,
					open2: false,
					position: '5%',
					element: ' ',
					sources: true,
					translations: true,
					tools: true,
					list: [],
					mag:false,
				};
				this.showInfo=this.showInfo.bind(this);
				this.hideInfo=this.hideInfo.bind(this);
				this.showInfo2=this.showInfo2.bind(this);
				this.hideInfo2=this.hideInfo2.bind(this);
				this.listAdd = this.listAdd.bind(this);
				this.toggleAll = this.toggleAll.bind(this);
				this.toggleLayer=this.toggleLayer.bind(this);
		}

  componentDidMount() {
      window.addEventListener("resize", this.refSizeP);
      this.refSize();
  }

  refSize(e){
  	if (e){e.preventDefault();};
  	let sele = window.document.getElementById('size').attributes[0].ownerElement;
  	let width = sele.clientWidth;
  	let height = sele.clientHeight;
  	this.setState({size:[width, height]});
  }

  showInfo(e){
  	console.log(e.target.id);
  	this.setState({open: true, element: e.target.id, position: e.target.attributes.value.value });
  }

  hideInfo(){
  	this.setState({open: false});
  }

  showInfo2(){
  	console.log('should show');
  	this.setState({open2: true});
  }

  hideInfo2(e){
  	this.setState({open2: false});
  }

  toggleLayer(e){
  	let type = e.target.value, curr = !this.state[type];
  	let obj={};
  	obj[type] = curr;
  	this.setState(obj);
  	console.log(this.state);
  }

  toggleAll(e){
  	let obj = {};
  	obj.sources = !this.state.sources;
  	obj.translations = !this.state.sources;
  	obj.tools = !this.state.sources;
  	this.setState(obj);
  	console.log(this.state);
  }

  listAdd(e){
  	let item = e.target.value; //this is the id
  	let sourceObj = sourceList.filter(source=> source.id===item)[0];
  	let arr = this.state.list;
  	let arr2 = arr.concat(fullSourcePrimary(sourceObj), fullSourceSecondary(sourceObj));
  	this.setState({list:arr2});
  	console.log(this.state.list, arr2);
  }

  render() {

  	var hash = this.props.info.location.hash;
  	if (hash !== '#inter-Comp' && hash !== '#inter-Antwerp' && hash !== '#inter-London' ){hash='#inter-Comp'};
  	var id=hash.replace('#','');
  	var key = id.split('-')[1];
  	var data = {}, panel ={}, overlays = [], details = [];

  	if (key){
  		data = imagePanels[key.toLowerCase()]; //image underlays/points for svg.
  		panel = eachPanel[key.toLowerCase()];
  		if (this.state.sources) { overlays = overlays.concat(data.sources); details = details.concat(panel.sources) };
  		if (this.state.translations) { overlays = overlays.concat(data.translations); details = details.concat(panel.translations) };
  		if (this.state.tools) { overlays = overlays.concat(data.tools); details = details.concat(panel.tools) };
  	};

  	var element={};
  	if (this.state.element !==''){
  		var elementArr = details.filter(detail => detail.id === this.state.element);
  		(elementArr.length>0)? element = elementArr[0] : element = {};
  	}

    console.log('at poly ', overlays, details, element, this.state);

    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onTouchTap={this.hideInfo}
        className = {'appareo'}
      />,
    ];

	return (
	   <div className="row hidden-print">
	   <div className="col-xs-1" >
	   	<LayerListCol list={this.state.list} open={this.state.open2} action={{hideInfo: this.hideInfo2, showInfo:this.showInfo2}} />
	   </div>
	   <div className="col-xs-10" id={id} ref="sizeP" >
				<div className="page bshadowed m20 layer1" id='size' >
					<div className="row">
						<div className="col-md-4 text-center">
							<button className={`btn btn-default texta `} href="" role="button" onTouchTap="">Magnify View</button>
						</div>
						<div className="col-md-4 text-center">
							<h2 className="underline">{data.title}</h2>
						</div>
						<div className="col-md-4 text-center">
							<button className={`btn btn-default texta `} href="" role="button" onTouchTap="">Interaction Guide (Annotated)</button>
						</div>
					</div>
					<div className="text-center center-block" style={{borderRadius: '5px', width:`${this.state.size[0]*.9}` }}>
						<svg width={this.state.size[0]*.9} height={this.state.size[0]*.9*.69} viewBox={`0 0 ${this.state.size[0]*.9} ${this.state.size[0]*.9*.69}`}>
							<InnerSVG w={this.state.size[0]*.9} h={this.state.size[0]*.9*.69} overlays={overlays} details={details} on={this.showInfo} select={key.toLowerCase()} />
						</svg>
						<Dialog
			          actions={actions}
			          modal={true}
			          open={this.state.open}
			          autoScrollBodyContent={true}
			          contentStyle={{width:'40%', maxWidth: 'none', marginLeft: `${this.state.position}` }}
			        >
			          <PanelContents element={element} action={this.listAdd}/>
			        </Dialog>
					</div>
					<LayerToggle all={this.toggleAll} action={this.toggleLayer} />

					<div className="row center-block text-center m20">
					  	<span className="glyphicon glyphicon-chevron-down down" onTouchTap={this.jumpToHash}></span>
					 </div>

					<div className="row visible-print-block">
						<h3 className="m20">The Great Polyglot: Texts of Interest</h3>
				        <ul>
								{this.state.list &&
									this.state.list.map(item => <li className="black" > {item.text} <em>catalog link: </em><a href={item.link} target="blank">{item.link} </a></li>)
								}
								</ul>
					</div>
				</div>
		</div>

		<LayerToggleCol all={this.toggleAll} action={this.toggleLayer} />
	</div>
	        )
	}
};

export default Poly;
