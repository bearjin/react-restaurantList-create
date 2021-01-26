/*global kakao*/
import React, { Component } from "react";

class LunchMap extends Component {
    componentDidMount() {
        var _script = document.createElement('script');
        _script.async = true;
        _script.src = '//dapi.kakao.com/v2/maps/sdk.js?appkey=20a534107673271022647d90e5904fa9&libraries=services&autoload=false';
        document.head.appendChild(_script);

        _script.onload = () => {
            kakao.maps.load(() => {
                this.renderMap();
            });
        }
    }
    componentDidUpdate() {
        this.renderMap();
    }
    renderMap() {
        var _data = this.props.data;
        var _randomIdx = this.props.randomIdx;
        var mapContainer = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
        var mapOptions = { //지도를 생성할 때 필요한 기본 옵션
            center: new kakao.maps.LatLng(37.514231193517524, 127.01766512466264), //지도의 중심좌표.
            level: 3 //지도의 레벨(확대, 축소 정도)
        };

        //지도 생성 및 객체 리턴
        var map = new kakao.maps.Map(mapContainer, mapOptions);

        var icon = new kakao.maps.MarkerImage(
            'https://bearjin.github.io/react-restaurantList-create//images/uber_marker.png',
            new kakao.maps.Size(37, 48),
            {
                alt: "UBER UID TEAM",
            }
        );

        // 주소-좌표 변환 객체를 생성합니다
        var geocoder = new kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(_data[_randomIdx].address, function (result, status) {
            // 정상적으로 검색이 완료됐으면
            if (status === kakao.maps.services.Status.OK) {

                var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

                // 결과값으로 받은 위치를 마커로 표시합니다
                var marker = new kakao.maps.Marker({
                    map: map,
                    position: coords,
                    image: icon
                });

                // 인포윈도우로 장소에 대한 설명을 표시합니다
                var infowindow = new kakao.maps.InfoWindow({
                    content: '<div style="width:150px;text-align:center;padding:6px 0;">' + _data[_randomIdx].menu + '</div>'
                });
                infowindow.open(map, marker);

                // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                map.setCenter(coords);
            }
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