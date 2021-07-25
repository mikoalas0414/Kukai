import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/app.sass";
import "./assets/css/sass/main.scss";
import Page from "./components/Page";
import Home from "./screens/Home";
import Create from "./screens/Create";
import ConnectWallet from "./screens/ConnectWallet";
import Faq from "./screens/Faq";
import Activity from "./screens/Activity";
import Search02 from "./screens/Search02";
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
          path="/connect-wallet"
          render={() => (
            <Page>
              <ConnectWallet />
            </Page>
          )}
        />
        <Route
          exact
          path="/faq"
          render={() => (
            <Page>
              <Faq />
            </Page>
          )}
        />
        <Route
          exact
          path="/activity"
          render={() => (
            <Page>
              <Activity />
            </Page>
          )}
        />
        <Route
          exact
          path="/search02"
          render={() => (
            <Page>
              <Search02 />
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
          path="/list/:name"
          render={({ match }) => (
            <Page>
              <List name={match.params.name} />
            </Page>
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
