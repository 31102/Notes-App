import React from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


const NotesList = (props) => {

    function delteItem(){
        props.delteProp(props.id)
    }
    return (
        <>
            <div className='abc'>
            <div className="main2">
                <h1>{props.title}</h1>
                <br />
                <p>{props.message}</p>
                <button onClick={delteItem} className='btn btn-danger btn2'>
                    <DeleteForeverIcon />
                </button>
            </div>
            </div>
        </>
    )
}

export default NotesList
