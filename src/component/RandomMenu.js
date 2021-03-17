import React, { Component } from "react";

class RandomMenu extends Component {
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
    }
    render() {
        return (
            <div id="randomMenu" className="random_menu">
                <div className="inner">
                    <p>이름 : <span className="result">{this.props.data[this.props.randomIdx].name}</span></p>
                    <p>대표메뉴 : <span className="result_main">{this.props.data[this.props.randomIdx].main_menu}</span></p>
                    <button onClick={function (e) {
                        e.preventDefault();
                        var randomIdx = this.getRandomInt(0, this.props.data.length);
                        this.props.onChangeIdx(randomIdx);
                    }.bind(this)}>메뉴 랜덤 선택하기</button>
                </div>
            </div>
        );
    }
}

export default RandomMenu;