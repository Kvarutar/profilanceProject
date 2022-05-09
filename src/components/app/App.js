import NewsList from '../newsList/newsList';
import Header from '../header/header'
import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Popup from '../popup/popup';
import Home from '../home/home'
import '../../fonts/stylesheet.css';
import './App.sass'


const App = () => {
	const [isPopupActive, togglePopupActive] = useState(false);

	return(
		<BrowserRouter>
			<Popup onPopup={() => togglePopupActive(!isPopupActive)} isActive={isPopupActive}/>
			<div className="page__wrapper">
				<Header onPopup={() => togglePopupActive(!isPopupActive)}/>
				<Routes>
					<Route exact path='/' element={<Home/>}/>
					<Route exact path='/news' element={<NewsList/>}/>	
				</Routes>
				
			</div>
		</BrowserRouter>
	)
}

export default App;