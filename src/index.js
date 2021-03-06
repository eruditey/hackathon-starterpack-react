import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import './index.css';
import { Auth } from './firebase';
import AppLayout from './components/dashboard/AppLayout';

import HomePage from './components/dashboard/pages/Home';
import RegisterPage from './components/landing/pages/Register';
import LoginPage from './components/landing/pages/Login';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: null
		};
	}

	componentDidMount() {
		Auth.observeAuthState(user => {
			console.log(user);
			if (user === undefined) {
				// waiting for Auth result
			} else if (user === null) {
				// not authenticated, so auth now
				setTimeout(Auth.authWithGoogle, 10000);
			} else {
				// logged in, so log out for demo puposes
				setTimeout(Auth.signOut, 10000);
			}
		});
	}

	isLoggedIn() {
		return this.state.user != null;
	}

	render() {
		// For transitions see: https://reacttraining.com/react-router/web/example/animated-transitions
		return (
			<Router >
				<div>
					<Route path="/login" component={LoginPage} />
					<Route path="/register" component={RegisterPage} />

					<Route exact path="/" component={() =>
						<AppLayout>
							<Route exact path="/" component={HomePage} />
						</AppLayout>
					} />

				</div>
			</Router>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
