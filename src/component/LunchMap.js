/*global kakao*/
import React, { Component } from "react";

class LunchMap extends Component {

    componentDidMount() {
        var _script = document.createElement('script');
        _script.async = true;
        _script.src = '//dapi.kakao.com/v2/maps/sdk.js?appkey=20a534107673271022647d90e5904fa9&autoload=false';
        document.head.appendChild(_script);

        _script.onload = () => {
            kakao.maps.load(() => {
                this.renderMap();
            });
        }
    }
    renderMap() {
        var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
        var options = { //지도를 생성할 때 필요한 기본 옵션
            center: new kakao.maps.LatLng(37.514231193517524, 127.01766512466264), //지도의 중심좌표.
            level: 3 //지도의 레벨(확대, 축소 정도)
        };

        var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

        var icon = new kakao.maps.MarkerImage(
            '/images/uber_marker.png',
            new kakao.maps.Size(37, 48),
            {
                alt: "UBER UID TEAM",
            }
        );

        var marker = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: map.getCenter(), // 마커를 표시할 위치
            image: icon
        });
    }
    render() {
        return (
            <div className="map_wrap">
                <div id="map" className="map"></div>
            </div>
        );
    }
}

export default LunchMap;