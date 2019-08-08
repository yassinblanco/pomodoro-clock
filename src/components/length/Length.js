import React from 'react';
import Break from '../break/Break';
import Session from '../session/Session';
import './Length.css';

const Length = (props) => {
	return (
		<div className='length-container'>
		  <Break 
		     bLength = {props.breakLength} 
		     incrementBreak = {props.onIncrementBreakClick}
		     decrementBreak = {props.onDecrementBreakClick}/>
		  <Session 
		     sLength = {props.sessionLength} 
		     incrementSession = {props.onIncrementSessionClick}
		     decrementSession = {props.onDecrementSessionClick}/>
		</div>
	);
}

export default Length;