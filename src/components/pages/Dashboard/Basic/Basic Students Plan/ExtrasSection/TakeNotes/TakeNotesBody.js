import React, { useState } from 'react'

const TakeNotesBody = ({ note, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [updatedTitle, setUpdatedTitle] = useState(note.title)
  const [updatedBody, setUpdatedBody] = useState(note.body)

  const handleDelete = () => {
    onDelete(note.id)
  }

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleSave = () => {
    onEdit({
      id: note.id,
      title: updatedTitle,
      body: updatedBody,
    })
    setIsEditing(false)
  }

  const handleCancel = () => {
    setIsEditing(false)
    setUpdatedTitle(note.title)
    setUpdatedBody(note.body)
  }

  const handleTitleChange = (event) => {
    setUpdatedTitle(event.target.value)
  }

  const handleBodyChange = (event) => {
    setUpdatedBody(event.target.value)
  }

  if (isEditing) {
    return (
      <div>
        <input value={updatedTitle} onChange={handleTitleChange} />
        <textarea value={updatedBody} onChange={handleBodyChange} />
        <button className='btn' onClick={handleSave}>Save</button>
        <button className='btn' onClick={handleCancel}>Cancel</button>
      </div>
    )
  } else {
    return (
      <div>
        <span><h3>{note.title}</h3></span>
        <p><i>{note.body}</i></p>
        <button className='btn' onClick={handleEdit}>Edit</button>
        <button className='btn' onClick={handleDelete}>Delete</button>
      </div>
    )
  }
}

export default TakeNotesBody
