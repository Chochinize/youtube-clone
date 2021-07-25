import {BrowserRouter as Router, Link, Route, Switch,useParams} from 'react-router-dom';
import BsideBar from './Components/BodyContent/VideoPage/Watch/BsideBar/BsideBar';
import Explore from './Components/SideBar/TopLogo/Explore';
import Navigation from './Components/index';


function App() {


  

  return (
    <div className="">
      <Router>

        <Navigation/>
  

       

          
          
      <ul>
        <li>
          <Link to='/expole' >dsadasdas</Link>
       
        </li>
      </ul>



   
        <Switch>
              
        </Switch>

  
      </Router>
    </div>
  );
}

export default App;
