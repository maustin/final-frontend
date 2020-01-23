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
		this.saveState();
	}

	getItemQuantity(item) {

	}

	setItemQuantity(item) {
		this.saveState();
	}

	clear() {
		this.items = [];
		this.saveState();
	}

	saveSate() {
		
	}
}

const instance = new Cart();
Object.freeze(instance);

export default instance;