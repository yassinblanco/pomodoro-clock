import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faArrowDown,faArrowUp,faSyncAlt,faPlay } from '@fortawesome/free-solid-svg-icons';
library.add(fab,faArrowDown,faArrowUp,faSyncAlt,faPlay);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
