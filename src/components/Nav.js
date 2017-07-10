import React, { Component } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';

import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import ExpandMore from 'material-ui/svg-icons/navigation/expand-more';

import {indexMenu, indexSubpages} from '../copy/menu';


class Nav extends Component {
	constructor(props) {
    super(props);
    this.state = {
    	page: indexMenu[0],
      otherPages: indexMenu,
      submenu: [],

    };
    this.pushHome = this.pushHome.bind(this);
  }

  handleChange = (event) => {
    const match = indexMenu.filter((item) =>{
      return item.id === +event.target.value;
    })[0];
    this.setState({page:match, submenu: indexSubpages[match.src]});
    this.props.info.history.push(match.src);
  };

  handleChangeMenu = (event, child) => {
    this.props.info.history.push(child.props.value);
  }

  pushHome = (e)=>{
    this.props.info.history.push('/');
  }

  componentDidMount=()=>{
    let site = this.props.info.location.pathname;
    const match = indexMenu.filter(item=>{
      return item.src === site;
    })[0];
    this.setState({page:match, submenu: indexSubpages[site]});
  }


  render() {

	return (
	     <div className="navbarG navbar-fixed-top bshadowed">
          <div className="row">
            <div className="col-xs-1 text-center">
            <IconMenu
                iconButtonElement={<IconButton><MenuIcon color={'white'} /></IconButton>}
                anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                targetOrigin={{horizontal: 'left', vertical: 'top'}}
                onItemTouchTap={this.handleChangeMenu}
                style={{'backgroundColor': '#444444', color: '#fff'}}
              >
              {this.state.submenu.length>0 &&
                this.state.submenu.map(menuItem=>{
                return (
                        <MenuItem
                  value={menuItem.push}
                  primaryText={menuItem.menu}
                  className={'texta'}
                  style={{'backgroundColor': '#444444', color: '#fff'}}
                />
                )

                })
              }
            </IconMenu>
            </div>
            <div className="col-md-1 hidden-xs hidden-sm" style={{maxWwidth: '768px', wordWrap: 'break-word'}}><span className="logoPointer" style={{verticalAlign: 'baseline'}}> <img src="./newberry_logo_dark_small.png" onClick={e=>this.pushHome(e)} style={{height:'40px', margin: '.5vh', float: 'right'}} /></span>
            </div>
            <div className="col-sm-3 col-xs-11">
            <select className="navbar-link text-uppercase titleOptions logoPointer" onChange={this.handleChange} value={this.state.page.id}>
              {indexMenu &&
                indexMenu.map(page=>{
                  return <option className="navbar-link text-uppercase titleOptions" value={page.id}>{page.title}<ExpandMore color={'white'}  /></option>
                })
              }
            </select>
            </div>
            <div className="logoPointer" style={{backgroundColor: '#ae3a3e', float: 'right'}}><img className="img-responsive hidden-xs hidden-sm logoPointer" src="http://publications.newberry.org/dig/rcp/media/religious-change-new-header-5-12.jpg&#10;" onClick={e=>this.pushHome(e)} />
            </div>
          </div>
	      </div>
	        )
	}
};

export default Nav;
