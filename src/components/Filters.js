import React from 'react';

class Filters extends React.Component {
	classFilters = [
		"Transport", "Starfighter", "Corvette", "Cruiser", "Battlestation",
		"Barge", "Escort", "Freighter", "Destroyer", "Dreadnought", "Yacht"
	];

	// I don't _think_ these need to be in state as they don't affect the rendering of the component
	selectedFilters = [];
	conditionNewSelected = false;
	conditionUsedSelected = false;

	onClassCheckChanged = event => {
		let filterName = event.target.getAttribute('filtername');

		if (event.target.checked && this.selectedFilters.indexOf(filterName) == -1) {
			this.selectedFilters.push(filterName);
			this.props.setSelectedClassFilters(this.selectedFilters);
		}
		else if (!event.target.checked) {
			let index = this.selectedFilters.indexOf(filterName);
			if (index != -1) {
				this.selectedFilters.splice(index, 1);
				this.props.setSelectedClassFilters(this.selectedFilters);
			}
		}
	}

	onConditionCheckChanged = event => {
		if (event.target.getAttribute('filtername') == "new")
			this.conditionNewSelected = event.target.checked;
		else
			this.conditionUsedSelected = event.target.checked;

		this.props.setNewUsedFlags(this.conditionNewSelected, this.conditionUsedSelected);
	}

	render() {
		let classChecks = this.classFilters.map(item =>
			<label className="check-container">{item}
          <input type="checkbox" filtername={item} onChange={this.onClassCheckChanged} />
          <span className="checkmark"></span>
      </label>);

		let conditionChecks = [
			<label className="check-container">New
          <input type="checkbox" filtername="new" onChange={this.onConditionCheckChanged} />
          <span className="checkmark"></span>
      </label>,
      <label className="check-container">Used
          <input type="checkbox" filtername="used" onChange={this.onConditionCheckChanged} />
          <span className="checkmark"></span>
      </label>			
		]

		return (
			<div className='filters-container'>
				<h3>FILTER</h3>
				<div className='filters-container-section'>
					<h4>Class</h4>
					{ classChecks }
				</div>
				<div className='filters-container-section'>
					<h4>Condition</h4>
					{ conditionChecks }
				</div>
			</div>
		);
	}
}

export default Filters;