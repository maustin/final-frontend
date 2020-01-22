import { API_URL } from '../utils/Constants';

const END_POINT = `${API_URL}/shipinventory`;

class InventoryItem {
	static all = () => {
		return fetch(END_POINT)
		.then(response => response.json())
		.catch(error => console.log('Could not get inventory:\n', error));
	}

	static withPromoId = id => {
		return fetch(`${END_POINT}/withpromoid/${id}`)
		.then(response => response.json())
		.catch(error => console.log(`Could not get inventory with promo id: ${id}\nError: ${error}`));
	}

	static withId = id => {
		return fetch(`${END_POINT}/${id}`)
		.then(response => response.json())
		.catch(error => console.log(`Could not get inventory with id: ${id}\nError: ${error}`));
	}
}

export default InventoryItem;