const ADD_POST = "ADD-POST"

export const addPostAC = (post) => (
    {
        type: ADD_POST,
        post
    }
)

export const PostsReducer = (state, action) => {
    if (action.type === ADD_POST) {
        return ({
            ...state,
            postsPage : [
                ...state.postsPage,
                {...action.post}
            ]
        })
    } else {
        return state
    }
}