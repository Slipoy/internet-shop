const STORE_USER = 'store_user';

const initialState = localStorage.getItem(STORE_USER);
const initialStateToObject = JSON.parse(initialState);

const currState = {
    login: initialStateToObject ? initialStateToObject.login : null
}

const reducerLog = (state = currState, action) => {
    switch(action.type) {
        case 'LOG_IN': {
            localStorage.setItem(STORE_USER, JSON.stringify(action.payload))
            return state = action.payload;
        }
        case 'LOG_OUT': {
            localStorage.removeItem(STORE_USER)
            return state = action.payload;
        }
        default:
            return state;
    }
}


export const logIn = (loginData) => {
    return {
        type: 'LOG_IN',
        payload: loginData
    }
}

export const logOut = () => {

    const loginData = {
        login: null,
        password: null,
    }

    return {
        type: 'LOG_IN',
        payload: loginData
    }
}



export default reducerLog;