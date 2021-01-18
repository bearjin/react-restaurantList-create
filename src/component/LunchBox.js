import React, { Component } from "react";
import AddLunchMenu from './AddLunchMenu';
import LunchMenuList from './LunchMenuList';

class LunchBox extends Component {
    constructor(props) {
        super(props);
        this.maxIdx = 24;
        this.state = {
            data: this.props.data
        }
    }

    render() {
        return (
            <div id="lunchBox" className="box">
                <div className="inner">
                    <AddLunchMenu
                        onAddMenu={function (_name, _country, _mainmenu) {
                            this.maxIdx = this.maxIdx + 1;
                            var newData = Array.from(this.state.data);

                            newData.push(
                                {
                                    menu: _name,
                                    country: _country,
                                    main_menu: _mainmenu
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
                                this.maxIdx = this.maxIdx - 1;
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
                    ></LunchMenuList>
                </div>
            </div>
        );
    }
}

export default LunchBox;