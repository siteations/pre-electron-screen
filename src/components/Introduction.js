import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class Introduction extends Component {
	constructor(props) {
        super(props);
				this.state = {
			    open: false,
			    tab: 'none',
			  };
	}

	componentDidMount(){
			this.setState({tab: this.props.content.tab});
	}

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render(){
	let content = this.props.content;

	const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onTouchTap={this.handleClose}
        className = {'appareo'}
      />,
    ];

	return (
	        <div className="col-md-4" >
	        	<div className={`bshadowedlite layerwhite fullheight2`}>
		          <h2 className="underline">{content.title}</h2>
		          <h5>{content.subtitle}</h5>
		          <h4>{content.subtitle2}</h4>
		          <span className="center-block">
		          	<img src={content.src1} style={{ maxWidth: '70%', maxHeight: '200px', margin: '2%' , borderRadius: '5px'}} />

		          </span>
		          <p className="plarge">{content.p1}</p>
		          <button className={`btn btn-default texta `} href="" role="button" onTouchTap={this.handleOpen}>Learn more »</button>
		          <br/>
		          <div className="center-block text-center">
					  	<span className="glyphicon glyphicon-chevron-down down" onTouchTap={e=>this.props.action(`#inter-${content.tab}`)}></span>
					  	</div>

		          <Dialog
			          actions={actions}
			          modal={true}
			          open={this.state.open}
			          contentStyle={{width:'70%', maxWidth: 'none' }}
			          autoScrollBodyContent={true}
			        >
			        <div className="row">
			        	<div className="col-md-5 m20">
			        		<img src={content.src1} style={{width:'90%', margin: '2%' , borderRadius: '5px'}} />
			        	</div>
			        	<div className="col-md-6">
			        		<h2 className="black underline">An Overview: {content.title}</h2>
			          	<p className="plarge">{content.more}</p>
			          </div>
			        </div>
			        </Dialog>

		          </div>
		        </div>
	        )
	}
}

export default Introduction;
