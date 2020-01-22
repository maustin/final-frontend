import React from 'react';

class InventoryLineItemDetailItem extends React.Component {
	// I feel like this is cheating. Consider putting this in a util.
	columnNameMap = {
		"starship_class": "Starship Class",
		"length": "Length",
		"parsecs": "Parsecs",
		"hyperdrive_rating": "Hyperdrive Rating",
		"MGLT": "MGLT",
	}

	render() {
		return (
			<div className='inventory-line-item-detail'>
				<span className='inventory-line-item-detail-left'>{this.columnNameMap[this.props.shipKey]}</span>
				<div className='inventory-line-item-detail-middle'/>
				<span className='inventory-line-item-detail-right'>{this.props.ship[this.props.shipKey]}</span>
			</div>
		);
	}
}

export default InventoryLineItemDetailItem;