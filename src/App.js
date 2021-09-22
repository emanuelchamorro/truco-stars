import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import {Navbar} from './components/navbar/Navbar'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './pages/home/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component= {Home} />
      </Switch>
    </Router>
  );
}

export default App;
