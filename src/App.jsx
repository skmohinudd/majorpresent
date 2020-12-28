import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Products from './pages/Products';
import SignUp from './pages/Signup';
import Child from './pages/Children'
import SuccesForm from './pages/SuccesForm';

function App() {
	return (
		<>
		<Router>
		
		<Route path='/sign-up'  component={SignUp} />
			<Navbar/>
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/services'  component={Services} />
				<Route path='/products'  component={Products} />
				<Route path = '/children' component={Child}/>
				<Route path = '/succesform' component = {SuccesForm}/>
				
				
			</Switch>
		</Router>
		</>
	)
}

export default App;
