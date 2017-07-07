import React from 'react';
import { render } from 'react-dom';
//import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import store from '../store';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './stylesheets/index.css';

render(
     <Router>
       <div>
  			<Route path="/" component={App} />
	     </div>
     </Router>,
    document.getElementById('root'),
 );

registerServiceWorker();
