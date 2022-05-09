import { useSelector } from 'react-redux';
import './home.sass'

const Home = () => {
    const {activeUser} = useSelector(state => state);

    return(
        <div className="home">
            <div className="container">
                <h1 className="home__title">{`Привет, ${activeUser.login}`}</h1>
            </div>
        </div>
    )
}

export default Home;