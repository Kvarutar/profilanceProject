export const filterNews = (filter) => {
    return {
        type: 'FILTER_NEWS',
        payload: filter
    }
}

export const deleteNews = (id) => {
    return {
        type: 'DELETE_NEWS',
        payload: id
    }
}

export const newsApprove = (id) => {
    return {
        type: 'APPROVE_NEWS',
        payload: id
    }
}

export const addNews = (body) => {
    return {
        type: 'ADD_NEWS',
        payload: body
    }
}

export const login = (user) => {
    return {
        type: 'LOGIN',
        payload: user
    }
}

export const logout = () => {
    return {
        type: 'LOGOUT'
    }
}

