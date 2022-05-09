//имитация "базы"
const initialState = {
    filter: '',
    activeUser: {login: 'Гость', rights: 'guest'},
    user: [{
        login: 'Alex',
        password: '123123',
        rights: 'user'
    },
    {
        login: 'Admin',
        password: 'admin',
        rights: 'admin'
    },
    ],
    news: [{
        id: 1,
        title: 'Что мы узнали на CinemaCon-2022 в Лас-Вегасе',
        metaTitle: 'что мы узнали на cinemacon-2022 в лас-вегасе',
        text: 'С 25 по 28 апреля в Лас-Вегасе проходил десятый ежегодный конвент CinemaCon, который каждую весну собирает несколько тысяч представителей мировой киноиндустрии. Помимо индустриальных панелей, на конвенте обычно проводят презентации пакетов студий-мейджоров. В этом году свои релизы представили Warner Brothers, Sony Pictures, The Walt Disney Studios, Paramount Pictures и Universal Studio, а вот Netflix и Amazon Studio в Лас-Вегас не приехали.',
        date: '29 апреля',
        approve: true,
    },
    {
        id: 2,
        title: 'Канны объявили программу. В основной конкурс снова вошел фильм Кирилла Серебренникова',
        metaTitle: 'канны объявили программу. в основной конкурс снова вошел фильм кирилла серебренникова',
        text: 'Организаторы Каннского фестиваля объявили программу 75-го смотра. Он пройдет с 17 по 28 мая. Фильмом открытия станет комедия о зомби «Окончательный монтаж» Мишеля Хазанавичуса.',
        date: '14 апреля',
        approve: true,
    },
    {
        id: 3,
        title: 'Что показали в новом трейлере «Очень странных дел»?',
        metaTitle: 'что показали в новом трейлере «очень странных дел»?',
        text: 'Спустя почти три года после предыдущего сезона на Netflix выходит продолжение сериала «Очень странные дела» о группе школьников из города Хоукинс, которые сталкиваются с монстрами из потустороннего мира. Вчера Netflix выпустил первый полноценный трейлер четвертого сезона. Мы разобрались, что за новый монстр появился в ролике и чего еще ждать от продолжения. А заодно вспомнили, что зрители увидели в предыдущем сезоне.',
        date: '13 апреля',
        approve: true,
    },
    {
        id: 4,
        title: 'Что показали в новом трейлере «Очень странных дел»?',
        metaTitle: 'что показали в новом трейлере «очень странных дел»?',
        text: 'Спустя почти три года после предыдущего сезона на Netflix выходит продолжение сериала «Очень странные дела» о группе школьников из города Хоукинс, которые сталкиваются с монстрами из потустороннего мира. Вчера Netflix выпустил первый полноценный трейлер четвертого сезона. Мы разобрались, что за новый монстр появился в ролике и чего еще ждать от продолжения. А заодно вспомнили, что зрители увидели в предыдущем сезоне.',
        date: '13 апреля',
        approve: false,
    },
    ],
    filteredNews: [{
        id: 1,
        title: 'Что мы узнали на CinemaCon-2022 в Лас-Вегасе',
        metaTitle: 'что мы узнали на cinemacon-2022 в лас-вегасе',
        text: 'С 25 по 28 апреля в Лас-Вегасе проходил десятый ежегодный конвент CinemaCon, который каждую весну собирает несколько тысяч представителей мировой киноиндустрии. Помимо индустриальных панелей, на конвенте обычно проводят презентации пакетов студий-мейджоров. В этом году свои релизы представили Warner Brothers, Sony Pictures, The Walt Disney Studios, Paramount Pictures и Universal Studio, а вот Netflix и Amazon Studio в Лас-Вегас не приехали.',
        date: '29 апреля',
        approve: true,
    },
    {
        id: 2,
        title: 'Канны объявили программу. В основной конкурс снова вошел фильм Кирилла Серебренникова',
        metaTitle: 'канны объявили программу. в основной конкурс снова вошел фильм кирилла серебренникова',
        text: 'Организаторы Каннского фестиваля объявили программу 75-го смотра. Он пройдет с 17 по 28 мая. Фильмом открытия станет комедия о зомби «Окончательный монтаж» Мишеля Хазанавичуса.',
        date: '14 апреля',
        approve: true,
    },
    {
        id: 3,
        title: 'Что показали в новом трейлере «Очень странных дел»?',
        metaTitle: 'что показали в новом трейлере «очень странных дел»?',
        text: 'Спустя почти три года после предыдущего сезона на Netflix выходит продолжение сериала «Очень странные дела» о группе школьников из города Хоукинс, которые сталкиваются с монстрами из потустороннего мира. Вчера Netflix выпустил первый полноценный трейлер четвертого сезона. Мы разобрались, что за новый монстр появился в ролике и чего еще ждать от продолжения. А заодно вспомнили, что зрители увидели в предыдущем сезоне.',
        date: '13 апреля',
        approve: true,
    },
    {
        id: 4,
        title: 'Что показали в новом трейлере «Очень странных дел»?',
        metaTitle: 'что показали в новом трейлере «очень странных дел»?',
        text: 'Спустя почти три года после предыдущего сезона на Netflix выходит продолжение сериала «Очень странные дела» о группе школьников из города Хоукинс, которые сталкиваются с монстрами из потустороннего мира. Вчера Netflix выпустил первый полноценный трейлер четвертого сезона. Мы разобрались, что за новый монстр появился в ролике и чего еще ждать от продолжения. А заодно вспомнили, что зрители увидели в предыдущем сезоне.',
        date: '13 апреля',
        approve: false,
    },
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case 'FILTER_NEWS':
            return {
                ...state,
                filter: action.payload,
                //filteredNews является основным источником данных для новостей
                filteredNews: action.payload.split(' ').join('').length === 0 ? state.news : state.news.filter(el=> el.metaTitle.indexOf(action.payload.toLowerCase()) > -1)
            }
        
        case 'DELETE_NEWS':
            let deletedNews = state.news.filter(el => el.id !== action.payload)
            return {
                ...state,
                news: deletedNews,
                filteredNews: state.filter.split(' ').join('').length === 0 ? deletedNews : state.news.filter(el=> el.metaTitle.indexOf(state.filter.toLowerCase()) > -1)
            }
        case 'APPROVE_NEWS':
            let approvedNewsIndex = state.news.findIndex(el => el.id === action.payload),
                old = state.news[approvedNewsIndex],
                newNews = {...old, approve: true};

            let approvedNews = [...state.news.slice(0, approvedNewsIndex), newNews , ...state.news.slice(approvedNewsIndex + 1)]
            return{
                ...state,
                news: approvedNews,
                filteredNews: state.filter.split(' ').join('').length === 0 ? approvedNews : approvedNews.filter(el=> el.metaTitle.indexOf(state.filter.toLowerCase()) > -1)
            }
        case 'ADD_NEWS':
            let addedNews = [...state.news, action.payload];

            return{
                ...state,
                news: addedNews,
                filteredNews: state.filter.split(' ').join('').length === 0 ? addedNews : addedNews.filter(el=> el.metaTitle.indexOf(state.filter.toLowerCase()) > -1)
            }
        case 'LOGIN':
            return {
                ...state,
                activeUser: action.payload,
            }
        case 'LOGOUT':
            return {
                ...state,
                activeUser: {login: 'Гость', rights: 'guest'}
            }
        default: return state
    }
}

export default reducer;