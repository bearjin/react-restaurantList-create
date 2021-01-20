# 주변 식당 리스트 만들기
점심 메뉴를 무엇을 먹을지 고르기 힘들 때를 경험으로 주변 식당 리스트를 만들고 랜덤으로 점심 메뉴를 선택해주는 기능을 만들었습니다.
새로 생긴 곳 또는 문을 닫는 곳이 생길 경우도 고려해 추가 및 삭제 기능과 함께 식당의 대표 메뉴, 위치를 보여주는 기능도 추가 할 예정 입니다.

[Restaurant-list](https://bearjin.github.io/react-restaurantList-create/)

## 리스트 만들기
restaurant-list-data 파일로 식당들의 데이터를 관리하고 LunchMenuList 에서 식당들의 데이터를 가지고 리스트들을 생성해 줍니다.

## 랜덤
RandomMenu 에서 메뉴 랜덤 선택하기를 클릭 했을 때 메뉴를 랜덤으로 선택해주고 결과를 아래 부분에 텍스트로 보여줍니다.

## 식당 추가
AddLunchMenu 에서 입력한 데이터들의 값을 받아와 식당 리스트 데이터에 추가합니다. 이후 state를 변경하여 바뀐 리스트들을 새롭게 그려줍니다.

## 식당 삭제
식당 리스트 마다 메뉴 삭제 버튼을 가지고 있고 삭제하고 싶은 메뉴의 메뉴삭제 버튼을 클릭 했을 때 정말 삭제할것인지 여부 확인 후 클릭 한 버튼의 data-idx 값을 가지고 해당 데이터를 찾아 삭제합니다. 이후 state를 변경하여 바뀐 리스트들을 새롭게 그려줍니다.

## 위치
현재 위치 지도만 적용 되어 있는 상태