const ADD_USER = "ADD-USER"
const REMOVE_USER = "REMOVE-USER"

export const addUserAC = (user) => (
    {
        type: ADD_USER,
        user
    }
)

export const removeUserAC = (id) => ({ 
        type: REMOVE_USER,
        id
    }
)

export const UsersReducer = (state, action) => {
    if (action.type === ADD_USER) {
        return ( {
            ...state,
            usersPage: [
                ...state.usersPage, 
                {...action.user}
            ]
        })
    } else { 
        return state
    }
}

/*
dispatch(addUserAC({id:3, name:"John"}))
*/