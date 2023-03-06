import "./App.css";
import Header from "./components/Header";
import AddEmployee from "./components/AddEmployee";
import FetchEmployee from "./components/FetchEmployee";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UpdateEmployee from "./components/UpdateEmployee";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={FetchEmployee} />
          <Route exact path="/add" component={AddEmployee} />
          <Route exact path="/fetch" component={FetchEmployee} />
          <Route exact path="/editentry/:id" component={UpdateEmployee} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
