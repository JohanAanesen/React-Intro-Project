import React from "react";
import { Redirect, Switch, Route } from "react-router";
import Home from "./components/Home"
import About from "./components/About"
import Login from "./components/Login"
import Profile from "./components/Profile"
import Sudoku from "./components/Sudoku"
import Todo from "./components/Todo"

export default function Router() {
    return(
	<Switch>
		<Route exact path="/home" component={Home} />
		<Route path="/about" component={About} />
		<Route path="/login" component={Login} />
        <Route path="/sudoku" component={Sudoku} />
        <Route path="/todo" component={Todo} />
        <Route path="/profile/:id" component={Profile} />

		<Redirect from="/" exact to="/home" />
    </Switch>
    );
}
