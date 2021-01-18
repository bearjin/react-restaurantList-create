import React, { Component } from "react";

class LunchMenuList extends Component {
    makeMenuList() {
        var menuList = this.props.data.map((elm, _idx) => {
            return (
                <li key={_idx} className="list">
                    <a href="/" className="name" country={elm.country} mainmenu={elm.main_menu}>{_idx}. {elm.menu}</a>
                    <button type="button" data-idx={_idx} onClick={function (e) {
                        e.preventDefault();
                        this.props.onDeleteMenu(e.target.dataset.idx);
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