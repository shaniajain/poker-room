import React from 'react';

const Chip = (props) => {
	const spectator = props.spectator;
	const id = props.id;
	const players = props.players;
	const view = props.view;
	var count = 1;

	if (!spectator || !view) {
		return (
			<div>
				{players.map((player) => {
					if (player.activeBet === 0) {
						return <div />;
					} else if (player.id === id) {
						return (
							<div className="chip-1">
								<div style={{ marginRight: '5px'}}>${player.activeBet}</div>
								<img className="chipImg" style={{width:42, height:25}} src="/chips/chip.png" />
							</div>
						);
					} else if (player.id !== id) {
						count = count + 1;
						return (
							<div className={'chip-' + count}>
								<div style={{ marginRight: '5px' }}>${player.activeBet}</div>
								<img className="chipImg" style={{width:42, height:25}} src="/chips/chip.png" />
							</div>
						);
					}
				})}
			</div>
		);
	}
	else {
		return (
			<div>
				{players.map((player) => {
					if (player.activeBet === 0) {
						return <div />;
					} else if (players.indexOf(player) === 0) {
						return (
							<div className="chip-1">
								<div style={{ marginRight: '5px' }}>${player.activeBet}</div>
								<img className="chipImg" style={{width:42, height:25}} src="/chips/chip.png" />
							</div>
						);
					} else if (players.indexOf(player) === 1) {
						return (
							<div className="chip-2">
								<div style={{ marginRight: '5px' }}>${player.activeBet}</div>
								<img className="chipImg" style={{width:42, height:25}} src="/chips/chip.png" />
							</div>
						);
					}
					else if (players.indexOf(player) === 2) {
						return (
							<div className="chip-3">
								<div style={{ marginRight: '5px' }}>${player.activeBet}</div>
								<img className="chipImg" style={{width:42, height:25}} src="/chips/chip.png" />
							</div>
						);
					}
					else if (players.indexOf(player) === 3) {
						return (
							<div className="chip-4">
								<div style={{ marginRight: '5px' }}>${player.activeBet}</div>
								<img className="chipImg" style={{width:42, height:25}} src="/chips/chip.png" />
							</div>
						);
					}
					else if (players.indexOf(player) === 4) {
						return (
							<div className="chip-5">
								<div style={{ marginRight: '5px' }}>${player.activeBet}</div>
								<img className="chipImg" style={{width:42, height:25}} src="/chips/chip.png" />
							</div>
						);
					}
					else if (players.indexOf(player) === 5) {
						return (
							<div className="chip-6">
								<div style={{ marginRight: '5px' }}>${player.activeBet}</div>
								<img className="chipImg" style={{width:42, height:25}} src="/chips/chip.png" />
							</div>
						);
					}
					else if (players.indexOf(player) === 6) {
						return (
							<div className="chip-7">
								<div style={{ marginRight: '5px' }}>${player.activeBet}</div>
								<img className="chipImg" style={{width:42, height:25}} src="/chips/chip.png" />
							</div>
						);
					}
					else if (players.indexOf(player) === 7) {
						return (
							<div className="chip-8">
								<div style={{ marginRight: '5px' }}>${player.activeBet}</div>
								<img className="chipImg" style={{width:42, height:25}} src="/chips/chip.png" />
							</div>
						);
					}
				})}
			</div>
		);
	}

};

export default Chip;
