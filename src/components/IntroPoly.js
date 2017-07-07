import React, { Component } from 'react';
import {IntroImg, IntroText} from'./IntroRows';
import {IntroImg2, IntroText2} from'./IntroRows2';
import Introduction from './Introduction.js';
import scrollToElement from 'scroll-to-element';

import {summaries, introParagraph, lorem1, intro2, intro3, textIntros} from '../copy/content.js';

class IntroPoly extends Component {
		constructor(props) {
        super(props);
				this.state = {};
				this.jumpToHash=this.jumpToHash.bind(this);
		}

		jumpToHash = (hash) => {
    this.props.info.history.push(hash);

    if (hash) {
      scrollToElement(hash, { offset: -120 });
    }
  }

  render() {

	return (
	      <div className="row hidden-print">
	      <div className="col-xs-10 col-xs-offset-1" id="introPoly">
				<div className="page bshadowed m20 layer1">
					<div className="">
			      <div className="text-center">
			        <h1 className="pjheader">"The Age of Great Polyglots"</h1>
			        <h2 className="underline">1502-1657</h2>
			        <h3>Conditions and Challenges Behind the Making of the Great Polyglots</h3><br/>
			        <img src="" />
			      </div>
			    </div>
			    <div className="row m20 bshadowedlite layerwhite" id="introComp">
			        <IntroImg2 src={['https://s3.us-east-2.amazonaws.com/polyglot-images/resampled/bon_1928_sig_a3v_a4r.jpg','https://s3.us-east-2.amazonaws.com/polyglot-images/resampled/case_x_3_44_pg_38_39.jpg']} title={['Specimen quinquaginta diversarum atque inter se differentium linguarum, & dialectorum.', 'Introductio ad lectionem linguarum orientalium : Hebraicae, Chaldaicae, Samaritanae, Syriacae, Arabicae, Persicae, Aethiopicae, Armenae, Coptae.']} />
			        <IntroText2 title={['Cathedrals of Print', 'Historical Background', 'The Polyglot Project']} texts={intro2}/>
			    </div>
			    <br/>
			    <div className="row m20 " id="introEd">
			    	<Introduction content={textIntros.comp} loc={this.props.location} action={this.jumpToHash} />
			    	<Introduction content={textIntros.antwerp} loc={this.props.location} action={this.jumpToHash} />
			    	<Introduction content={textIntros.london} loc={this.props.location} action={this.jumpToHash} />
			    </div>
			  </div>
			</div>
		</div>
	        )
	}
};

export default IntroPoly;
