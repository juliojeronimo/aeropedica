import logo from './assets/images/logo-default.png';
// import './App.css';
import { Button } from './components/button'
import { Menu } from './components/menu'


function App() {
  return (
    <div className="App">
      <Menu pageIndex={0} />
      {/* <Button/> */}
    </div>
  );
}

export default App;
