import React from 'react';
import { withRouter } from 'react-router-dom';
import OctoButton from '../components/OctoButton';
import InventoryListItem from '../components/InventoryListItem';
import InventoryItem from '../models/InventoryItem';

class BrowsePage extends React.Component {
	state = {
		ships: [],
		selectedFilters: [],
		sortMethod: '',
		showUsed: null,
		showNew: null,
	}

	classFilters = [
		"Transport", "Starfighter", "Corvette", "Cruiser", "Battlestation",
		"Barge", "Escort", "Freighter", "Destroyer", "Dreadnought", "Yacht"
	]

	componentDidMount() {
		InventoryItem.all()
		.then(response => {
			this.setState({ ships: response });
		});
	}

	render() {
		let ships;
		//let ships = this.state.ships.map(ship =>
			//<ShipInventoryItem)
		return (
			<div className='browse-page'>
				<div className='browse-page-filters'>
				</div>
				<div className='browse-page-items'>
					{ ships }
				</div>
			</div>
		);
	}
}

export default withRouter(BrowsePage);