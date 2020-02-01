import { API_URL } from '../utils/Constants';

const END_POINT = `${API_URL}/purchaseorder`;

class PurchaseOrder {
	static purchase = (userToken, paymentId, items) => {
		return fetch(`${END_POINT}/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'authorization': `Bearer ${userToken}`
			},
			body: JSON.stringify(items)
		})
		.then(response => response.status);
		// TODO: What does the consumer of the above really need?

		/* {
			if (response.status != 200)
				return 
			console.log(response)
			return response.json()});*/

		//.catch(error => console.log(`PurchaseOrder failed with error: ${error}`));
		/*
		return fetch(`${END_POINT}/withpromoid/${id}`)
		.then(response => response.json())
		.catch(error => console.log(`Could not get inventory with promo id: ${id}\nError: ${error}`));
		*/
	}
}

export default PurchaseOrder;