import React, { Component } from 'react';
import {summaries, introParagraph, lorem1, lorem2, lorem3} from '../copy/content.js';

export const IntroImg = props => {
	let image = props.src;
	let title = props.title;

	return (
			        <div className="col-md-4 m20">
			        	<img src={image} style={{width:'95%', margin: '2%' , borderRadius: '5px'}} />
			        	<p>Text: <em>{title}</em></p>

			        {/*
			          <h4><em>Details information or other?</em></h4>
			          <ul>
			          	<li>this</li>
			          	<li>that</li>
			          	<li>etc</li>
			          </ul>
			        */}

			        </div>
	        )
};

export const IntroText = props => {
	let content = props.title;
	let texts = props.texts;
	// let more = props.more;

	return (
	      <div>
					<div className="col-md-8 bshadowlite layerfullwhite">
					option1: formatted in older column structure
			        <h2 className="underline">{content[0]}</h2>
			          <p className='plarge'>{texts[0]}</p>
			          <div className="col-md-6 m20">
			          	 <h2 className="underline">{content[1]}</h2>
			          	 {texts[1] &&
			          	 	texts[1].map(para=> <p className='plarge'> {para} </p>)
			          	 }
			          	<br/>
			          </div>
			          <div className="col-md-6 m20">
			          	<h2 className="underline">{content[2]}</h2>
			          	{texts[2] &&
			          	 	texts[2].map(para=> <p className='plarge'> {para} </p>)
			          	 }<br/>
			          	{/*<ul>
			          	<li>biblio or other</li>
			          	<li>in this space</li>
			          	<li>etc</li>
			          	</ul>*/}
			          </div>
			    		</div>
			    	</div>
	        )
};
