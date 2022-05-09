import { useDispatch, useSelector } from 'react-redux';
import {newsApprove} from '../../actions'

const NewsListItem = ({onDeleteNews, title, text, date, id}) => {
    const {activeUser, news} = useSelector(state => state),
          dispatch = useDispatch();

    const onApproved = (id) => {
        dispatch(newsApprove(id))
    }

    let btns;

    //условие добавляет к карточкам новостей кнопки, если пользователь администратор
    if (activeUser.rights === 'admin' && !news.filter(el => el.id === id)[0].approve){
        btns = <div className='news-item__btns'>
            <button className="news-item__delete btn" onClick = {onDeleteNews}>Удалить</button>
            <button className="news-item__approve btn" onClick = {() => onApproved(id)}>Одобрить</button>
        </div>
    } else if (activeUser.rights === 'admin'){
        btns = <div className='news-item__btns'>
            <button className="news-item__delete btn" onClick = {onDeleteNews}>Удалить</button>
        </div>
    }

    return(
        <div className="news-item">
            <div className="news-item__content">
                <h2 className="news-item__title">{title}</h2>
                <h4 className="news-item__date">{date}</h4>
                <h3 className="news-item__text">{text}</h3>
            </div>
            {btns}
        </div>
    )
}

export default NewsListItem;