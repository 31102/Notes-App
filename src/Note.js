import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';


const Note = (props) => {

  const [note, setNote] = useState({
    title: "",
    message: ""
  })

  const [show, setshow] = useState(false);

  function InputEvent(event) {
    const value = event.target.value;
    const name = event.target.name;

    setNote((e) => {
      return {
        ...e,
        [name]: value
      }
    })
  }
  function addNote() {
    props.NotesAdd(note)
    setNote({
      title: "",
      message: ""
    })
  }

  function showTextBox() {
    setshow(true)
  }
  function notshowTextBox() {
    setshow(false)
  }

  return (
    <>{show ?
      <div className="main xyx"onDoubleClick={notshowTextBox} >
        <input type="text" placeholder='Title' value={note.title} onChange={InputEvent} name='title' />
        <textarea
          cols={36}
          rows={5}
          placeholder='Message'
          name='message'
          value={note.message}
          onChange={InputEvent}></textarea>


        <button style={{ position: "absolute", bottom: "-20px", right: "-30px" }} onClick={addNote} className='btn btn-success'>
          <AddIcon />
        </button>
      </div>
      : <div className="main" onClick={showTextBox} >
      <p className='xyx' style={{fontSize:"25px"}}>Write something here.....</p>
      </div>
}
    </>
  )
}

export default Note
