import React, { Component } from 'react';


class ImageSlider extends Component {
	constructor(props) {
        super(props);
        this.state = {
        	active : 0,
          images : this.props.images.length,
        }
  }

  switchImg(e){
  	let ind = +this.state.active;
    ind ++;
  	(ind<this.state.images)? this.setState({active: ind}) : this.setState({active: 0});
  }

  switchIndex(e){
     let ind = +e.target.id.split(' ')[1];
    this.setState({active: ind});
  }

	render() {

	return (
		<div>
			<div className="text-center">
				<a href={'https://s3.us-east-2.amazonaws.com/polyglot-images/'+this.props.images[this.state.active].replace('./resampled','medium')} target='blank'> <img src={'https://s3.us-east-2.amazonaws.com/polyglot-images/'+this.props.images[this.state.active].replace('./','')} style={{maxWidth: '100%', maxHeight: '350px', margin: '2%' , borderRadius: '5px', cursor: 'zoom-in'}}  /> </a>
        <p className="small"><em>click to open/enlarge in a new window</em></p>
			</div>
			<div className="row m10">
				<div className="col-xs-10 col-xs-offset-1 text-center">
					{this.props.images.length > 1 &&
						this.props.images.map((image, i)=>{
							if(i===this.state.active){
								return <span id={`slider ${i}`} className="fa fa-circle pad10" value="i" onClick={e=>this.switchImg(e)} ></span>
							} else {
								return <span id={`slider ${i}`} className="fa fa-circle-o pad10" value="i" onClick={e=>this.switchIndex(e)} ></span>
							}
						})
					}
				</div>
			</div>
		</div>
		);
	}
}

export default ImageSlider;
