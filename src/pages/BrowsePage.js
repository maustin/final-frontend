import React from 'react';
import { withRouter } from 'react-router-dom';
import OctoButton from '../components/OctoButton';
import InventoryListItem from '../components/InventoryListItem';
import InventoryItem from '../models/InventoryItem';
import Filters from '../components/Filters'

class BrowsePage extends React.Component {
	state = {
		ships: [],
		selectedFilters: [],
		sortMethod: '',
		showUsed: null,
		showNew: null,
	}

	setSelectedClassFilters = selectedFilters => {
		this.setState({ selectedFilters });
	}

	setNewUsedFlags = (showNew, showUsed) => {
		this.setState({ showNew, showUsed });
	}

	setSortMethod = sortMethod => {
		this.setState({ sortMethod });
	}

	/*addToCart = (id, quantity) => {
		Cart.addItem(id, quantity);
		this.props.history.push('/cart');
	}*/

	componentDidMount() {
		InventoryItem.all()
		.then(response => {
			this.setState({ ships: response });
		});
	}

	render() {
		let ships = this.state.ships;

		// If neither or both new/used are selected we show all.
		// So only care when only one is selected.
		if (this.state.showNew != this.state.showUsed)
			ships = ships.filter(ship => (this.state.showNew && ship.is_new) || (this.state.showUsed && !ship.is_new));

		if (this.state.selectedFilters.length)
			ships = ships.filter(ship => {
				for (let filterName of this.state.selectedFilters) {
					if (ship.starship_class.includes(filterName))
						return true;
				}
				return false;
			});

		ships = ships.map(ship =>
			<InventoryListItem
				ship={ship}
				key={ship.id}
				style='browse'/>);

		return (
			<div className='browse-page'>
				<Filters
					setSelectedClassFilters={this.setSelectedClassFilters}
					setNewUsedFlags={this.setNewUsedFlags}
					setSortMethod={this.setSortMethod} />
				<div className='browse-page-items'>
					{ ships }
				</div>
			</div>
		);
	}
}

export default withRouter(BrowsePage);