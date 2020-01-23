import React from 'react';
import {formatCredits} from '../utils/TextUtils';
import OctoButton from './OctoButton';
import InventoryListItemDetail from './InventoryListItemDetail';

class InventoryListItem extends React.Component {
	// Three possible styles
	// dotd, browse, cart
	addToCart = event => {

	};

	render() {
		if (!this.props.ship)
			return <div/>;

		let style = this.props.style;

		let ship = this.props.ship;
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
					<InventoryListItemDetail ship={this.props.ship} shipKey='starship_class' />
					<InventoryListItemDetail ship={this.props.ship} shipKey='is_new' />
					<InventoryListItemDetail ship={this.props.ship} shipKey='parsecs' />
					<InventoryListItemDetail ship={this.props.ship} shipKey='hyperdrive_rating' />
				</div>
			</div>
		);
	}
}

export default InventoryListItem;