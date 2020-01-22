import React from 'react';
import { withRouter } from 'react-router-dom';
import OctoButton from '../components/OctoButton';
import InventoryListItem from '../components/InventoryListItem';
import InventoryItem from '../models/InventoryItem';
import Filters from '../components/Filters';

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

	componentDidMount() {
		InventoryItem.all()
		.then(response => {
			this.setState({ ships: response });
		});
	}

	render() {
		let ships = this.state.ships.map(ship =>
			<InventoryListItem ship={ship} />);

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