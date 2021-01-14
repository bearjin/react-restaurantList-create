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
                    <button onClick={function (e) {
                        e.preventDefault();
                        var randomIdx = this.getRandomInt(0, this.props.data.length);
                        this.props.onChangeIdx(randomIdx);
                    }.bind(this)}>메뉴 랜덤 선택하기</button>
                    <p>결과 : <span className="result">{this.props.data[this.props.randomIdx].menu}</span></p>
                    <p><span className="result_country">{this.props.data[this.props.randomIdx].country}</span></p>
                    <p>대표메뉴 : <span className="result_main">{this.props.data[this.props.randomIdx].main_menu}</span></p>
                </div>
            </div>
        );
    }
}

export default RandomMenu;