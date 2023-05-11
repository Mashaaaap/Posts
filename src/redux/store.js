import { UsersReducer } from "./reducers/usersReducer"
import { PostsReducer } from "./reducers/postsRedecures"

let store = { 
    _state: { 
        usersPage: [
            {
                id: 1,
                name: "Alex"
            }, 
            {
                id: 2,
                name: "Bob"
            }
        ],
        postsPage: [ 
            {
                id: 1,
                text: "Some Text 1"
            },
            {
                id: 2,
                text: "Some Text 2"
            }
        ]
    },
    getState() {
        return this._state
    },
    dispatch(action){ 
        this._state = UsersReducer(this._state, action)
        this._state = PostsReducer(this._state, action)
    }
}

export default store