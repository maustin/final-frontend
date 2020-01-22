import React from 'react';
import {formatCredits} from '../utils/TextUtils';
import OctoButton from './OctoButton';
import InventoryListItemDetail from './InventoryListItemDetail';

class InventoryListItem extends React.Component {
	// Two styles - DOTD and BROWSE
	addToCart = event => {

	};

	render() {
		if (!this.props.ship)
			return <div/>;

		let ctaButton;
		let className = ['inventory-line-item'];
		if (this.props.dotd) {
			ctaButton = <OctoButton smaller text="ADD TO CART" onClick={this.addToCart} />;
		}
		else {
			//ctaButton = <OctoButton text="BROWSE SHIPS" onClick={this.browse} />;
			className.push('inventory-line-item-clickable');
		}

		let ship = this.props.ship;
		let image = ship.is_new ? ship.image_new : ship.image_used;
		let costsDiv;
		if (ship.price_mod != undefined) {
			console.log(ship.price, ship.price_mod);
			costsDiv = [
				<div className='inventory-line-item-cost-old'>{formatCredits(ship.price)}</div>,
				<div className='inventory-line-item-cost-current'>{formatCredits(ship.price * ship.price_mod)}</div>
			];
		}
		else {
			// No change
			costsDiv = <div className='inventory-line-item-cost-current'>{formatCredits(ship.price)}</div>;
		}

		let lengthOrParsecs;
		if (ship.is_new)
			lengthOrParsecs = 'length';
		else
			lengthOrParsecs = 'parsecs';

		return (
			<div className={className.join(' ')} >
				<img className='inventory-line-item-image' src={image} />
				<div className='inventory-line-item-cost-container'>
					{ costsDiv }
					{ ctaButton }
				</div>
				<div className='inventory-line-item-details'>
					<span className='inventory-line-item-details-header'>{ship.model}</span>
					<InventoryListItemDetail ship={this.props.ship} shipKey='starship_class' />
					<InventoryListItemDetail ship={this.props.ship} shipKey={lengthOrParsecs} />
					<InventoryListItemDetail ship={this.props.ship} shipKey='hyperdrive_rating' />
					<InventoryListItemDetail ship={this.props.ship} shipKey='MGLT' />
				</div>
			</div>
		);
	}
}

export default InventoryListItem;