import React, { Component } from 'react';

class WinnerMessage extends Component {
	constructor() {
		super();
		this.state = {
			value: ''
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}


	render() {
    const winnerMessage = this.props.winnerMessage;
	   console.log("Winner message: " + winnerMessage);

	    return (
		      <div className='winner-board' >
		        {winnerMessage.map((message) => (
                <p className="winner-message">
    							{message.text}
    						</p>
          ))}
			    </div>
        );
	}
}

export default WinnerMessage;
