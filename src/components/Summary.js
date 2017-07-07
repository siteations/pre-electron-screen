import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const Summary = props => {
	let content = props.content;
	let show = props.show;
	let open = props.open;
	let close = props.close;

	const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onTouchTap={close}
        className = {'appareo'}
      />,
  ];


	return (
	        <div className="col-md-4">
	        	<div className="bshadowedlite layerwhite fullheight">
		          <h2 className="underline">{content.title}</h2>
		          <span>
		          	<img className="thumb25" src={content.src1} />
		          	<img className="thumb25" src={content.src2} />
		          	<img className="thumb25" src={content.src3} />
		          	<img className="thumb25" src={content.src4} />
		          </span>
		          <p className="plarge">{content.body}</p>

		          <br/>
							<Dialog
			          actions={actions}
			          modal={true}
			          open={show}
			          contentStyle={{width:'70%', maxWidth: 'none' }}
			          autoScrollBodyContent={true}
			        >
			        <div className="row">
			        	<div className="col-md-5 m20">
			        	</div>
			        	<div className="col-md-6">
			        		<h2 className="black underline">Text to Come?</h2>
			          	{content.more}
			          </div>
			        </div>
			        </Dialog>
		          </div>
		        </div>
	        )
}

export default Summary;
