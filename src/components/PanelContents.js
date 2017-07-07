import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
import ImageSlider from './ImageSlider.js';

const PanelContents = props => {
	let element = props.element;
	let action = props.action;
	var color='';

	if (element.src[0]===''){element.src=['./London-header.jpg']}; //placeholder photo

	//<img src={element.src} style={{width: '95%', margin: '2%' , borderRadius: '5px'}} />

	return (
	     <div className="row" >
		     <div className="col-md-1">
			     <h1><span className={`fa fa-circle ${element.category}`}> </span></h1>
		     </div>

		     <div className="col-md-10">
			     	<h1 className="black">{element.title}</h1><br/>
			     	<Divider inset={false} />
			     	<h3>{element.subtitle}</h3>
			     	<ImageSlider images={element.src} />
			     	<h5 className="black" >{element.creator} <em>{element.textTitle}</em> {element.place} {element.year} </h5>
			     	<p>{element.narrative}</p><br/>
			     	<p className="black" >other sources:</p>
			     	<ul>
			     		{element.otherTitle &&
			     			element.otherTitle.map((title,i)=> <li>{element.otherAuthor[i]} <em>{title}</em> {element.otherBib[i]} </li>)
			     		}
			     	</ul>

			     	<Divider inset={false} />
			     	<h5 className="red"><a href={element.link} className="red" target="_blank" >Find at the Newberry (new page)</a></h5>
			     	<button className="btn btn-default texta" value={element.id} onTouchTap={e=>action(e)} >Add to List of Titles</button>
	     	</div>
	    </div>
	        )
};

export default PanelContents;
