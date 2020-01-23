import React from 'react';
import { withRouter } from 'react-router-dom';
import Cart from '../models/Cart';
import { formatCredits } from '../utils/TextUtils';
import Button from '../components/Button';
import OctoButton from '../components/OctoButton';
import InventoryListItem from '../components/InventoryListItem';

class CartPage extends React.Component {
	state = {
		items: [],
	}

	browse = () => {
		this.props.history.push('/browse');
	}

	removeItem = id => {
		console.log(id);
		Cart.removeItem(id);
		this.setState({ items: Cart.getItems() });
	}

	checkout = () => {

	}

	componentDidMount() {
		// inventory id, quantity, cost
		//this.setState({ items: Cart.getItems() });
		//let cartItems = Cart.getItems();
		this.setState({ items: Cart.getItems() });
	}

	render() {
		console.log(this.state);
		let subtotal = 0;
		let rows = this.state.items.map(item => {
			subtotal += item.ship.finalPrice;

			return (
				<div className='cart-row'>
					<Button text='x' onClick={this.removeItem} clickParam={item.ship.id} />
					<InventoryListItem shipId={item.ship.id} style='cart' />
				</div>
			)});

		let taxes = subtotal * 0.2;
		let regFee = 3590;
		let galFee = subtotal * 0.01;
		let conFee = subtotal * 0.005;
		let total = subtotal + taxes + regFee + galFee + conFee;

		if (!rows.length) {
			return (
				<div className='cart-page'>
					<h3>MY CART</h3>
					<div>
						<h4>There's nothing here!</h4>
						<OctoButton text="BROWSE SHIPS" onClick={this.browse} />
					</div>
				</div>
			)
		}

		return (
			<div className='cart-page'>
				<h3>MY CART</h3>
				{ rows }
				<div className='cart-totals'>
					<div className='cart-subtotal-header'>Subtotal</div>
					<div className='cart-subtotal-value'>{ formatCredits(subtotal) }</div>
					<div className='cart-subtotal-header'>Taxes</div>
					<div className='cart-subtotal-value'>{ formatCredits(taxes) }</div>
					<div className='cart-subtotal-header'>Registration</div>
					<div className='cart-subtotal-value'>{ formatCredits(regFee) }</div>
					<div className='cart-subtotal-header'>Galactic Recovery Fund</div>
					<div className='cart-subtotal-value'>{ formatCredits(galFee) }</div>
					<div className='cart-subtotal-header'>Convenience Fee</div>
					<div className='cart-subtotal-value'>{ formatCredits(conFee) }</div>
					<div className='cart-total-header'>TOTAL</div>
					<div className='cart-total-value'>{ formatCredits(total) }</div>
				</div>
				<OctoButton text="CHECKOUT" onClick={this.checkout} />
			</div>
		);
	}
}

export default withRouter(CartPage);