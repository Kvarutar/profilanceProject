import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import {login} from '../../actions';
import './popup.sass';
import close from './x-solid.svg'

const Popup = ({onPopup, isActive}) => {
	const [userLogin, setLogin] = useState(''),
		  [password, setPassword] = useState(''),
		  [isCorrect, setCorrect] = useState(true),
		  {user} = useSelector(state => state),
          dispatch = useDispatch(),
		  navigate = useNavigate();

	const onLogin = (e) => {
        e.preventDefault()

        if (!!user.find(el => el.login === userLogin && el.password === password)){

			let newLogin = user.find(el => el.login === userLogin);
            dispatch(login({login: newLogin.login, rights: newLogin.rights}));

			setCorrect(true);
			setLogin('');
			setPassword('');
			onPopup();
			navigate('/');
        } else {
			setCorrect(false);
        }
	}

	const onClose = () => {
		setLogin('');
		setPassword('');
		onPopup();
		setCorrect(true);
	}

	let loginError = isCorrect ? null : <p className='popup__error'>Логин или пароль неверный</p>
	let popupClass = isActive ? 'popup' : 'popup popup__hidden'
	return(
		<div className={popupClass}>
			<div className="popup__wrapper">
				<p className="popup__title">Войти в систему</p>
				<div className='popup__close' onClick={() => onClose()}><img src={close} alt="close"/></div>
				<input placeholder="Логин" type='text' className='popup-input' value={userLogin} onChange={(e) => setLogin(e.target.value)}></input>
				<input placeholder="Пароль" type='password' className='popup-input' value={password} onChange={(e) => setPassword(e.target.value)}></input>
				{loginError}
				<button className='popup__btn btn'  onClick={(e) => onLogin(e)}>Войти</button>
			</div>
		</div>
	)
}

export default Popup;