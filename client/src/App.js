import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import AddCartoon from "./screens/AddCartoon";
import Cartoons from "./screens/Cartoons";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <Nav user={user} setUser={setUser} />
      <Switch>
        <main>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">
            <Register setUser={setUser} />
          </Route>
          <Route path="/login">
            <Login setUser={setUser} />
          </Route>
          <Route path="/new">
            <AddCartoon />
          </Route>
          <Route path="/cartoons">
            <Cartoons user={user} />
          </Route>
        </main>
      </Switch>
    </div>
  );
}

export default App;