import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './Components/NavBar/index';
import {AiFillAccountBook} from 'react-icons/ai'
function App() {
  return (
    <div className="">
      <Router>
        <AiFillAccountBook />
        <NavBar />
        <h1>YOUTUBdasdasE</h1>
      
      </Router>
    </div>
  );
}

export default App;
