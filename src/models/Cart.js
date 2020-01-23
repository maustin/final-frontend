// inventory id, qty, price?

class Cart {
	constructor() {
		//this.items = {};
		this.items = [];
		return;

		let storedCart = localStorage.getItem('hgss-cart');
		if (storedCart) {
			// TODO: Any other sort of verification needed here?
			this.items = storedCart.items;
		}
	}

	getItems = () => {
		return this.items;
	}

	addItem = (ship, quantity) => {
		// verify string key
		this.items.push({ship, quantity});

		/*id = id.toString();
		if (!this.items.hasOwnProperty(id.toString()))
			this.items[id] = quantity;
		else
			this.items[id] += quantity;*/

		this.saveState();
	}

	getItemQuantity = (id) => {
		/*id = id.toString();
		if (id.items.hasOwnProperty(id))
			return this.items[id];
		else
			return 0;*/
	}

	// Just an alias really
	setItemQuantity = (id, quantity) => {
		/*id = id.toString();
		if (quantity == 0 && this.items.hasOwnProperty(id)) {
			delete this.items[id];
			this.saveState();
		}
		else
			this.addItem(id, quantity);*/
	}

	removeItem = (id) => {
		console.log()
		for (let i = 0; i < this.items.length; i++) {
			//console.log(this.items[i].id);
			if (this.items[i].ship.id == id) {
				this.items.splice(i, 1);
				break;
			}
		}

		this.saveState();
		/*for (let item of this.items) {
			if (item.ship.id == id) {
				this.items.
			}
		}*/
	}

	clear = () => {
		this.items = [];
		this.saveState();
	}

	saveState = () => {
		localStorage.setItem('hgss-cart', this.items);
	}
}

const instance = new Cart();
Object.freeze(instance);

export default instance;