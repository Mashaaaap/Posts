import Users from "./Components/Users/Users"
import Posts from "./Components/Posts/Posts"

const App = (props) => { 
    return(
        <div>
            <Users
                state = {props.state.usersPage}
                getState = {props.getState}
                dispatch = {props.dispatch}
                reRender = {props.reRender}
            />

            <Posts
                state = {props.state.postsPage}
                getState = {props.getState}
                dispatch = {props.dispatch}
                reRender = {props.reRender}
            />

        </div>
    )
}

export default App