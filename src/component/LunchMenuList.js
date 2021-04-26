import React, { Component } from "react";

class LunchMenuList extends Component {
    makeMenuList() {
        var menuList = this.props.data.map((elm, _idx) => {
            return (
                <li key={_idx} className="list">
                    <a href="/" className="name" mainmenu={elm.main_menu} onClick={function (e) {
                        e.preventDefault();
                        this.props.onChangeIdx(_idx);
                    }.bind(this)}>{_idx + 1}. {elm.name}</a>
                    <button type="button" onClick={function (e) {
                        e.preventDefault();
                        this.props.onDeleteMenu(_idx);
                    }.bind(this)}>메뉴 삭제</button>
                </li>
            );
        });
        return menuList;
    }
    render() {
        return (
            <ul className="menu_list">
                {this.makeMenuList()}
            </ul>
        );
    }
}

export default LunchMenuList;