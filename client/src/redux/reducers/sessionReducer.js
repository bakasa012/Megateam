import * as actionTypes from "../actions";
// const user = {
//     first_name: 'Shen',
//     last_name: 'Zhi',
//     email: 'demo@devias.io',
//     avatar: '/images/avatars/avatar_11.png',
//     bio: 'Brain Director',
//     role: 'ADMIN' // ['GUEST', 'USER', 'ADMIN']
// }

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
    isLoggedIn: false,
    user:{
        first_name: 'Shen',
        last_name: 'Zhi',
        email: 'demo@devias.io',
        avatar: '/images/avatars/avatar_11.png',
        bio: 'Brain Director',
        role: 'ADMIN' // ['GUEST', 'USER', 'ADMIN']
    },
    data:{}
};


const sessionReducer = (state = initialState, action) => {
    const { type, data } = action
    switch (action.type) {
        case actionTypes.SESSION_LOGIN:
            return {
                ...state,
                isLoggedIn: true,
                user:user,
                data
                // ...initialState
            }
        case actionTypes.SESSION_LOOUT:
            return {
                ...state,
                isLoggedIn: false,
                user:null
            }
        default:
            return state;
    }
}

export default sessionReducer