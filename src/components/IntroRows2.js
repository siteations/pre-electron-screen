import React, { Component } from 'react';
import {summaries, introParagraph, lorem1, lorem2, lorem3} from '../copy/content.js';

export const IntroImg2 = props => {
	let image = props.src;
	let title = props.title;

	return (
			        <div className="col-md-4 m20">
			        	{image &&
			        		image.map((img,i)=>{
			        			return (
							        	<div>
							        	<img src={img} style={{width:'95%', margin: '2%' , borderRadius: '5px'}} />
							        	<p>Text: <em>{title[i]}</em></p><br/><br/>
							        	</div>
			        			        )
			        		})
			        	}

			        </div>
	        )
};

export const IntroText2 = props => {
	let content = props.title;
	let texts = props.texts;
	// let more = props.more;

	return (
			    <div className="col-md-8 bshadowlite layerfullwhite">
			        <h2 className="underline">{content[0]}</h2>
			          <p className='plarge'>{texts[0]}</p><br/>
			          	 <h2 className="underline" id="introHist">{content[1]}</h2>
			          	 {texts[1] &&
			          	 	texts[1].map(para=> <p className='plarge'> {para} </p>)
			          	 }
			          	<br/>
			          	<h2 className="underline" id="introPP">{content[2]}</h2>
			          	{texts[2] &&
			          	 	texts[2].map(para=> <p className='plarge'> {para} </p>)
			          	 }<br/>
			    		</div>
	        )
};
