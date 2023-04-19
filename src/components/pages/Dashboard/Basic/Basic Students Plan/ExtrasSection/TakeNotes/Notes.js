import React, { useState, useEffect } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import {
  collection,
  doc,
  getDocs,
  updateDoc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../../../../../firebase";

const toolbarOptions = [
  ["bold", "italic", "underline", "strike"],
  ["blockquote", "code-block", "link", "image", "video", "formula"],
  [{ header: 1 }, { header: 2 }],
  [{ list: "ordered" }, { list: "bullet" }],
  [{ script: "sub" }, { script: "super" }],
  [{ indent: "-1" }, { indent: "+1" }],
  [{ direction: "rtl" }],
  [{ size: ["small", false, "large", "huge"] }],
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ color: [] }, { background: [] }],
  [{ font: [] }],
  [{ align: [] }],
  ["clean"],
];

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);
  const [quill, setQuill] = useState(null);

  useEffect(() => {
    const q = new Quill("#container", {
      theme: "snow",
      modules: { toolbar: toolbarOptions },
    });
    setQuill(q);

    return () => {
      setQuill(null);
    };
  }, []);

  useEffect(() => {
    const fetchNotes = async () => {
      const notesCollection = collection(db, "notes");
      const notesSnapshot = await getDocs(notesCollection);
      const notesData = notesSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNotes(notesData);
    };

    fetchNotes();

    return () => {
      setNotes([]);
    };
  }, []);

  useEffect(() => {
    if (quill) {
      quill.on("text-change", (delta) => {
        if (currentNote) {
          const noteRef = doc(db, "notes", currentNote.id);
          updateDoc(noteRef, { content: quill.root.innerHTML });
        }
      });
    }

    return () => {
      if (quill) {
        quill.off("text-change");
      }
    };
  }, [quill, currentNote]);

  const handleNoteClick = (note) => {
    setCurrentNote(note);
    if (quill) {
      quill.root.innerHTML = note.content;
    }
  };

  const handleNewNoteClick = () => {
    setCurrentNote(null);
    if (quill) {
      quill.root.innerHTML = "";
    }
  };

  const handleSaveClick = async () => {
    const content = quill.root.innerHTML;
    if (currentNote) {
      const noteRef = doc(db, "notes", currentNote.id);
      await updateDoc(noteRef, { content });
      const updatedNotes = notes.map((note) =>
        note.id === currentNote.id ? { ...note, content } : note
      );
      setNotes(updatedNotes);
    } else {
      const noteRef = await addDoc(collection(db, "notes"), { content });
      const newNote = { id: noteRef.id, content };
      setNotes([...notes, newNote]);
      setCurrentNote(newNote);
    }
  };
  const handleDeleteClick = async () => {
    if (currentNote) {
      const noteRef = doc(db, "notes", currentNote.id);
      await deleteDoc(noteRef);
      const updatedNotes = notes.filter((note) => note.id !== currentNote.id);
      setNotes(updatedNotes);
      setCurrentNote(null);
      if (quill) {
        quill.root.innerHTML = "";
      }
    }
  };
  return (
    <>
      <div className="notes-container" id="TakeNotesCss">
        <div className="notes-list">
          <button className="btngreen" onClick={handleNewNoteClick}>
            New Note
          </button>
          {notes.map((note) => (
            <div
              key={note.id}
              className={`note ${note.id === currentNote?.id ? "active" : ""}`}
              onClick={() => handleNoteClick(note)}
            >
              <div dangerouslySetInnerHTML={{ __html: note.content }}></div>
            </div>
          ))}
        </div>
        <div className="editor-container">
          <div id="container"></div>
          <button className="btngreen" onClick={handleSaveClick}>
            Save
          </button>
          <button className="btnred" onClick={handleDeleteClick}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
};
export default Notes;
