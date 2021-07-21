import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavigationBar from './Components/NavBar/index';
import SideBar from './Components/index';


function App() {
  return (
    <div className="">
      <Router>
        <NavigationBar />
        <SideBar />
        <Switch>
          



        </Switch>
      </Router>
    </div>
  );
}

export default App;
