import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'

import SignIn from './pages/signIn/signIn'
import Admin from './pages/admin/admin'
export default class App extends React.Component {
	render () {
		return (
			<BrowserRouter>
				<Switch>
					<Route path="/signIn" component={SignIn}></Route>
					<Route path="/" component={Admin}></Route>
				</Switch>
			</BrowserRouter>
		)
	}
}