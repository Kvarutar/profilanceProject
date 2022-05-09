import { useDispatch, useSelector } from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';
import {logout} from '../../actions';
import logo from './logo.svg';
import './header.sass'

const Header = ({onPopup}) => {
    const {activeUser} = useSelector(state => state),
          dispatch = useDispatch(),
          navigate = useNavigate();

    const onLogout = () => {
        dispatch(logout())
        navigate('/');
    }

    let btns = activeUser.rights === 'guest' ? <button className="header__btn btn" onClick={onPopup}>Войти</button> : <button className="header__btn btn" onClick={() => onLogout()}>Выйти</button>
    return(
        <div className='header'>
            <Link to="/" className='header__logo'><img src={logo}/></Link>
            <div className="header__info">
                <Link to="/news" className='header__link'>Новости</Link>
                {btns}
            </div>
        </div>
    )
}

export default Header