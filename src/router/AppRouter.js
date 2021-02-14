import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import HomePage from "../components/HomePage";
import NotFound from "../components/NotFound";

const AppRouter = () => {
	return (
		<div className="AppRouter">
			<BrowserRouter>
				<Header />
				<div className="main-content">
					<Switch>
						<Route component={HomePage} path="/" exact={true}></Route>
						<Route component={Gallery} path="/gallery"></Route>
						<Route component={NotFound}></Route>
					</Switch>
				</div>
			</BrowserRouter>
		</div>
	);
};

export default AppRouter;
