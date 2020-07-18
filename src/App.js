import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
// import Menu from "./FoodMenu";    //// eliminated to reduce duplicate
// import Snack from "./FoodItem";   //// eliminated to reduce duplicate
import Item from './Item';
import List from './List';
import PageNotFound from './Status404';
import ItemForm from './ItemForm';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function getSnacks() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      setSnacks(snacks);
      setIsLoading(false);
    }
    getSnacks();
  }, []);

  useEffect(() => {
    async function getDrinks() {
      let drinks = await SnackOrBoozeApi.getDrinks();
      setDrinks(drinks);
      setIsLoading(false);
    }
    getDrinks();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home snacks={snacks} drinks={drinks}/>
            </Route>

            {/* <Route exact path="/snacks">
              <Menu snacks={snacks} title="Snacks" />
            </Route>
            <Route path="/snacks/:id">
              <Snack items={snacks} cantFind="/snacks" />
            </Route> */}

            <Route exact path="/snacks">
              <List items={snacks} title="snacks" />
            </Route>
            <Route path="/snacks/:id">
              <Item items={snacks} cantFind="/snacks" />
            </Route>

            <Route exact path="/drinks">
              <List items={drinks} title="drinks" />
            </Route>
            <Route path="/drinks/:id">
              <Item items={drinks} cantFind="/drinks" />
            </Route>

            <Route exact path="/add/snacks">
              <ItemForm title="snacks"/>
            </Route>
            <Route exact path="/add/drinks">
              <ItemForm title="drinks"/>
            </Route>

            <Route>
              {/* <p>Hmmm. I can't seem to find what you want.</p> */}
              <PageNotFound />
            </Route>
            
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
