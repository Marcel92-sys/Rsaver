import Profile from './components/Profile';
import { BrowserRouter , Route, Switch} from 'react-router-dom'

import Details from './components/Details';

import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          
          <div>


            <Switch>
              
                

              <Route exact path='/profile' component={Profile} />
                
              <Route exact path='/details'  component={Details} />
              
            <Route exact path='/' component={Home} />
          
            </Switch>
          </div>
            
        </div>
      
      </BrowserRouter>
    
    
    </div>
  );
}

export default App;
