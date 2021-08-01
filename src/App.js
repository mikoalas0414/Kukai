import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/app.sass";
import "./assets/css/sass/main.scss";
import Page from "./components/Page";
import Home from "./screens/Home";
import Create from "./screens/Create";
import Collection from "./screens/Collection";
import Item from "./screens/Item";
import List from "./screens/List";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Page>
              <Home />
            </Page>
          )}
        />
        <Route
          exact
          path="/create"
          render={() => (
            <Page>
              <Create />
            </Page>
          )}
        />
        <Route
          exact
          path="/collection"
          render={() => (
            <Page>
              <Collection />
            </Page>
          )}
        />
        <Route
          exact
          path="/item/:id"
          render={({ match }) => (
            <Page>
              <Item id={match.params.id} />
            </Page>
          )}
        />
        <Route
          exact
          path="/list/:address"
          render={({ match }) => (
            <Page>
              <List address={match.params.address} />
            </Page>
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
