import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from 'Components/Home';
import CartPage from 'Components/CartPage';

function AppRoutes() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/cart" exact component={CartPage} />
			</Switch>
		</Router>
	);
}

export default AppRoutes;
