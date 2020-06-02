import React from 'react';

const OpponentCards = (props) => {
	const showdown = props.showdown;
	const players = props.players;
	const id = props.id;
	const messages = props.messages;
	var count = 1;

	const otherPlayer = players.filter((player) => player.id !== id);
	// player view
	if (!props.spectator || !props.view) {
		return (
				otherPlayer.map((player) => {
					count = count + 1;
					if (player.cards.length > 0 && showdown === false) {
						return (
							<div className={'boardInner-' + count}>
								<img className="playerCards" src={`/cardImages/blank.png`} style={{top:0, left:0, position: 'absolute'}}/>
								<img className="playerCards" src={`/cardImages/blank.png`} style={{top:0, left:50,position: 'absolute'}}/>
							</div>
						);
					}

					else if (player.cards.length > 0 && showdown === true) {
						return (
							<div className={'boardInner-' + count}>
								<img className="playerCards" src={`/cardImages/${player.cards[0]}.png`} style={{top:0, left:0, position: 'absolute'}}/>
								<img className="playerCards" src={`/cardImages/${player.cards[1]}.png`} style={{top:0, left:50,position: 'absolute'}}/>
							</div>
						);
					}

					else {
						return <div />;
					}
				})

		); // spectator view
	} else {
		count = 0;
		return (
		//	<div>
			<div>
					{otherPlayer.map((player) => {
						count = count + 1;
						if (player.cards.length > 0 && showdown === false) {
							return (
								<div className={'boardInner-' + count}>
									<img className="playerCards" src={`/cardImages/blank.png`} style={{top:0, left:0, position: 'absolute'}}/>
									<img className="playerCards" src={`/cardImages/blank.png`} style={{top:0, left:50,position: 'absolute'}}/>
								</div>
							);
						} else if (player.cards.length > 0 && showdown === true) {
							return (
								<div className={'boardInner'}>
									<img className="playerCards" src={`/cardImages/${player.cards[0]}.png`} style={{top:0, left:0, position: 'absolute'}}/>
									<img className="playerCards" src={`/cardImages/${player.cards[1]}.png`} style={{top:0, left:50,position: 'absolute'}}/>
								</div>
							);
						} else {
							return <div />;
						}
					})}
					</div>
					/*
				<div className="playerBoard">
					{otherPlayer.map((player) => {
						if (player.cards.length > 0 && showdown === false && otherPlayer.indexOf(player) === 0) {
							return (
								<div className="boardInner">
									<img className="playerCards" src={`/cardImages/blank.png`} />
									<img className="playerCards" src={`/cardImages/blank.png`} />
								</div>
							);
						} else if (player.cards.length > 0 && showdown === true && otherPlayer.indexOf(player) === 0) {
							return (
								<div className="boardInner">
									<img className="playerCards" src={`/cardImages/${player.cards[0]}.png`} />
									<img className="playerCards" src={`/cardImages/${player.cards[1]}.png`} />
								</div>
							);
						} else {
							return <div />;
						}
					})}
				</div>
				</div>
				*/
		);
	}
};

export default OpponentCards;
