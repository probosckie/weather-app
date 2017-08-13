import React, { Component } from 'react';
import axios from 'axios';
import load from '../../assets/loading.gif';

class Layout extends Component {
	constructor(){
		super();
		this.state = {
			loading:true,
			url: 'http://api.openweathermap.org/data/2.5/forecast?APPID=8e738a721109fe2822dc4cf193f72c36&q=Bangalore,in&mode=json',
			result:null
		};
	}
	render(){
		const { loading, result } = this.state;
		let resultJSX = !!result && result.list.map((v,i) => {
			let w = v.weather[0];
			let date = new Date(v.dt_txt).toDateString();

			return <li key={i}> Weather for {date} is <br/> {w.main} <br/>{w.description} </li>
		});
		return (<span>
			{
				loading && <span><img src={load} /></span>
			}
			{
				!loading && <div class="container">
					<h1>Presenting the weather in {result.city.name + ', '+ result.city.country} for the next 5 days</h1>
					<ul>
						{resultJSX}
					</ul>

				</div>
			}
		</span>);
	}
	componentDidMount(){
		const { url } = this.state;
		this.setState({
			loading:true
		}, () => {
			axios.get(url)
			.then(r => {
				this.setState({
					loading:false,
					result:r.data
				})
			})	
		});
	}
}

export default Layout;




