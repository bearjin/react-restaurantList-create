import React, { Component } from "react";

class AddLunchMenu extends Component {
    render() {
        return (
            <form className="new_menu" action="/create-list" method="post"
                onSubmit={function(e){
                    e.preventDefault();
                    this.props.onSubmit(
                        e.target.newmenu.value,
                    )
                }.bind(this)}
            >
                <label>New Menu</label>
                <input
                    type="text"
                    name="menu"
                    id="newMenu"
                    placeholder="추가 하고 싶은 메뉴 이름을 적어주세요."
                ></input>
            </form>
        );
    }
}

export default AddLunchMenu;