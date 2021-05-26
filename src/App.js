import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <div className='wrap-content'>
        <div className='container indigo lighten-2'>
          <Router>
            <Route exct path='/' component={Home} />
          </Router>
        </div>
    </div>
  );
}

export default App;
