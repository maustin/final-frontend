import React from 'react';

class InventoryListItemDetail extends React.Component {
	// I feel like this is cheating. Consider putting this in a util.
	columnNameMap = {
		"starship_class": "Starship Class",
		"length": "Length",
		"is_new": "Condition",
		"parsecs": "Parsecs",
		"hyperdrive_rating": "Hyperdrive Rating",
		"MGLT": "MGLT",
	}

	render() {
		let value = this.props.ship[this.props.shipKey];
		if (this.props.shipKey == 'is_new')
			value = value == 1 ? 'New' : 'Used';
		
		return (
			<div className='inventory-line-item-detail'>
				<span className='inventory-line-item-detail-left'>{this.columnNameMap[this.props.shipKey]}</span>
				<div className='inventory-line-item-detail-middle'/>
				<span className='inventory-line-item-detail-right'>{value}</span>
			</div>
		);
	}
}

export default InventoryListItemDetail;