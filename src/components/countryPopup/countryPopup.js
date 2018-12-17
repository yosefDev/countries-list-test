import React, { Component } from 'react';

import singleCountryStore from '../../redux/singleCountry';

import './countryPopup.css'

class countryPopup extends Component {
	constructor(props) {
		super(props);
		singleCountryStore.subscribe(() => {
			this.setState({
				country: singleCountryStore.getState()
			})
		})
	}

	state = {
		country: ""
	}

	onClick = (e) => {
		const { handleClick } = this.props;
		if (e.target === e.currentTarget) {
			handleClick("")
		}
	}
	render() {
		const { country } = this.state;
		if (country) {
			return (
				<div className="overlay" onClick={this.onClick}>
					<div className="countryPopup" id="countryPopup">
						<h2 className="title">{country.name}{country.name !== country.nativeName && ` - ${country.nativeName}`}</h2>
						<img className="flag" src={country.flag} alt={country.name} />
						<div className="info">
							<div className="region">Region: <span className="infoData">{country.region}</span></div>
							<div className="capital">Capital: <span className="infoData">{country.capital}</span></div>
							<div className="languages">Languages: <ul className="langWrapper">
								{country.languages.map(lang => {
									return (
										<li key={`${country.name}_${lang.name}`} className="infoData">{lang.name}<br /></li>
									)
								})}
							</ul>
							</div>
						</div>
					</div>
				</div>
			);
		} else {
			return null
		}
	}
}

export default countryPopup;