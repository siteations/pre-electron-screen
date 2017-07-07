import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';


export const LayerListCol = (props) => {
	let action = props.action;
	let list = props.list;
	let open = props.open;

	    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onTouchTap={action.hideInfo}
        className = {'appareo'}
      />,
      <FlatButton
        label="Email"
        primary={true}
        onTouchTap={action.hideInfo}
        className = {'appareo'}
      />,
      <FlatButton
        label="Print"
        primary={true}
        onTouchTap={action.hideInfo}
        className = {'appareo'}
      />,

    ];

	return (
	  <div className="col-xs-1 hidden-md hidden-sm hidden-xs" >
	   			<div className="row m20">
						<h3 className="m20">Select Texts</h3>
							<button className={`btn btn-default texta m20`} role="button" onTouchTap={action.showInfo}> Show List </button>
							<button className={`btn btn-default texta m20`} role="button" onTouchTap={action.clearInfo}> Clear List </button>
				</div>
					<Dialog
			          actions={actions}
			          modal={true}
			          open={open}
			          autoScrollBodyContent={true}
			          contentStyle={{width:'70%', maxWidth: 'none' }}
			        >
			        <h3 className="m20">The Great Polyglot: Texts of Interest</h3>
			        <ul>
							{list &&
								list.map(item => <li className="black" > {item.text} <a href={item.link} target="blank"><em>catalog link </em></a> (if available) </li>)
							}
							{list.length<1 &&
								<li>select panel text to get started</li>
							}
							</ul>
			        </Dialog>
	   </div>
		)
};


export const LayerToggleCol = (props) => {
	let action = props.action;
	let all = props.all;

	return (
	  <div className="col-xs-1 hidden-md hidden-sm hidden-xs" >
	   			<div className="row m20">
						<h3 className="m20">Toggle Markup</h3>

							<button className={`btn btn-default btn-block texta m20`} role="button" onTouchTap={all}>
							<span className="fa fa-circle red fa-sm"> </span> <span className="fa fa-circle blue fa-sm"> </span> <span className="fa fa-circle yellow fa-sm"> </span><br/> All Layers
							</button>

							<button className={`btn btn-default btn-block texta  m20`} role="button" onTouchTap={action} value='sources' >
								<span className="fa fa-circle red fa-sm"> </span><br/> Sources
							</button>

							<button className={`btn btn-default btn-block texta  m20`} role="button" onTouchTap={action} value='translations' >
								<span className="fa fa-circle blue fa-sm"> </span><br/> Translations
							</button>

							<button className={`btn btn-default btn-block texta  m20`} role="button" onTouchTap={action} value='tools' >
								<span className="fa fa-circle yellow fa-sm"> </span><br/> Tools
							</button>

					</div>
	   </div>
		)
};

export const LayerToggle = (props) => {
	let action = props.action;
	let all = props.all;

	return (
	        <div className="row text-center visible-md visible-sm visible-xs">
						<h3> ~ Toggle Annotations ~ </h3>
						<div className="col-xs-3">
							<button className={`btn btn-default texta `} role="button" onTouchTap={e=>this.toggleAll(e)}>
							<span className="fa fa-circle red"> </span> <span className="fa fa-circle blue"> </span> <span className="fa fa-circle green"> </span><br/> All Layers
							</button>
						</div>
						<div className="col-xs-3 text-center">
							<button className={`btn btn-default texta `} role="button" onTouchTap={e=>this.toggleLayer(e)} value='sources' >
								<span className="fa fa-circle red"> </span><br/> Sources
							</button>
						</div>
						<div className="col-xs-3 text-center">
							<button className={`btn btn-default texta `} role="button" onTouchTap={e=>this.toggleLayer(e)} value='translations' >
								<span className="fa fa-circle blue"> </span><br/> Translations
							</button>
						</div>
						<div className="col-xs-3 text-center">
							<button className={`btn btn-default texta `} role="button" onTouchTap={e=>this.toggleLayer(e)} value='tools' >
								<span className="fa fa-circle yellow"> </span><br/> Tools
							</button>
						</div>
					</div>
		)
};


