import User from "./User"
import s from "../Style/Style.css"
import { useEffect, useRef } from "react"
import {addUserAC} from "../../redux/reducers/usersReducer"
const Users = (props) => {
    let UsersCollection = props.state.map((user, index) => { 
        return (
            <User key={index} name={user.name}/>
        )
    }) 
    useEffect(() =>{ 
        form.btnCreate.current.addEventListener('click', () => {
            let newUser = { 
                id: props.state[props.state.length-1].id + 1,
                name: form.input.current.value
            }
            props.dispatch(addUserAC(newUser))
            props.reRender(props.getState(),props.getState, props.dispatch )
        })
    }, [])
    console.log(props)
    
    let form = {
        input: useRef(null),
        btnCreate: useRef(null)
    }
    
    return (
        <div>
           <h1>Users</h1>
           {UsersCollection}
           <hr/>
           <input ref={form.input} className={s.text} placeholder="Write name"/>
           <button ref={form.btnCreate} className={s.btn}>Create</button>
        </div>
    )
}

export default Users