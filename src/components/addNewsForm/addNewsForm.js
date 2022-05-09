import ReactDOM from 'react-dom'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {v4 as uuid4} from 'uuid';
import {addNews} from '../../actions'
import close from './x-solid.svg'
import './addNewsForm.sass'

const AddNewsForm = ({isAdd, onAddNews}) => {
    const [newTitle, setTitle] = useState(''),
          [newText, setText] = useState(''),
          [isGuest, setGuest] = useState(false),
          {activeUser} = useSelector(state => state),
          dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();

        if (activeUser.rights !== 'guest')
        {
            let curDate = new Date().toLocaleString('ru', {
                month: 'long',
                day: 'numeric'
              });

            let newArticle = {
                id: uuid4(),
                title: newTitle,
                metaTitle: newTitle.toLowerCase(),
                text: newText,
                date: curDate,
                approve: false
            }

            dispatch(addNews(newArticle));

            setTitle('');
            setText('');
            setGuest(false);
        }else{
            setTitle('');
            setText('');
            setGuest(true);
        }
    }

    const onClose = () => {
        setTitle('');
        setText('');
        setGuest(false);
        onAddNews();
    }


    let formClass = isAdd ? 'add add_hidden' : 'add';
    let loginError = isGuest ? <p className='add__error'>Войдите в систему</p> : null;
    return ReactDOM.createPortal(
        <div className={formClass}>
            <form className='add__form'>
                <div className='add__close' onClick = {() => onClose()}><img src={close}></img></div>
                <div>
                    <label className='add__form--label' htmlFor="name" >Название статьи</label>
                    <input className='add__form--input'
                        required
                        type="text" 
                        name="title" 
                        id="title" 
                        value={newTitle}
                        onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div>
                    <label className='add__form--label' htmlFor="text">Содержание статьи</label>
                    <textarea className='add__form--input add__form--input_textarea'
                        required
                        name="text" 
                        id="text" 
                        value={newText}
                        onChange={(e) => setText(e.target.value)}/>
                </div>
                {loginError}
                <button className='add__form--submit btn' type="submit" onClick={(e) => onSubmit(e)}>Создать</button>
            </form>
        </div>
    , document.body)
}

export default AddNewsForm;