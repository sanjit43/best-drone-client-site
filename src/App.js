import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import Purchase from './Pages/Purchase/Purchase';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import PrivateRouter from './PrivateRouter/PrivateRouter';
import DashBoard from './Pages/DashBoard/DashBoard/DashBoard';
import Payment from './Pages/DashBoard/DashBoard/Payment';
import Review from './Pages/DashBoard/DashBoard/Review';
import Admin from './Pages/DashBoard/Admin';
import AddProduct from './Pages/DashBoard/DashBoard/AddProduct';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/products'>
            <Products></Products>
          </Route>
          <PrivateRouter path='/purchase/:id'>
            <Purchase></Purchase>
          </PrivateRouter>
          <PrivateRouter path='/dashboard'>
            <DashBoard></DashBoard>
          </PrivateRouter>
          <Route path='/payment'>
            <Payment></Payment>
          </Route>
          <Route path='/review'>
            <Review></Review>
          </Route>
          <Route path='/admin'>
            <Admin></Admin>
          </Route>
          <Route path='/addproduct'>
            <AddProduct></AddProduct>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/register'>
            <Register></Register>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
