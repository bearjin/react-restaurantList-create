import React, { Component } from "react";

class LunchMenuList extends Component {
    makeMenuList() {
        var menuList = [];
        var data = this.props.data;
        var i = 0;
        while (i < data.length) {
            menuList.push(
                <li key={data[i].idx} className="list">
                    <a href="/" className="name" country={data[i].country} mainmenu={data[i].main_menu}>{data[i].idx}. {data[i].menu}</a>
                    <button type="button">메뉴 삭제</button>
                </li>);
            i = i + 1;
        }
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