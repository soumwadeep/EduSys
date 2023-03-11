import { useState } from "react";

const TakeNotesBody = ({ note, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(note.title);
  const [updatedBody, setUpdatedBody] = useState(note.body);

  const handleDelete = () => {
    onDelete(note.id);
  };

  const handleSave = () => {
    const updatedNote = {
      id: note.id,
      title: updatedTitle,
      body: updatedBody,
    };
    onEdit(updatedNote);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setUpdatedTitle(note.title);
    setUpdatedBody(note.body);
  };

  return (
    <div id="TakeNotesCss">
      {!isEditing ? (
        <>
          <h3>{note.title}</h3>
          <p>
            <i>{note.body}</i>
          </p>
          <button className="btn" onClick={() => setIsEditing(true)}>
            Edit
          </button>
          &nbsp;
          <button className="btn" onClick={handleDelete}>
            Delete
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
          <textarea
            value={updatedBody}
            onChange={(e) => setUpdatedBody(e.target.value)}
          />
          <button className="btn" onClick={handleSave}>
            Save
          </button>
          <button className="btn" onClick={handleCancel}>
            Cancel
          </button>
        </>
      )}
    </div>
  );
};

export default TakeNotesBody;
