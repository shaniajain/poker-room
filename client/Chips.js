import React from 'react';

const Chip = (props) => {
	const spectator = props.spectator;
	const id = props.id;
	const players = props.players;
	const view = props.view;
	var count = 1;

	var client_index = 0;
	players.map((player) => {
		if(player.id === id) {
			client_index = players.indexOf(player);
		}
	})

	if (!spectator || !view) {
		return (
			<div>
				{players.map((player) => {
					console.log(player.name + " is small blind? " + player.smallBlind);
					console.log(player.name + " is big blind? " + player.bigBlind);
					console.log(player.name + " active bet value: " + player.activeBet);
					console.log(player.name + "view? " + player.view);
					if (player.activeBet === 0) {
						console.log(player.name + " in here if bet = 0");
						return <div />;
					} else {
							if (player.id === id) {
							console.log(player.name + " in here if client");
							return (
								<div className="chip-1">
									<div style={{ marginRight: '5px'}}>${player.activeBet}</div>
									<img className="chipImg" style={{width:42, height:25}} src="/chips/chip.png" />
								</div>
							);
							/*
						} else if (player.id !== id) {
							count = count + 1;
							console.log(player.name + " " + player.smallBlind);
							console.log(player.name + " " + player.bigBlind);
							return (
								<div className={'chip-' + count}>
									<div style={{ marginRight: '5px' }}>${player.activeBet}</div>
									<img className="chipImg" style={{width:42, height:25}} src="/chips/chip.png" />
								</div>
							);
						}
						*/
					} else if (players.indexOf(player) < client_index) {
							if (players.indexOf(player) === 1) {
								console.log(player.name + " in here if index 1");
								return (
									<div className="chip-3">
										<div style={{ marginRight: '5px' }}>${player.activeBet}</div>
										<img className="chipImg" style={{width:42, height:25}} src="/chips/chip.png" />
									</div>
								);
							}
							else if (players.indexOf(player) === 2) {
								console.log(player.name + " in here if index 2");
								return (
									<div className="chip-4">
										<div style={{ marginRight: '5px' }}>${player.activeBet}</div>
										<img className="chipImg" style={{width:42, height:25}} src="/chips/chip.png" />
									</div>
								);
							}
							else if (players.indexOf(player) === 3) {
								console.log(player.name + " in here if index 3");
								return (
									<div className="chip-5">
										<div style={{ marginRight: '5px' }}>${player.activeBet}</div>
										<img className="chipImg" style={{width:42, height:25}} src="/chips/chip.png" />
									</div>
								);
							}
							else if (players.indexOf(player) === 4) {
								console.log(player.name + " in here if index 4");
								return (
									<div className="chip-6">
										<div style={{ marginRight: '5px' }}>${player.activeBet}</div>
										<img className="chipImg" style={{width:42, height:25}} src="/chips/chip.png" />
									</div>
								);
							}
							else if (players.indexOf(player) === 5) {
								return (
									<div className="chip-7">
										<div style={{ marginRight: '5px' }}>${player.activeBet}</div>
										<img className="chipImg" style={{width:42, height:25}} src="/chips/chip.png" />
									</div>
								);
							}
							else if (players.indexOf(player) === 6) {
								return (
									<div className="chip-8">
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
						} else {
							if (players.indexOf(player) === 1) {
								console.log(player.name + " in here if index 1");
								return (
									<div className="chip-2">
										<div style={{ marginRight: '5px' }}>${player.activeBet}</div>
										<img className="chipImg" style={{width:42, height:25}} src="/chips/chip.png" />
									</div>
								);
							}
							else if (players.indexOf(player) === 2) {
								console.log(player.name + " in here if index 2");
								return (
									<div className="chip-3">
										<div style={{ marginRight: '5px' }}>${player.activeBet}</div>
										<img className="chipImg" style={{width:42, height:25}} src="/chips/chip.png" />
									</div>
								);
							}
							else if (players.indexOf(player) === 3) {
								console.log(player.name + " in here if index 3");
								return (
									<div className="chip-4">
										<div style={{ marginRight: '5px' }}>${player.activeBet}</div>
										<img className="chipImg" style={{width:42, height:25}} src="/chips/chip.png" />
									</div>
								);
							}
							else if (players.indexOf(player) === 4) {
								console.log(player.name + " in here if index 4");
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
						}
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
