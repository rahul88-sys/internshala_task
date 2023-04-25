import "./App.css";
import Data2 from './components/Data2';
import Data3 from "./components/Data3";
import Data4 from "./components/Data4";
import Data5 from "./components/Data5";
import Data1 from "./components/Data1";
//import Json from '../public/data.json'
function App() {

  return (
    <>
  <div style={{'textAlign':'center','textDecoration':'underline'}}><h3>Below All Data Match With Condition</h3>
    
  <div class="box"><Data1/></div>
  <div class="box"><Data2/></div>
  <div class="box"><Data3/></div>
  <div class="box"><Data4/></div>
  <div class="box"><Data5/></div>
  </div>

 
    </>
  );
}

export default App;
