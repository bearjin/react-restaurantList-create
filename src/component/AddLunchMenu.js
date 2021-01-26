import React, { Component } from "react";

class AddLunchMenu extends Component {
    render() {
        return (
            <form className="new_menu" action="/create-list" method="post"
                onSubmit={function (e) {
                    e.preventDefault();
                    this.props.onAddMenu(
                        e.target.menuname.value,
                        e.target.menucountry.value,
                        e.target.mainmenu.value,
                        e.target.address.value,
                    )
                }.bind(this)}
            >
                <h3>식당 추가 하기</h3>
                <ul className="add_menu_list">
                    <li>
                        <label htmlFor="menuName">이름 :</label>
                        <input
                            type="text"
                            name="menuname"
                            id="menuName"
                            placeholder="추가 할 식당의 이름을 적어주세요."
                        ></input>
                    </li>
                    <li>
                        <label htmlFor="menuCountry">종류 :</label>
                        <input
                            type="text"
                            name="menucountry"
                            id="menuCountry"
                            placeholder="추가 할 식당의 종류를 적어주세요."
                        ></input>
                    </li>
                    <li>
                        <label htmlFor="mainMenu">대표 메뉴 :</label>
                        <input
                            type="text"
                            name="mainmenu"
                            id="mainMenu"
                            placeholder="추가 할 식당의 대표 메뉴를 적어주세요."
                        ></input>
                    </li>
                    <li>
                        <label htmlFor="address">주소 :</label>
                        <input
                            type="text"
                            name="address"
                            id="address"
                            placeholder="추가 할 식당의 주소를 적어주세요."
                        ></input>
                    </li>
                    <li>
                        <input type="submit" value="추가하기"></input>
                    </li>
                </ul>
            </form>
        );
    }
}

export default AddLunchMenu;