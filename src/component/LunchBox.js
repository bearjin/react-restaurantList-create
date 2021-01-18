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
                    <LunchMenuList data={this.state.data} onDeleteMenu={function (_idx) {
                        if (window.confirm("정말 삭제하시겠습니다?")) {
                            var newData = Array.from(this.state.data);
                            var i = 0;

                            while (i < newData.length) {
                                if (newData[i].idx === Number(_idx)) {
                                    newData.splice(i, 1);
                                    break;
                                }
                                i = i + 1;
                            }
                            this.setState({
                                data: newData
                            });
                        }
                    }.bind(this)}></LunchMenuList>
                </div>
            </div>
        );
    }
}

export default LunchBox;