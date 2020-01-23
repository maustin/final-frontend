import React from 'react';
import Cart from '../models/Cart';
import InventoryListItem from '../components/InventoryListItem';

class CartPage extends React.Component {
	state = {
		items: [],
	}

	componentDidMount() {
		// inventory id, quantity, cost
		this.setState({ items: Cart.getItems() });
	}

	render() {
		return (
			<div className='cart-page'>
				Cart
				<InventoryListItem shipId="1" style="cart" />
			</div>
		);
	}
}

export default CartPage;