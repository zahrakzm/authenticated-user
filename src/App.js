
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import UsersList from "./components/UsersList";
import LogOut from "./components/Logout";

function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/users" component={UsersList} />
          <Route path="/logout" component={LogOut} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
