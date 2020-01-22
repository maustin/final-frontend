import React from 'react';

class OctoButton extends React.Component {
	onClick = event => {
		if (this.props.onClick)
			this.props.onClick(event);
	}

	render() {
		// style stuff
		let classNames = ['button-octagon'];
		let style = {
			//border: "4px solid white",
			//borderImage: 'url(octagon-outline-shape-edit.svg) 20% stretch',
		};

		if (this.props.smaller) {
			classNames.push('button-octagon-smaller');
		}

		return (
			<div
				className={classNames.join(' ')}
				style={style}
				onClick={this.onClick} >
				{ this.props.text }
			</div>
		);
	}
}

export default OctoButton;