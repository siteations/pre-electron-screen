import React, { Component } from 'react';


class Nav extends Component {
	constructor(props) {
    super(props);
    this.state = {
    	home: 1,
    	intro: 1,

    };
    this.pushHome = this.pushHome.bind(this);
  }

  handleChangeNewberry = (event, index, value) => this.setState({home:value});
  handleChangeReligious = (event, index, value) => this.setState({intro:value});

  pushHome = (e)=>{
    this.props.info.history.push('/');
  }


  render() {
    let site = this.props.info.location.pathname;
    var title='';
    if (site === '/'){title='Religious Change: Exhibit Index'}
    else if (site === '/polyglot'){title='Cathedrals of Print'}
    else if (site === '/broadsides'){title='Italian Religious Broadsides'}


	return (
	     <div className="navbarG navbar-fixed-top bshadowed">
          <div className="row">
            <div className="col-xs-1">
            </div>
            <div className="col-md-1 hidden-xs hidden-sm" style={{maxWwidth: '768px', wordWrap: 'break-word'}}><span className="logoPointer" style={{verticalAlign: 'baseline'}}> <img src="./newberry_logo_dark_small.png" onClick={e=>this.pushHome(e)} style={{height:'40px', margin: '.5vh', float: 'right'}} /></span>
            </div>
            <div className="col-sm-3 col-xs-11"><a className="navbar-link text-uppercase" style={{color: '#ffffff', fontFamily: 'Lato', verticalAlign: 'baseline', lineHeight:'3em', letterSpacing: '1px' }}>{title}</a>
            </div>
            <div className="logoPointer" style={{backgroundColor: '#ae3a3e', float: 'right'}}><img className="img-responsive hidden-xs hidden-sm logoPointer" src="http://publications.newberry.org/dig/rcp/media/religious-change-new-header-5-12.jpg&#10;" onClick={e=>this.pushHome(e)} />
            </div>
          </div>
	      </div>
	        )
	}
};

export default Nav;
