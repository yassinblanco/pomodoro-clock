import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Break.css';



const Break = (props) => {
	return (
		<div className='break-main-container'>
		  <p id='break-label'>Break Length</p>
		  <div className='break-sub-container'>
		      <div id="break-decrement" className="icon" onClick={props.decrementBreak}><FontAwesomeIcon icon="arrow-down" /></div>
			  <div id="break-length">{props.bLength}</div>
		      <div id="break-increment" className="icon" onClick={props.incrementBreak}><FontAwesomeIcon icon="arrow-up" /></div>
		  </div>			  
		</div>	    
	);
}

export default Break;