import '.styles/styles';
import LunchBox from './component/LunchBox';
import RandomMenu from './component/RandomMenu';
import Map from './component/Map';

function App() {
  return (
    <div className="App">
      <p className="main_title">Uid 점심 메뉴 리스트</p>
      <LunchBox></LunchBox>
      <RandomMenu></RandomMenu>
      <Map></Map>
    </div>
  );
}

export default App;