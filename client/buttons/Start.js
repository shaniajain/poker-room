import React from 'react';
import Button from '@material-ui/core/Button';

const Start = (props) => {
	if (props.players.length > 1 && props.players.length < 8 && props.joined === true && props.started === false) {
		return (
			<div style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto', paddingTop: '50px', paddingBottom: '50px' }} >
			<Button onClick={props.start} variant="contained" color="secondary">
				Start Game
			</Button>
			</div>
		);
	} else {
		return <div />;
	}
};

export default Start;
