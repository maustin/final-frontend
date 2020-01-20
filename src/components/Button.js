import React from 'react';

class Button extends React.Component {
	onClick = event => {
		if (this.props.onClick)
			this.props.onClick(event);
	}

	render() {
		// style stuff
		let style = {};

		return (
			<div
				className='button-base'
				style={style}
				onClick={this.onClick} >
				{ this.props.text }
			</div>
		);
	}
}

export default Button;