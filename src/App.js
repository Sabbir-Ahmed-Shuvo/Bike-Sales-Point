import "./App.css";
import Home from "./pages/Home/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import Details from "./pages/Details/Details";
import Services from "./pages/Home/Services/Services";
import Header from "./pages/Header/Header";
import Footer from "./pages/Footer/Footer";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App overflow-hidden">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute path="/details/:serviceId">
              <Details></Details>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
