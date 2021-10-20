import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";
import Doctor from "./Components/Home/Doctor/Doctor";
import Doctors from "./Components/Home/Doctors/Doctors";
import Donate from "./Components/Home/Donate/Donate";
import Home from "./Components/Home/Home/Home";
import Service from "./Components/Home/Service/Service";
import Services from "./Components/Home/Services/Services";
import Login from "./Components/Login/Login/Login";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute";
import NotFound from "./Components/NotFound/NotFound";
import PrivateRoute2 from "./Components/PrivateRoute2/PrivateRoute2";
import Register from "./Components/Register/Register";
import Footer from "./Components/Shared/Footer/Footer";
import Header from "./Components/Shared/Header/Header";
import Taking from "./Components/Taking/Taking/Taking";
import AuthProvider from "./contexts/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/doctors">
              <Doctors></Doctors>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/taking/:serviceId">
              <Taking></Taking>
            </PrivateRoute>
            <PrivateRoute path="/donate">
              <Donate></Donate>
            </PrivateRoute>
            <Route path="*">
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
