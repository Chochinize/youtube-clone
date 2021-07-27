import {BrowserRouter as Router, Link, Route, Switch,useParams} from 'react-router-dom';
import BsideBar from './Components/BodyContent/VideoPage/Watch/BsideBar/BsideBar';
import Explore from './Components/SideBar/TopLogo/Explore';
import Navigation from './Components/index';
import PassProps from './Components/SideBar/PassProps/PassProps';

function App() {


  

  return (
    <div>
      <Router>

        <Navigation/>
  

       

          
  


        <Switch>
        <Route path='/:id' component={PassProps}/>
          
        

   
              

  
        </Switch>
      </Router>
    </div>
  );
}

export default App;
