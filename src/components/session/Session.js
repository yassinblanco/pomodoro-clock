import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Session.css';



const Session = (props) => {
	return (
		<div className='session-main-container'>
		  <p id='break-label'>Session Length</p>
		  <div className='session-sub-container'>
		      <div id="session-decrement" className="icon" onClick={props.decrementSession}><FontAwesomeIcon icon="arrow-down" /></div>
			  <div id="session-length">{props.sLength}</div>
		      <div id="session-increment" className="icon" onClick={props.incrementSession}><FontAwesomeIcon icon="arrow-up" /></div>
		  </div>
		</div>
	    
	);
}

export default Session;