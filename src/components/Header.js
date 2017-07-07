import React, { Component } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import scrollToElement from 'scroll-to-element';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';

import {items} from '../copy/content.js';


const styles = {
  customWidth: {
    width: '100%',
  },
};

class Header extends Component {
	constructor(props) {
    super(props);
    this.state = {
    	home: '#introExhib',
    	intro: '#introPoly',
    	interact: '#inter-Comp',
    	biblio: '#biblio',
    	menu: '',
    };
  }

  handleChangeHome = (event, index, value) => this.setState({home:value}, this.props.info.history.push(value));
  handleChangeIntro = (event, index, value) => this.setState({intro:value}, this.props.info.history.push(value));
  handleChangeInteract = (event, index, value) => this.setState({interact:value}, this.props.info.history.push(value));
  handleChangeBiblio = (event, index, value) => this.setState({biblio: value}, this.props.info.history.push(value));

  handleChangeMenu = (event, child) => this.setState({menu: child.props.value}, this.props.info.history.push(child.props.value));


  componentDidMount() {
    this.jumpToHash();
  }
  componentDidUpdate() {
    this.jumpToHash();
  }

  jumpToHash = () => {
    const hash = this.props.info.location.hash;
    if (hash) {
      scrollToElement(hash, { offset: -120 });
    }
  }

  render() {
    console.log('history?', this.props.info);

	return (
	     <div className="navbar navbar-fixed-top bshadowed layer1">
	      <div className="col-xs-10 col-xs-offset-1" style={{marginTop: '20px'}}>

		        <div className="col-sm-3 hidden-xs">
			        <DropDownMenu
				          value={this.state.home}
				          onChange={this.handleChangeHome}
				          style={styles.customWidth}
				          autoWidth={true}
				          className={'appareo'}
				        >
				        {items.home &&
				        	items.home.map(home=> <MenuItem value={home.value} primaryText={home.text} className={'texta'} />)
				        }
			        </DropDownMenu>
		        </div>

		        <div className="col-sm-3 hidden-xs">
		        	<DropDownMenu
				          value={this.state.intro}
				          onChange={this.handleChangeIntro}
				          style={styles.customWidth}
				          autoWidth={true}
				          className={'appareo'}
				        >
				        {items.intro &&
				        	items.intro.map(intro=> <MenuItem value={intro.value} primaryText={intro.text} className={'texta'} />)
				        }
			        </DropDownMenu>
		        </div>

		        <div className="col-sm-3 hidden-xs">
		        	<DropDownMenu
				          value={this.state.interact}
				          onChange={this.handleChangeInteract}
				          style={styles.customWidth}
				          autoWidth={true}
				          className={'appareo'}
				        >
				        {items.interact &&
				        	items.interact.map(intro=> <MenuItem value={intro.value} primaryText={intro.text} className={'texta'} />)
				        }
			        </DropDownMenu>
		        </div>

		        <div className="col-sm-3 hidden-xs">
		        	<DropDownMenu
				          value={this.state.biblio}
				          onChange={this.handleChangeBiblio}
				          style={styles.customWidth}
				          autoWidth={true}
				          className={'appareo'}
				        >
				        {items.biblio &&
				        	items.biblio.map(intro=> <MenuItem value={intro.value} primaryText={intro.text} className={'texta'} />)
				        }
			        </DropDownMenu>
		        </div>
		        <div className="visible-xs">
		        	<IconMenu
						    iconButtonElement={<IconButton><MenuIcon /></IconButton>}
						    anchorOrigin={{horizontal: 'left', vertical: 'top'}}
						    targetOrigin={{horizontal: 'left', vertical: 'top'}}
						    onItemTouchTap={this.handleChangeMenu}
						  >

						  	<MenuItem
						      value={items.home[0].value}
						      primaryText={items.home[0].text}
						      className={'texta'}
						    />
						    <Divider />
				      	<MenuItem
				        	primaryText={items.intro[0].text}
				        	value={items.intro[0].value}
				        />
				        <MenuItem
				        	primaryText={items.intro[1].text}
				        	value={items.intro[1].value}
				        />
				        <MenuItem
				        	primaryText={items.intro[2].text}
				        	value={items.intro[2].value}
				        />
				        <MenuItem
				        	primaryText={items.intro[3].text}
				        	value={items.intro[3].value}
				        />
				        <Divider style={{height:'2px'}}/>
				      	<MenuItem
				        	primaryText={items.interact[0].text}
				        	value={items.interact[0].value}
				        />
				        <MenuItem
				        	primaryText={items.interact[1].text}
				        	value={items.interact[1].value}
				        />
				        <MenuItem
				        	primaryText={items.interact[2].text}
				        	value={items.interact[2].value}
				        />
				        <MenuItem
				        	primaryText={items.interact[3].text}
				        	value={items.interact[3].value}
				        />
				        <Divider />
				        <MenuItem
				        	primaryText={items.biblio[0].text}
				        	value={items.biblio[0].value}
				        />
						  </IconMenu>
		        </div>

	      </div>
	    </div>
	        )
	}
};

export default Header;
