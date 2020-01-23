import React from 'react';
import {formatCredits} from '../utils/TextUtils';
import InventoryItem from '../models/InventoryItem';
import OctoButton from './OctoButton';
import InventoryListItemDetail from './InventoryListItemDetail';

class InventoryListItem extends React.Component {
	state = {
		ship: null
	}
	// Three possible styles
	// dotd, browse, cart
	addToCart = event => {

	};

	componentDidMount() {
		if (!this.props.ship && this.props.shipId) {
			InventoryItem.withId(this.props.shipId)
			.then(response => this.setState({ ship: response }));
		}
	}

	render() {
		if (!this.props.ship && !this.state.ship)
			return <div/>;

		let style = this.props.style;
		let ship = this.props.ship || this.state.ship;

		let image = ship.is_new ? ship.image_new : ship.image_used;
		let costsDiv;
		if (ship.price_mod != null && ship.price_mod > 0) {
			//console.log(ship.price, ship.price_mod);
			costsDiv = [];
			if (style != 'cart')
				costsDiv.push(<div className='inventory-line-item-cost-old'>{formatCredits(ship.price)}</div>);

			costsDiv.push(<div className='inventory-line-item-cost-current'>{formatCredits(ship.price * ship.price_mod)}</div>);
		}
		else {
			// No change
			costsDiv = [<div className='inventory-line-item-cost-current'>{formatCredits(ship.price)}</div>];
		}

		if (style != 'cart')
			costsDiv.push(<OctoButton smaller text="ADD TO CART" onClick={this.addToCart} />);

		let className = ['inventory-line-item'];// inventory-line-item-clickable'];
		if (style == 'browse')
			className.push('inventory-line-item-border');

		let costContainerClassName = ['inventory-line-item-cost-container'];
		if (style == 'cart')
			costContainerClassName.push('shift-flex-right');

		return (
			<div className={className.join(' ')} >
				<img className='inventory-line-item-image' src={image} />
				<div className={costContainerClassName.join(' ')}>
					{ costsDiv }
				</div>
				<div className='inventory-line-item-details'>
					<span className='inventory-line-item-details-header'>{ship.model}</span>
					<InventoryListItemDetail ship={ship} shipKey='starship_class' />
					<InventoryListItemDetail ship={ship} shipKey='is_new' />
					<InventoryListItemDetail ship={ship} shipKey='parsecs' />
					<InventoryListItemDetail ship={ship} shipKey='hyperdrive_rating' />
				</div>
			</div>
		);
	}
}

export default InventoryListItem;