import React, { useEffect, useState } from 'react'
import axios from "axios"
const App = () => {
  const [notes, setnotes] = useState([])

  function fetchnotes(){
    axios.get("http://localhost:3000/api/notes")
        .then((res) => {
          setnotes(res.data.notes)
        })
  }

  useEffect(()=>{
      fetchnotes()
  },[])

  function submitHandler(e){
    e.preventDefault()
    const {title,description} = e.target.elements
    console.log(title.value,description.value);
    axios.post("http://localhost:3000/api/notes",{
      title:title.value,
      description:description.value    })  
    .then((res)=>{
      console.log(res.data);
      fetchnotes()
    })  
  }

  function handleDeleteNote(noteId){
    axios.delete("http://localhost:3000/api/notes/"+noteId)
    .then((res)=>{
      console.log(res.data);
      fetchnotes()
    })
  }
  return (
    <>
    <form className='note-create-form' onSubmit={submitHandler}>
      <input name='title' type="text" placeholder='Enter title' />
      <input name='description' type="text" placeholder='Enter description' />
      <button>Create note</button>
    </form>

    <div className="notes">
      {notes.map((note)=>{
        return <div className="note" key={note._id}>
          <h1>{note.title}</h1>
          <p>{note.description}</p>
          <button onClick={()=>{handleDeleteNote(note._id)}}>delete</button>
        </div>
      })}
    </div>
    </>
  )
}

export default App
