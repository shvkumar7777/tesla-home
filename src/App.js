import './App.css';
import Header from './components/Header';
import Accessories from './assets/Desktop-Accessories.jpg'
import Model3 from './assets/Desktop-Model3.jpeg'
import ModelS from './assets/Desktop-ModelS.jpeg'
import ModelX from './assets/Desktop-ModelX.jpeg'
import ModelY from './assets/Desktop-ModelY.jpeg'
import SolarPanels from './assets/Desktop-SolarPanels.jpeg'
import SolarRoof from './assets/Desktop-SolarRoof.jpeg'
import Item from './components/Item';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__itemsContainer">
        <Item 
          title='Lowest car Solar panels in America'
          desc='Money back guarantee'
          descLink=''
          backgroundImg={Accessories}
          leftBtnTxt='Order Now'
          leftBtnLnk=''
          rightBtnTxt='Learn Now'
          rightBtnLnk='' 
          twoButtons='true'/>
      </div>
    </div>
  );
}

export default App;
