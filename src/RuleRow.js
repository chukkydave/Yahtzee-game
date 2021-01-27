import React, { Component } from 'react';
import './RuleRow.css';

class RuleRow extends Component {
	render() {
		const { score, description, name, doScore } = this.props;
		let scoreRoll = score === undefined;
		return (
			<tr
				className={`RuleRow ${
					scoreRoll ? 'RuleRow-active' :
					'RuleRow-disabled'}`}
				onClick={

						scoreRoll ? doScore :
						null
				}
			>
				<td className="RuleRow-name">{name}</td>
				<td className="RuleRow-score">
					{
						scoreRoll ? description :
						score}
				</td>
			</tr>
		);
	}
}

export default RuleRow;
