import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavigationBar from './Components/NavBar/index';
import {AiFillAccountBook} from 'react-icons/ai'

function App() {
  console.log(Router)
  return (
    <div className="">
      <Router>
        <AiFillAccountBook />
        <NavigationBar />
        <h1>YOUTUBdasdasE</h1>
      
      </Router>
    </div>
  );
}

export default App;
