import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavigationBar from './Components/NavBar/index';
import Icons from './Components/index';


function App() {
  return (
    <div className="">
      <Router>
        <NavigationBar />
        <Icons />
      
      </Router>
    </div>
  );
}

export default App;
