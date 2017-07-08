import React, { Component } from 'react';
import AudioFooter from './AudioFooter';

export const Footer = function(){

  return (
      <footer id="footer" className="region region-footer footerFill navbar-fixed-bottom bshadowed">
      <br/>
      <div id="block-block-62" className="block block-block address last even col-xs-11 col-xs-offset-1" style={{marginBottom: '12px'}}>
          <div className="inner col-xs-6">
            <div className="content white">
                <ul>
                	<li>The Newberry</li>
                	<li>60 West Walton Street</li>
                	<li>Chicago, Illinois 60610</li>
                	<li>(312) 943-9090</li>
                </ul>
            </div>
          </div>
          <div className="inner col-xs-5 col-xs-offset-1 white">
            <AudioFooter />
          </div>
        </div>
      </footer>

          )

}
