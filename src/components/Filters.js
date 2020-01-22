import React from 'react';

class Filters extends React.Component {
	classFilters = [
		"Transport", "Starfighter", "Corvette", "Cruiser", "Battlestation",
		"Barge", "Escort", "Freighter", "Destroyer", "Dreadnought", "Yacht"
	];

	render() {
		return (
			<div className='filters-container'>
				<h3>FILTER</h3>
				<h4>Class</h4>
				
			</div>
		);
	}
}

export default Filters;