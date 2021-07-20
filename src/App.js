import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavigationBar from './Components/NavBar/index';
import {AiFillAccountBook} from 'react-icons/ai'
import TopLogo from './Components/SideBar/index';


function App() {
  console.log(Router)
  return (
    <div className="">
      <Router>
        <AiFillAccountBook />
        <NavigationBar />
        <h1></h1>

        <TopLogo />
      
      </Router>
    </div>
  );
}

export default App;
