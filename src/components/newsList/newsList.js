import {useCallback} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useState} from 'react';
import NewsListItem from '../newsListItem/newsListItem';
import {filterNews, deleteNews} from '../../actions';
import AddNewsForm from '../addNewsForm/addNewsForm';
import './newsList.sass'

const NewsList = () => {

    const {filteredNews, filter, activeUser} = useSelector(state => state);
    const [isAdd, setAdd] = useState(true);
    const dispatch = useDispatch();

    let onDeleteNews = useCallback((id) => {
        dispatch(deleteNews(id))
    })

    let onHandleChange = (e) => {
        dispatch(filterNews(e.target.value))
    }

    let onAddNews = () => {
        setAdd(!isAdd)
    }   
    
    let renderNewsItems = (rightsNews) => {
        if (rightsNews.length === 0){
            return <p>Новостей пока нет</p>
        }

        return rightsNews.map(({id, ...props}) => {
            return <NewsListItem onDeleteNews={() => onDeleteNews(id)} key={id} id={id} {...props}/>
        })
    }

    let rightsNews = activeUser.rights === 'admin' ? filteredNews : filteredNews.filter(el => el.approve === true)

    let content = renderNewsItems(rightsNews)
    /* let addClass = isAdd ? ; */
    /* let content = isAdd ? <AddNewsForm/> : renderNewsItems(rightsNews); */
    return(
        <div className="news">
            <div className="container">
                <div className="news__search">
                    <input placeholder='Введите название новости' 
                           className="news__search--input" 
                           onChange={(e) => onHandleChange(e)} 
                           value={filter}/>
                    <div className="news__search--add">
                        <button className='btn' onClick={() => onAddNews()}>Добавить новость</button>
                        <AddNewsForm isAdd={isAdd} onAddNews={onAddNews}/>
                    </div>
                </div>
                <div className="news__items">
                    {content}
                </div>
            </div>
        </div>
    )
}

export default NewsList;