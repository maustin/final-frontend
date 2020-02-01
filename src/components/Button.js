import React from 'react';

class Button extends React.Component {
	onClick = event => {
		if (this.props.onClick) {
			if (this.props.clickParam)
				this.props.onClick(this.props.clickParam);
			else
				this.props.onClick(event);
		}
	}

	render() {
		// style stuff
		let style = {
			//border: "4px solid white",
			//borderImage: 'url(octagon-outline-shape-edit.svg) 20% stretch',
		};

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