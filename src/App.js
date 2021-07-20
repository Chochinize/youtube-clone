import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavigationBar from './Components/NavBar/index';
import {AiFillAccountBook} from 'react-icons/ai'
import TopLogo from './Components/SideBar/index';


function App() {
  return (
    <div className="">
      <Router>
        <NavigationBar />
      
      </Router>
    </div>
  );
}

export default App;
