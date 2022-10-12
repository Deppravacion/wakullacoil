import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

//Pages
import Home from './pages/Home';
import Contact from './pages/ContactPage';
import AboutUs from './pages/AboutUsPage';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<Router>
      {/* all of the components within router will have global styles */}
			<GlobalStyle /> 
			<Navbar />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/aboutus" exact component={AboutUs} />
				<Route path="/contact" exact component={Contact} />
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;