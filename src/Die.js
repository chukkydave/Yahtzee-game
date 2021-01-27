import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
	constructor(props) {
		super(props);
		this.handleFreeze = this.handleFreeze.bind(this);
	}

	static defaultProps = {
		numberWords: [
			'one',
			'two',
			'three',
			'four',
			'five',
			'six',
		],
	};

	handleFreeze(evt) {
		this.props.handleClick(this.props.idx);
	}
	render() {
		const { numberWords, locked, val, disabled, rolling } = this.props;
		let diceVal = numberWords[val - 1];
		return (
			<i
				className={`Die fas fa-dice-${diceVal} fa-5x ${
					locked ? 'Die-locked' :
					''} ${rolling && 'Die-rolling'}`}
				onClick={this.handleFreeze}
				disabled={disabled}
			/>
		);
	}
}

export default Die;
