import {addPostAC} from '../../redux/reducers/postsRedecures'
import { useEffect, useRef } from "react"
import s from "../Style/Style.css"
import Post from "./Post"

const Posts = (props) => {
    let PostsCollection = props.state.map((posts, index) => {
        return (
            <Post key={index} text = {posts.text}/>
        )
    })
    
    useEffect(() => {
        crt.btn.current.addEventListener("click", () => {
            let newPost = {
                id: props.state[props.state.length - 1].id + 1,
                text: crt.text.current.value
            }
            props.dispatch(addPostAC(newPost))
            props.reRender(props.getState(),props.getState, props.dispatch )
        })
    }, [])

    let crt = {
        text: useRef(null),
        btn: useRef(null)
    }

    return (
        <div>
            <h1>Posts</h1>
            {PostsCollection}
            <textarea name="" ref={crt.text}  className={s.text} id="" cols="30" rows="10"></textarea>
            <button ref={crt.btn} className={s.btn}>Post</button>
        </div>
    )
}

export default Posts