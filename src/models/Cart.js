class Cart {
	constructor() {
		this.items = [];

		let storedCart = localStorage.getItem('hgss-cart');
		if (storedCart) {
			// TODO: Any other sort of verification needed here?
			this.items = storedCart.items;
		}
	}

	getItems() {
		return this.items;
	}

	addItem(item) {
		saveState();
	}

	getItemQuantity(item) {

	}

	setItemQuantity(item) {
		saveState();
	}

	clear() {
		this.items = [];
		saveState();
	}
}

const instance = new Cart();
Object.freeze(instance);

export default instance;