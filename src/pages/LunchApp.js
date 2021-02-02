import '../sub.css';
import React, { Component } from "react";
import RandomMenu from '../component/RandomMenu';
import LunchMap from '../component/LunchMap';
import AddLunchMenu from '../component/AddLunchMenu';
import LunchMenuList from '../component/LunchMenuList';
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
				<p className="main_title">점심 메뉴 리스트</p>
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
						<LunchMap data={this.state.data} randomIdx={this.state.randomIdx}></LunchMap>
					</div>
					<div className="right">
						<div id="lunchBox" className="box">
							<div className="inner">
								<AddLunchMenu
									onAddMenu={function (_name, _country, _mainmenu, _address) {
										var newData = Array.from(this.state.data);

										newData.push(
											{
												menu: _name,
												country: _country,
												main_menu: _mainmenu,
												address: _address
											}
										);
										this.setState({
											data: newData
										});
										alert("메뉴가 추가 되었습니다.");
									}.bind(this)}
								></AddLunchMenu>
								<LunchMenuList
									data={this.state.data}
									onDeleteMenu={function (_idx) {
										if (window.confirm("정말 삭제하시겠습니다?")) {
											var newData = Array.from(this.state.data);
											var i = 0;

											while (i < newData.length) {
												if (i === Number(_idx)) {
													newData.splice(i, 1);
													break;
												}
												i = i + 1;
											}
											this.setState({
												data: newData
											});
											alert("메뉴가 삭제 되었습니다.");
										}
									}.bind(this)}
									onChangeIdx={function (_idx) {
										this.setState({
											randomIdx: _idx,
										});
									}.bind(this)}
								></LunchMenuList>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;