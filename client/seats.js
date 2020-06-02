import React from 'react';

const Seats = (props) => {
	const players = props.players;
	const clientPlayer = props.clientPlayer;
	var count = 1;
	var i = 0;
	var active = [];

	if (clientPlayer[0]) {
		if(clientPlayer[0].active === true) {
			active = '-active'
		}
		else {
			active = ''
		}

		return (
			<div>
				<div key={clientPlayer[0].id} className={'seat-1' + active}>
					<div className="player">
						<div className="player-font">{clientPlayer[0].name}<span style={{fontSize:18, fontWeight:'bold', color:'yellow'}}>{" " + clientPlayer[0].dealer}</span></div>
						<div className="player-font">${clientPlayer[0].bankroll}</div>
					</div>
				</div>

				{players.map((player) => {
				//	if (player.id !== props.id) {
						if(player.id != clientPlayer[0].id){
							count = count + 1;
							if(player.view === true) {
								return (
									<div key={player.name} className={'seat-' + count}>
										<div className="player">
											<div className="player-font"> {player.name}<span style={{fontSize:18, fontWeight:'bold', color:'yellow'}}>{" " + player.dealer}</span></div>
											<div className="player-font">${player.bankroll}</div>
										</div>
									</div>
								);
							}
							else if(player.active === true) {
								return (
									<div key={player.name} className={'seat-' + count + '-active'}>
										<div className="player">
											<div className="player-font"> {player.name}<span style={{fontSize:18, fontWeight:'bold', color:'yellow'}}>{" " + player.dealer}</span></div>
											<div className="player-font">${player.bankroll}</div>
										</div>
									</div>
								);
							}
							else {
								return (
									<div key={player.name} className={'seat-' + count}>
										<div className="player">
											<div className="player-font"> {player.name}<span style={{fontSize:18, fontWeight:'bold', color:'yellow'}}>{" " + player.dealer}</span></div>
											<div className="player-font">${player.bankroll}</div>
										</div>
									</div>
								);
							}
					}
				})}
			</div>
		);
	}
	else if (clientPlayer.length === 0) {
			return (
				<div>
					{players.map((player) => {
						i = i + 1;
						if(player.active === true) {
							return (
								<div key={player.name} className={'seat-' + i + '-active'}>
									<div className="player">
										<div className="player-font"> {player.name}<span style={{fontSize:18, fontWeight:'bold', color:'yellow'}}>{" " + player.dealer}</span></div>
										<div className="player-font">${player.bankroll}</div>
									</div>
								</div>
							);
						}
						else {
							return (
								<div key={player.name} className={'seat-' + i}>
									<div className="player">
										<div className="player-font"> {player.name}<span style={{fontSize:18, fontWeight:'bold', color:'yellow'}}>{" " + player.dealer}</span></div>
										<div className="player-font">${player.bankroll}</div>
									</div>
								</div>
							);
						}
					})}
				</div>
			);
		}
	else {
		return <div>Loading...</div>;
	}
};

export default Seats;
