import React, { useState } from 'react'
import Header from "./Header"
import Footer from "./Footer"
import "./style.css"
import Note from "./Note"
import NotesList from "./NotesList"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
const App = () => {

  const [notesList, setNotesList] = useState([]);

  function addition(note) {
    setNotesList((e) => {
      return [
        ...e,
        note
      ]
    })
  }

  function deleteNote(id) {
    setNotesList((perVal) => {
      
      return perVal.filter((arr , index) => {
        return index !== id
      })
    })

  }

  return (
    <>
      <Header />
      <Note 
      NotesAdd={addition}
      />
      {notesList.map((cuurentVal, index) => {
        return (
          <NotesList
            title={cuurentVal.title}
            message={cuurentVal.message}
            key={index}
            id={index}
            delteProp={deleteNote} />
        )
      })}
      <Footer />
    </>
  )
}

export default App
