import React, { Component } from "react";
import AddLunchMenu from './AddLunchMenu';
import LunchMenuList from './LunchMenuList';

class LunchBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        }
    }
    render() {
        return (
            <div id="lunchBox" className="box">
                <div className="inner">
                    <AddLunchMenu></AddLunchMenu>
                    <LunchMenuList data={this.state.data}></LunchMenuList>
                </div>
            </div>
        );
    }
}

export default LunchBox;