import React, { Component } from 'react';
import axios from 'axios';
import singleCountryStore from './redux/singleCountry';
import lisOfCountriesStore from './redux/lisOfCountries';

import Country from './components/country/country';
import Search from './components/search/search';
import Loader from './components/loader/loader';
import CountryPoup from './components/countryPopup/countryPopup';

import './App.css';

class App extends Component {
	constructor(props) {
		super(props);

		lisOfCountriesStore.subscribe(() => {
			this.setState({
				lisOfCountries: lisOfCountriesStore.getState()
			})
		})

		axios.get('https://restcountries.eu/rest/v2/all')
			.then((response) => {
				lisOfCountriesStore.dispatch({ 
					type: 'LIST_OF_COUNTRIES',
					lisOfCountries: response.data 
				})
			})
			.catch((error) => {
				this.setState({ errorMsg: "something went wrong. please try again later" })
			});

	}

	state = {
		lisOfCountries: "",
		errorMsg: "",
		searchTerm: ""
	}

	searchCountry = (search) => {
		let searchTerm = search.target.value.trim().toLowerCase();
		this.setState({ searchTerm })
	}

	selectCountry = (country) => {
		singleCountryStore.dispatch({
			type: 'SINGLE_COUNTRY',
			country
		})
	}

	render() {
		const { lisOfCountries, searchTerm, errorMsg } = this.state;

		if (lisOfCountries) {
			return (
				<div className="app">
					<header className="header">
						<h1 className="title">Countries<span>({lisOfCountries.length})</span></h1>
						<Search handleChange={this.searchCountry} />
					</header>
					<ul className="lisOfCountries">
						{lisOfCountries.filter(v => v.name.toLowerCase().includes(searchTerm)).map(country => {
							return (
								<Country key={country.name} country={country} handleClick={this.selectCountry} />
							)
						})}
					</ul>
					<CountryPoup handleClick={this.selectCountry} />
				</div>
			);
		} else {
			return errorMsg || <Loader />
		}
	}
}

export default App;
