import { useState } from "react"
const Notes = () => { 
    const [notes, setNotes] = useState([]) 
    let newNote = {
        id: 1,
        text: "Some text"
    }
    setNotes([...notes, newNote])
}