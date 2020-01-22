import React from 'react';
import { withRouter } from 'react-router-dom';
import OctoButton from '../components/OctoButton';
import InventoryListItem from '../components/InventoryListItem';
import InventoryItem from '../models/InventoryItem';

const PROMO_DOTD = 1;// 'Deal of the day' is promo id 1

class HomePage extends React.Component {
	state = {
		dotd: null
	}

	taglines = [
		'Dark side? Light side? No problem! Your kind is welcome here.',
		'No Imerperial credit? No problem! No bounty-check required.',
		'The best prices in the galaxy! "Honest".',
		'You\'re "OK" with Gar!'
	];

	browse = () => {
		this.props.history.push('/browse');
	}

	componentDidMount() {
		if (!this.state.dotd) {
			InventoryItem.withPromoId(PROMO_DOTD)
			//InventoryItem.withId(3)
			.then(response => {
				console.log("DOTD:", response);
				this.setState({ dotd: response });
			});
		}
	}

	render() {
		let logotext = this.taglines[Math.floor(Math.random() * this.taglines.length)];

		return (
			<div className='home-page'>
				<div className='home-logo-container'>
					<img className='home-logo-gar' src='HonestGar_newColor.png' />
					<div className='home-logo-text'>
						<h1>"HONEST" GAR'S<br/>STARSHIP SURPLUS</h1>
						<div className='home-logo-text-divider' />
						<h3>{logotext}</h3>
					</div>
				</div>
				<OctoButton text="BROWSE SHIPS" onClick={this.browse} />
				<div className='home-dotd-header'>
					GAR'S DEAL OF THE DAY
				</div>
				<InventoryListItem ship={this.state.dotd} dotd />
			</div>
		);
	}
}

export default withRouter(HomePage);