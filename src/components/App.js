import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Forgot from "./Forgot/Forgot";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import Success from "./Success/Success";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/" component={Login} />
        <Route exact path="/success" component={Success} />
        <Route exact path="/forgot" component={Forgot} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
