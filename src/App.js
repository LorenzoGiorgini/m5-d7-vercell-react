import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from './views/Home'
import AddProduct from './views/AddProduct'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Router>
        <NavBar/>
        <Route path="/" exact component={Home}/>
        <Route path="/AddProduct" exact component={AddProduct}/>
      </Router>
    </div>
  );
}

export default App;