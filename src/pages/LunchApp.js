import '../sub.css';
import React, { Component } from "react";
import LunchBox from '../component/LunchBox';
import RandomMenu from '../component/RandomMenu';
import LunchMap from '../component/LunchMap';
import RestaurantData from '../restaurant-list-data';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: RestaurantData,
			randomIdx: 0,
		}
	}
	render() {
		return (
			<div className="App">
				<p className="main_title">Uid 점심 메뉴 리스트</p>
				<div className="lunch_wrap">
					<div className="left">
						<RandomMenu
							data={this.state.data}
							onChangeIdx={function (_idx) {
								this.setState({
									randomIdx: _idx,
								});
							}.bind(this)}
							randomIdx={this.state.randomIdx}
						></RandomMenu>
						<LunchMap></LunchMap>
					</div>
					<div className="right">
						<LunchBox data={this.state.data}></LunchBox>
					</div>
				</div>
			</div>
		);
	}
}

export default App;