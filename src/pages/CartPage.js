import React from 'react';
import { withRouter } from 'react-router-dom';
import Cart from '../models/Cart';
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

	removeItem = param => {
		console.log(param);
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
					<span>{ subtotal }</span>
				</div>
			</div>
		);
	}
}

export default withRouter(CartPage);