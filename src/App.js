import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Page from "./pages/Page";
import Panier from "./components/Panier";
import Paiement from "./components/Paiement";
import styled from 'styled-components';


const Body = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
border: solid;
margin: 4px;
padding: 4px;
`;

const Header = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
border: solid;
margin: 4px;
padding: 4px;
`;

function App() {
  return (
    <Router>
      <div>
        <Header>
          <NavLink to="/menus">Menus</NavLink>
          <NavLink to="/sandwiches">Sandwiches</NavLink>
          <NavLink to="/boissons">Boissons</NavLink>
          <NavLink to="/desserts">Desserts</NavLink>
        </Header>
        <Body>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/menus">menu
          </Route>
            <Route path="/sandwiches"><Page name="sandwiches" type="ADD_SANDWICH" /><Panier />
            </Route>
            <Route path="/boissons"><Page name="boissons" type="ADD_BOISSON" /><Panier />
            </Route>
            <Route path="/desserts"><Page name="desserts" type="ADD_DESSERT" /><Panier />
            </Route>
            <Route exact path="/paiement">
              <Paiement />
            </Route>
          </Switch>
        </Body>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Bienvenue !</h2>
    </div>
  );
}




export default App;
